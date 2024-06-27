<script setup>
import BaseLogo from '@/components/BaseLogo.vue'
import BaseNav from '@/components/BaseNav.vue'
import { getNavList } from '../utils/functions'

const navList = getNavList()
</script>

<template>
  <header :class="$style.header">
    <BaseLogo />
    <BaseNav :list="navList" />
  </header>
</template>

<style module>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 15px;
}
</style>
