<script setup>
import { isListNavValid } from '../utils/validators'
import { ROUTES_SUBPAGES } from '@/utils/router'
import { ref } from 'vue'

defineProps({
  list: {
    required: true,
    type: Array,
    validator: isListNavValid
  }
})
const hoverIndex = ref(null)

function setHoverIndex(idx) {
  hoverIndex.value = idx
}
</script>
<template>
  <nav>
    <ul :class="$style.nav">
      <li
        @mouseover="() => setHoverIndex(idx)"
        @mouseleave="() => setHoverIndex(null)"
        :class="$style.link"
        :key="idx"
        v-for="({ name }, idx) in list"
      >
        {{ name }}
        <div v-if="hoverIndex === idx && ROUTES_SUBPAGES[name]" :class="$style.subpages">
          <RouterLink
            :to="`/${name}/${item.type}`"
            :key="idx"
            v-for="(item, idx) in ROUTES_SUBPAGES[name]"
            >{{ item.name }}</RouterLink
          >
        </div>
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
.link {
  position: relative;
  cursor: pointer;
}
.subpages {
  position: absolute;
  z-index: 1;
  background: var(--violet4);
  padding: 10px;
  font-size: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: max-content;
  top: 30px;
  left: 0;
}
</style>
