<script setup>
import { useMoviesStore } from '@/stores/movies'
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
const moviesStore = useMoviesStore()
const movieDetails = computed(() => moviesStore.movieDetails)

onMounted(() => {
  moviesStore.getMovieDetails(id)
  console.log(movieDetails)
})
</script>

<template>
  <div v-if="movieDetails && Object.keys(movieDetails).length">
    <h1>{{ movieDetails.title }}</h1>
    <p>{{ movieDetails.overview }}</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>
