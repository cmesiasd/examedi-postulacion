export const capitalize = (string: String): String =>
  (string && string[0].toUpperCase() + string.slice(1)) || ''

export const sanitize = (string: String): String => string.replace('-', ' ')

export const getId = (string: String): number => {
  let newString = string.slice(0, -1)
  return parseInt(newString.split('/').pop())
}

export const getNextURL = (string: String): string => string.split('/').pop()
