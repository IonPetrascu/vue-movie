<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { usePeopleStore } from '@/stores/people'
import BaseCardPerson from '@/components/BaseCardPerson.vue'

const peopleStore = usePeopleStore()
const route = useRoute()
const type = route.params.type
const people = computed(() => peopleStore.people)

onMounted(() => peopleStore.getPeople(type))

console.log(people)
</script>

<template>
  <div :class="$style.wrapper">
    <BaseCardPerson
      :class="$style.cardPerson"
      :person="person"
      v-for="person in people"
      :key="person.id"
    />
    <button></button>
  </div>
</template>

<style module>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>
