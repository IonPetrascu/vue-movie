<script setup>
import BaseCardItem from './BaseCardItem.vue'
defineProps({
  person: {
    type: Object,
    required: true
    //validator
  }
})
</script>
<template>
  <div :class="$style.cardPerson">
    <img
      :class="$style.img"
      :src="`https://image.tmdb.org/t/p/w500/${person.profile_path}`"
      :alt="person.original_name"
    />
    <div :class="$style.name">{{ person.name }}</div>
    <div :class="$style.wrapperMovies">
      <div :class="$style.wrapper" :key="movie.id" v-for="movie in person.known_for">
        <BaseCardItem :type="movie.media_type" :item="movie" />
      </div>
    </div>
  </div>
</template>
<style module>
.wrapperMovies {
  display: flex;
  gap: 10px;
}
.img {
  width: 100%;
  max-height: 300px;
  min-height: 200px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--red) 0px 25px 20px -20px;
}
.wrapper {
  width: 150px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 10px;
}

.cardPerson {
  width: calc((100% - 60px) / 4);
}
.name {
  font-size: 20px;
  text-align: center;
  margin-block: 10px;
}

@media screen and (max-width: 1080px) {
  .cardPerson {
    width: calc((100% - 40px) / 3);
  }
}

@media screen and (max-width: 800px) {
  .cardPerson {
    width: calc((100% - 20px) / 2);
  }
}

@media screen and (max-width: 550px) {
  .cardPerson {
    width: calc((100% - 20px) / 1);
  }
}
</style>
