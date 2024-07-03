import { ROUTER_PATH } from './router'
import { GAP_SLIDER } from './constants'

export function getNavList() {
  return Object.values(ROUTER_PATH).filter(({ name }) => name !== 'movie_single' && name !== 'tv_single' && name !== 'people_single' && name !== 'genres_single')
}

export const onWheel = (e, slider, card) => {
  e.preventDefault()

  if (slider.value === null || card.value === null) return

  const cardWidth = card.value[0].offsetWidth + GAP_SLIDER
  const currentLeft = parseFloat(slider.value.style.left === '' ? '0' : slider.value.style.left)
  const sliderWidth = -slider.value.offsetWidth
  const maxLeft = -(card.value.length * cardWidth) - sliderWidth + GAP_SLIDER
  const movement = e.wheelDelta > 0 ? -cardWidth : cardWidth

  if (movement + currentLeft > 0) {
    slider.value.style.left = `0px`
  } else if (movement + currentLeft < maxLeft) {
    slider.value.style.left = `${maxLeft}px`
  } else {
    slider.value.style.left = `${currentLeft + movement}px`
  }
}

export function getNamesOfGenres(genreIds, genresList) {
  if (!isArray(genresList)) {
    return [];
  }

  return genreIds.map((id) => {
    const genre = genresList.find((genreObj) => genreObj.id === id)
    return genre ? genre : ""
  })
}

function isArray(value) {
  return Array.isArray(value)
}
