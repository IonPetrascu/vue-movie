import { createRouter, createWebHistory } from 'vue-router'
import { ROUTER_PATH } from "../utils/router";
import TheHome from '../pages/TheHome.vue'
import TheMovies from '../pages/TheMovies.vue'
import TheMovieSingle from '../pages/TheMovieSingle.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTER_PATH.HOME.path,
      name: ROUTER_PATH.HOME.name,
      component: TheHome
    },
    {
      path: ROUTER_PATH.MOVIES_PAGE.path,
      name: ROUTER_PATH.MOVIES_PAGE.name,
      component: TheMovies
    },
    {
      path: ROUTER_PATH.MOVIE_SINGLE_PAGE.path,
      name: ROUTER_PATH.MOVIE_SINGLE_PAGE.name,
      component: TheMovieSingle
    }
  ]
})

export default router
