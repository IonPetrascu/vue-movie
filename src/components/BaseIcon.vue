<script setup>
import icons from '../utils/icons'
import { isNameSvgValid } from '../utils/validators'

defineProps({
  name: {
    type: String,
    required: true,
    validator: isNameSvgValid
  }
})
</script>
<template>
  <div v-html="icons[name]"></div>
</template>
