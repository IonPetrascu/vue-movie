import { ROUTER_PATH } from './router'

export function getNavList() {
  return Object.values(ROUTER_PATH).filter(({ name }) => name !== 'movie_single' && name !== 'tv_single' && name !== 'people_single')
}
