import icons from './icons'
import { MOVIES_TYPES } from './constants'

function isNumber(value) {
  return typeof value === 'number'
}
function isString(value) {
  return typeof value === 'string'
}

export function isNameSvgValid(name) {
  return Object.keys(icons).includes(name)
}

export function isHeightOrWidthValid(value) {
  return isNumber(value)
}

export function isListNavValid(value) {
  return value.every(({ name, path }) => isString(name) && isString(path))
}

export function isSortByValid(value) {
  return Object.values(MOVIES_TYPES).includes(value)
}
