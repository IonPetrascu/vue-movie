<script setup>
import icons from '../utils/icons'
import { isNameSvgValid, isHeightOrWidthValid } from '../utils/validators'

defineProps({
  name: {
    type: String,
    required: true,
    validator: isNameSvgValid
  },
  width: {
    default: 24,
    required: false,
    type: Number,
    validator: isHeightOrWidthValid
  },
  height: {
    default: 24,
    required: false,
    type: Number,
    validator: isHeightOrWidthValid
  }
})
</script>
<template>
  <div :style="{ width: `${width}px`, height: `${height}px` }" v-html="icons[name]"></div>
</template>
