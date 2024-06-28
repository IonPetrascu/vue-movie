<script setup>
import { GAP_SLIDER } from '@/utils/constants'
import { ref } from 'vue'

defineProps({
  item: Number
})
const itemRef = ref(null)
defineExpose({
  itemRef
})
</script>
<template>
  <div
    ref="itemRef"
    :style="{ marginLeft: item !== 0 ? `${GAP_SLIDER}px` : '0' }"
    :class="$style.slideItem"
  >
    {{ item }}
  </div>
</template>
<style module>
.slideItem {
  min-width: calc((100% - 72px) / 4);
  background: red;
}
</style>
