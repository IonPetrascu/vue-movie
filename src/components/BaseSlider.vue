<script setup>
import { ref, onMounted, computed } from 'vue'
import { GAP_SLIDER, MOVIES_TYPES } from '@/utils/constants'
import { onWheel } from '../utils/functions'
import BaseCardItem from './BaseCardItem.vue'
import { useMoviesStore } from '@/stores/movies'
import { isSortByValid } from '@/utils/validators'

defineProps({
  sortBy: {
    required: true,
    type: String,
    validator: isSortByValid
  }
})
const card = ref(null)
const slider = ref(null)

const moviesStore = useMoviesStore()
const movies = computed(() => moviesStore.movies)

onMounted(() => moviesStore.getMovies(MOVIES_TYPES.POPULAR))

const emit = defineEmits(['changePoster'])

const handleWheel = (e) => {
  onWheel(e, slider, card)
}
</script>

<template>
  <div @wheel="handleWheel" ref="slider" :class="$style.slider">
    <div
      @mouseover="emit('changePoster', item)"
      :style="{
        marginLeft: idx !== 0 ? `${GAP_SLIDER}px` : '0'
      }"
      :class="$style.slideItem"
      ref="card"
      v-for="(item, idx) in movies"
      :key="item.id"
    >
      <BaseCardItem :item="item" />
    </div>
  </div>
</template>

<style module>
.slider {
  width: 100%;
  height: 250px;
  display: flex;
  position: relative;
  transition: all 0.4s ease;
  left: 0px;
  padding-block: 20px;
}
.slideItem {
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.2s ease;
  min-width: calc((100% - 72px) / 4);
}
.slideItem:hover {
  scale: 1.1;
}
</style>
