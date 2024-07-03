<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  list: Array
})

onMounted(() => {
  console.log(props.list)
})
</script>
<template>
  <div>
    <div v-for="item in list" :key="item.id">{{ item.name }}</div>
  </div>
</template>
<style scoped></style>
