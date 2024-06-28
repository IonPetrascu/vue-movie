<script setup>
import TheBanner from '@/components/TheBanner.vue'
import BaseSlider from '@/components/BaseSlider.vue'
</script>

<template>
  <TheBanner />
  <div :style="{ overflow: 'hidden' }"><BaseSlider :array="[1, 2, 3, 4, 5, 6]" /></div>
</template>
