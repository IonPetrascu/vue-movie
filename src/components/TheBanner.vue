<script setup>
import BaseSlider from './BaseSlider.vue'
import { useMoviesStore } from '@/stores/movies'
import { ref, watchEffect, computed, inject } from 'vue'
import { getNamesOfGenres } from '@/utils/functions'
import { ROUTER_PATH } from '@/utils/router'
import { MOVIES_TYPES } from '@/utils/constants'

const moviesStore = useMoviesStore()
const movies = computed(() => moviesStore.movies)
const activeMovie = ref(null)

const genres = computed(() => {
  if (activeMovie.value && activeMovie.value.genre_ids) {
    return getNamesOfGenres(activeMovie.value.genre_ids, moviesStore.genres)
  } else {
    return []
  }
})

watchEffect(() => {
  if (movies.value && movies.value.length > 0) {
    activeMovie.value = movies.value[0]
  } else {
    console.log('No movies available yet.')
  }
})

function changePoster(item) {
  activeMovie.value = item
}

const goToPage = inject('goToPage')
</script>

<template>
  <div
    :style="{
      backgroundImage: `url(https://image.tmdb.org/t/p/w780/${activeMovie?.backdrop_path})`
    }"
    @wheel="handleWheel"
    :class="$style.banner"
  >
    <div :class="$style.content">
      <h2 :class="$style.title">{{ activeMovie?.title }}</h2>
      <div :class="$style.statistic">
        <time>{{ activeMovie?.release_date }}</time
        ><span>{{ activeMovie?.vote_average }}</span>
      </div>
      <ul :class="$style.genres">
        <li
          v-for="genre in genres"
          @click="() => goToPage(ROUTER_PATH.GENRES.name, genre.id)"
          :key="genre"
        >
          {{ genre.name }}
        </li>
      </ul>
      <p :class="$style.description">
        {{ activeMovie?.overview }}
      </p>
      <button
        @click="() => goToPage(ROUTER_PATH.MOVIE_SINGLE.name, activeMovie.id)"
        :class="$style.watch"
      >
        Watch now
      </button>
    </div>
    <div :class="$style.wrapperSlider">
      <BaseSlider :sort-by="MOVIES_TYPES.POPULAR" @change-poster="changePoster" :movies="movies" />
    </div>
  </div>
</template>

<style module>
.banner {
  position: relative;
  height: 600px;
  background-size: cover;
  border-radius: 30px;
  overflow: hidden;
  display: flex;
}

.banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--black);
  opacity: 0.6;
}

.content {
  position: relative;
  z-index: 1;
  padding: 20px;
  color: var(--white);
  width: 60%;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.title {
  font-weight: 600;
  font-size: 60px;
  color: var(--white2);
}
.statistic {
  display: flex;
  gap: 20px;
}
.statistic span {
  background: gray;
  padding: 2px;
  font-weight: 500;
  border-radius: 5px;
}
.statistic time {
  color: var(--white2);
  font-weight: 500;
}
.description {
  color: var(--white2);
}
.watch {
  width: max-content;
  border: none;
  padding: 10px;
  border-radius: 5px;
  background-color: #da002a;
  color: var(--white2);
  cursor: pointer;
  font-size: 18px;
}

.wrapperSlider {
  display: flex;
  align-items: end;
  overflow: hidden;
  flex: 1;
  padding-bottom: 20px;
  padding-inline: 10px;
}
.genres {
  display: flex;
  gap: 10px;
}
</style>
