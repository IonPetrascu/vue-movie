
import { defineStore } from 'pinia'
import { API_BASE_URL, API_BEARER_KEY } from '@/utils/constants'
import { ref } from 'vue'

export const usePeopleStore = defineStore('people', () => {

  const people = ref([])
  const peopleDetails = ref({})

  async function getPeople(type) {
    const url = new URL(`${API_BASE_URL}person/${type}`);

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: API_BEARER_KEY
      }
    };

    const response = await fetch(url, options);
    const data = await response.json();
    people.value = data.results
  }

  async function getPeoplesFromNextPage(type, page) {
    const url = new URL(`${API_BASE_URL}movie/${type}`);

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
    people.value = [...people.value, ...data.results];
  }


  async function getPeopleDetails(id) {
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
    peopleDetails.value = data
  }





  return {
    people,
    peopleDetails,
    getPeople,
    getPeoplesFromNextPage,
    getPeopleDetails
  }
})
