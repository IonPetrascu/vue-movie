<script setup>
import { onMounted, provide } from 'vue'
import { useRouter } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import { useMoviesStore } from './stores/movies'

const moviesStore = useMoviesStore()
const router = useRouter()

onMounted(moviesStore.getGenres)

function goToPage(namePage, params) {
  console.log(namePage, params)
  router.push({ name: namePage, params: { id: params } })
}

provide('goToPage', goToPage)
</script>

<template>
  <TheHeader />
  <RouterView />
</template>
