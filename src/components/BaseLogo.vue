<script setup>
import BaseIcon from '@/components/BaseIcon.vue'
import { ROUTER_PATH } from '../utils/router'
import { titleLogo } from '../utils/constants'
</script>
<template>
  <RouterLink :class="$style.logo" :to="ROUTER_PATH.HOME.path">
    <BaseIcon :width="40" :height="40" name="camera" />
    {{ titleLogo }}
  </RouterLink>
</template>
<style module>
.logo {
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 24px;
}
</style>
