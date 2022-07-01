export const capitalize = (string: String): String =>
  (string && string[0].toUpperCase() + string.slice(1)) || ''

export const sanitize = (string: String): String => string.replace('-', ' ')
