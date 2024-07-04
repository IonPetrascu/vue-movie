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
  <div :class="$style.page">
    <ul :class="$style.itemWrapper">
      <div :class="$style.item" :key="item.id" v-for="item in movies">
        <BaseCardItem type="movies" :item="item" />
      </div>
    </ul>
    <button :class="$style.btn" @click="getNextPageMovies">Load more</button>
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
