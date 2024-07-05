<script setup>
import { onMounted, watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useMoviesStore } from '@/stores/movies'
import BaseCardItem from '@/components/BaseCardItem.vue'

const moviesStore = useMoviesStore()
const movies = ref([])
const route = useRoute()
const type = route.params.type
const currentPage = ref(1)

const sortBy = ref('popularity.desc')
const monitizationType = ref('free')

watch(
  () => route.params.type,
  async (newType, oldType) => {
    if (newType !== oldType) {
      movies.value = await fetchMovies(true)
    }
  }
)
onMounted(async () => {
  movies.value = await fetchMovies(true)
})

async function getNextPageMovies() {
  currentPage.value += 1
  movies.value = movies.value.concat(await fetchMovies(false))
}
function changeSortValue(e) {
  sortBy.value = e.target.value
}

async function fetchMovies(isFirstRender) {
  const movies = await moviesStore.getMovieByParams({
    endpoint: isFirstRender ? `movie/${type}` : `discover/movie`,
    query: {
      sort_by: sortBy.value,
      page: currentPage.value,
      with_watch_monetization_types: monitizationType.value
    }
  })
  return movies
}

watch(sortBy, async () => {
  movies.value = await fetchMovies(false)
})
</script>
<template>
  <div :class="$style.pageWrapper">
    <div>
      <h3>Sort By</h3>
      <select @change="changeSortValue">
        <option value="popularity.desc" selected="selected">Popularity Descending</option>
        <option value="popularity.asc">Popularity Ascending</option>
        <option value="vote_average.desc">Rating Descending</option>
        <option value="vote_average.asc">Rating Ascending</option>
        <option value="first_air_date.desc">First Air Date Descending</option>
        <option value="first_air_date.asc">First Air Date Ascending</option>
        <option value="title.desc">Title (Z-A)</option>
        <option value="title.asc">Title (A-Z)</option>
        <option value="original_title.desc">Original Title (Z-A)</option>
        <option value="original_title.asc">Original Title (Z-A)</option>
        <option value="vote_average.desc">Vote Descending</option>
        <option value="vote_average.asc">Vote Ascending</option>
        <option value="vote_count.desc">Vote Count Descending</option>
        <option value="vote_count.asc">Vote Count Ascending</option>
        <option value="primary_release_date.desc">Release Data Descending</option>
        <option value="primary_release_date.asc">Release Data Ascending</option>
      </select>
    </div>
    <div :class="$style.page">
      <ul :class="$style.itemWrapper">
        <div :class="$style.item" :key="item.id" v-for="item in movies">
          <BaseCardItem type="movie" :item="item" />
        </div>
      </ul>
      <button :class="$style.btn" @click="getNextPageMovies">Load more</button>
    </div>
  </div>
</template>

<style module>
.page {
  padding-bottom: 40px;
}
.itemWrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.item {
  max-width: calc((100% - 60px) / 4);
  cursor: pointer;
}

.btn {
  border: none;
  font-size: 20px;
  padding: 5px 10px;
  border-radius: 5px;
  display: block;
  margin: 0 auto;
  cursor: pointer;
  background-color: var(--red);
  color: white;
  transition: all 0.3 ease-in-out;
}
.btn:hover {
  scale: 1.05;
}
.pageWrapper {
  display: flex;
}
@media screen and (max-width: 1080px) {
  .item {
    max-width: calc((100% - 40px) / 3);
  }
}

@media screen and (max-width: 800px) {
  .item {
    max-width: calc((100% - 20px) / 2);
  }
}

@media screen and (max-width: 550px) {
  .item {
    max-width: calc((100% - 20px) / 1);
  }
}
</style>
