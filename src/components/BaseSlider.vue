<script setup>
import { ref } from 'vue'
import { GAP_SLIDER } from '@/utils/constants'
import { onWheel } from '../utils/functions'

defineProps({
  array: Array
})

const card = ref(null)
const slider = ref(null)

const handleWheel = (e) => {
  onWheel(e, slider, card)
}
</script>

<template>
  <div @wheel="handleWheel" ref="slider" :class="$style.slider">
    <div
      :style="{ marginLeft: item !== 0 ? `${GAP_SLIDER}px` : '0' }"
      :class="$style.slideItem"
      :item="item"
      ref="card"
      v-for="(item, idx) in array"
      :key="idx"
    ></div>
  </div>
</template>

<style module>
.slider {
  width: 100%;
  height: 200px;
  display: flex;
  position: relative;
  transition: all 0.4s ease;
  left: 0px;
}
.slideItem {
  min-width: calc((100% - 72px) / 4);
  background: red;
}
</style>
