<script setup>
import TheBanner from '@/components/TheBanner.vue'
import BaseSlider from '@/components/BaseSlider.vue'
import { MOVIES_CATEGORIES } from '@/utils/constants'
</script>

<template>
  <TheBanner />
  <div :style="{ overflow: 'hidden' }">
    <BaseSlider :sort-by="MOVIES_CATEGORIES.POPULAR" />
  </div>
</template>
