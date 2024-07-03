
import { defineStore } from 'pinia'
import { API_BASE_URL, API_BEARER_KEY } from '@/utils/constants'
import { ref } from 'vue'

export const useMoviesStore = defineStore('movies', () => {
  const currentPage = ref(1)
  const movies = ref([])
  const movieDetails = ref({})
  const genres = ref([])

  async function getMovies(type) {
    const url = new URL(`${API_BASE_URL}movie/${type}`);

    url.search = new URLSearchParams({
      page: currentPage.value
    }).toString();

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: API_BEARER_KEY
      }
    };

    const response = await fetch(url, options);
    const data = await response.json();
    movies.value = data.results;
  }

  async function getMovieLists(id) {
    const url = new URL(`${API_BASE_URL}movie/${id}/lists`);
    //   const url = new URL(`${API_BASE_URL}list/8303535`); get lists top 10 amazon
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: API_BEARER_KEY
      }
    };

    const response = await fetch(url, options);
    const data = await response.json();
    return data.results
  }
  async function getMovieDetails(id) {
    const url = new URL(`${API_BASE_URL}movie/${id}`);

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: API_BEARER_KEY
      }
    };

    const response = await fetch(url, options);
    const data = await response.json();
    movieDetails.value = data
  }

  async function getGenres() {
    const url = new URL(`${API_BASE_URL}genre/movie/list`);

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: API_BEARER_KEY
      }
    };

    const response = await fetch(url, options);
    const data = await response.json();
    genres.value = data.genres
  }



  return { getMovies, movies, movieDetails, getMovieDetails, getGenres, genres, getMovieLists }
})
