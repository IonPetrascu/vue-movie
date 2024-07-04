
import { defineStore } from 'pinia'
import { API_BASE_URL, API_BEARER_KEY } from '@/utils/constants'
import { ref } from 'vue'

export const useTVStore = defineStore('tvShows', () => {

  const tvShows = ref([])
  const tvShowDetails = ref({})


  async function getTVShow(type) {
    const url = new URL(`${API_BASE_URL}tv/${type}`);

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: API_BEARER_KEY
      }
    };

    const response = await fetch(url, options);
    const data = await response.json();
    tvShows.value = data.results
  }

  async function getTVShowsFromNextPage(type, page) {
    const url = new URL(`${API_BASE_URL}tv/${type}`);

    url.search = new URLSearchParams({
      page
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
    tvShows.value = [...tvShows.value, ...data.results];
  }

  async function getTVShowDetails(id) {
    const url = new URL(`${API_BASE_URL}tv/${id}`);

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: API_BEARER_KEY
      }
    };

    const response = await fetch(url, options);
    const data = await response.json();
    tvShowDetails.value = data
  }

  return {
    tvShows,
    tvShowDetails,
    getTVShow,
    getTVShowsFromNextPage,
    getTVShowDetails
  }
})
