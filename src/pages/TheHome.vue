<script setup>
import TheBanner from '@/components/TheBanner.vue'
import BaseSlider from '@/components/BaseSlider.vue'
import { MOVIES_TYPES } from '@/utils/constants'
</script>

<template>
  <TheBanner />
  <div :style="{ overflow: 'hidden' }">
    <BaseSlider :sort-by="MOVIES_TYPES.POPULAR" />
  </div>
</template>
