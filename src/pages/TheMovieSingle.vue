<script setup>
import { useMoviesStore } from '@/stores/movies'
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
const moviesStore = useMoviesStore()
const movieDetails = computed(() => moviesStore.movieDetails)

onMounted(async () => {
  await moviesStore.getMovieDetails(id)
})
</script>

<template>
  <div class="wrapper">
    <img
      :src="`https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`"
      :alt="movieDetails.title"
    />
    <h2>{{ movieDetails.title }}</h2>
    <p>{{ movieDetails.overview }}</p>
    <span>Budget:{{ movieDetails.buget }}</span>
    <span>{{ movieDetails.adult ? '18+' : '' }}</span>
    <span>runtime {{ movieDetails.runtime }}m</span>
    <span>revenue {{ movieDetails.revenue }}$</span>
    <span>status {{ movieDetails.status }}</span>
    <span>vote {{ movieDetails.vote_average }}</span>
    <span>vote count {{ movieDetails.vote_count }}</span>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
