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
      moviesStore.getMovies(newType, currentPage.value)
    }
  }
)
onMounted(() => {
  moviesStore.getMovies(type, currentPage.value)
})

function getNextPage() {
  currentPage.value += 1
  moviesStore.getMovies(type, currentPage.value)
}
</script>
<template>
  <div>
    <ul :class="$style.itemWrapper">
      <div :class="$style.item" :key="item.id" v-for="item in movies">
        <BaseCardItem :item="item" />
      </div>
    </ul>
    <button @click="getNextPage">next page</button>
  </div>
</template>

<style module>
.itemWrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.item {
  max-width: calc((100% - 60px) / 4);
  cursor: pointer;
}
</style>
