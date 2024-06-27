import icons from './icons'

export function isNameSvgValid(name) {
  return Object.keys(icons).includes(name)
}
