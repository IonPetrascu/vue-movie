<script setup>
import { useTVStore } from '@/stores/tv'
import { computed, onMounted, watch, ref } from 'vue'
import BaseCardItem from '@/components/BaseCardItem.vue'
import { useRoute } from 'vue-router'

const tvStore = useTVStore()
const tvShows = computed(() => tvStore.tvShows)
const route = useRoute()
const currentPage = ref(1)

onMounted(() => {
  tvStore.getTVShow('popular')
})

watch(
  () => route.params.type,
  (newType, oldType) => {
    if (newType !== oldType) {
      tvStore.getTVShow(newType)
    }
  }
)

function getNextPageTVShows() {
  currentPage.value += 1
  tvStore.getTVShowsFromNextPage(route.params.type, currentPage.value)
}
</script>
<template>
  <div :class="$style.page">
    <ul :class="$style.itemWrapper">
      <div :class="$style.item" :key="item.id" v-for="item in tvShows">
        <BaseCardItem type="tv" :item="item" />
      </div>
    </ul>
    <button :class="$style.btn" @click="getNextPageTVShows">Load more</button>
  </div>
</template>
<style module>
.page {
  padding-bottom: 40px;
}
.itemWrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.item {
  max-width: calc((100% - 60px) / 4);
  cursor: pointer;
}

.btn {
  border: none;
  font-size: 20px;
  padding: 5px 10px;
  border-radius: 5px;
  display: block;
  margin: 0 auto;
  cursor: pointer;
  background-color: #e63946;
  color: white;
  transition: all 0.3 ease-in-out;
}
.btn:hover {
  scale: 1.05;
}
@media screen and (max-width: 1080px) {
  .item {
    max-width: calc((100% - 40px) / 3);
  }
}

@media screen and (max-width: 800px) {
  .item {
    max-width: calc((100% - 20px) / 2);
  }
}

@media screen and (max-width: 550px) {
  .item {
    max-width: calc((100% - 20px) / 1);
  }
}
</style>
