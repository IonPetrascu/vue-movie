<script setup>
import { isListNavValid } from '../utils/validators'
defineProps({
  list: {
    required: true,
    type: Array,
    validator: isListNavValid
  }
})
</script>
<template>
  <nav>
    <ul :class="$style.nav">
      <li :key="idx" v-for="({ path, name }, idx) in list">
        <RouterLink :to="path">{{ name }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>
<style module>
.nav {
  display: flex;
  gap: 30px;
  font-size: 24px;
  text-transform: uppercase;
}
</style>
