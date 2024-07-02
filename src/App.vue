<script setup>
import { onMounted } from 'vue'
import TheHeader from './components/TheHeader.vue'
import { useMoviesStore } from './stores/movies'

const moviesStore = useMoviesStore()

onMounted(moviesStore.getGenres)
</script>

<template>
  <TheHeader />
  <RouterView />
</template>
