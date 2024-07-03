<script setup>
import { onMounted, computed, watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useMoviesStore } from '@/stores/movies'
import BaseCardItem from '@/components/BaseCardItem.vue'

const moviesStore = useMoviesStore()
const movies = computed(() => moviesStore.movies)
const route = useRoute()
const type = route.params.type
const currentPage = ref(1)
console.log(type)

watch(
  () => route.params.type,
  (newType, oldType) => {
    if (newType !== oldType) {
      moviesStore.getMovies(newType)
    }
  }
)
onMounted(() => {
  moviesStore.getMovies(type)
})

function getNextPageMovies() {
  currentPage.value += 1
  moviesStore.getMoviesFromNextPage(type, currentPage.value)
}
</script>
<template>
  <div>
    <ul :class="$style.itemWrapper">
      <div :class="$style.item" :key="item.id" v-for="item in movies">
        <BaseCardItem :item="item" />
      </div>
    </ul>
    <button @click="getNextPageMovies">next page</button>
  </div>
</template>

<style module>
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
