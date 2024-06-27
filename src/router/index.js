import { createRouter, createWebHistory } from 'vue-router'
import { ROUTER_PATH } from "../utils/router";

import TheHome from '../pages/TheHome.vue'

import TheMovies from '../pages/TheMovies.vue'
import TheMovieSingle from '../pages/TheMovieSingle.vue'

import TheTv from '../pages/TheTv.vue'
import TheTvSingle from '../pages/TheTvSingle.vue'

import ThePeople from '../pages/ThePeople.vue'
import ThePeopleSingle from '../pages/ThePeopleSingle.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTER_PATH.HOME.path,
      name: ROUTER_PATH.HOME.name,
      component: TheHome
    },
    {
      path: ROUTER_PATH.MOVIES.path,
      name: ROUTER_PATH.MOVIES.name,
      component: TheMovies
    },
    {
      path: ROUTER_PATH.TV.path,
      name: ROUTER_PATH.TV.name,
      component: TheTv
    },
    {
      path: ROUTER_PATH.MOVIE_SINGLE.path,
      name: ROUTER_PATH.MOVIE_SINGLE.name,
      component: TheMovieSingle
    },
    {
      path: ROUTER_PATH.TV_SINGLE.path,
      name: ROUTER_PATH.TV_SINGLE.name,
      component: TheTvSingle
    },
    {
      path: ROUTER_PATH.PEOPLE.path,
      name: ROUTER_PATH.PEOPLE.name,
      component: ThePeople
    },
    {
      path: ROUTER_PATH.PEOPLE_SINGLE.path,
      name: ROUTER_PATH.PEOPLE_SINGLE.name,
      component: ThePeopleSingle
    }
  ]
})

export default router
