<script setup>
import { ref } from 'vue'
const isFocused = ref(false)

defineProps({
  item: {
    required: true,
    type: Object
    //validator:
  }
})
</script>
<template>
  <div @mouseover="isFocused = true" @mouseleave="isFocused = false" :class="$style.body">
    <img
      :class="$style.img"
      :src="`https://image.tmdb.org/t/p/w500${item.backdrop_path}`"
      :alt="item.title"
    />
    <div :class="[$style.infoWrapper, isFocused && $style.infoActive]">
      <div :class="$style.info">
        <span>{{ item.release_date }}</span>
        <span>{{ item.vote_average }}</span>
      </div>
    </div>
  </div>
  <div :class="$style.title">{{ item.title }}</div>
</template>
<style module>
.body {
  height: 80%;
  display: flex;
  position: relative;
}
.infoWrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0);
  opacity: 0;
  transition: all 0.4s ease;
}
.infoActive {
  opacity: 0.5;
}
.img {
  width: 100%;
  object-fit: cover;
  height: 100%;
}
.title {
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.info {
  position: relative;
  z-index: 10;
}
</style>
