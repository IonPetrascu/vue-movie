<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useTVStore } from '@/stores/tv'
const tvStore = useTVStore()
const route = useRoute()
const id = route.params.id
const tvShowDetails = computed(() => tvStore.tvShowDetails)

onMounted(() => {
  tvStore.getTVShowDetails(id)
  console.log(tvShowDetails)
})
</script>
<template>
  <div class="wrapper">
    <img
      :src="`https://image.tmdb.org/t/p/w1280${tvShowDetails.backdrop_path}`"
      :alt="tvShowDetails.title"
    />
    <h2>{{ tvShowDetails.title }}</h2>
    <p>{{ tvShowDetails.overview }}</p>
    <span>Budget:{{ tvShowDetails.buget }}</span>
    <span>{{ tvShowDetails.adult ? '18+' : '' }}</span>
    <span>runtime {{ tvShowDetails.runtime }}m</span>
    <span>revenue {{ tvShowDetails.revenue }}$</span>
    <span>status {{ tvShowDetails.status }}</span>
    <span>vote {{ tvShowDetails.vote_average }}</span>
    <span>vote count {{ tvShowDetails.vote_count }}</span>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
