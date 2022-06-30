export const capitalize = (string: String) =>
  (string && string[0].toUpperCase() + string.slice(1)) || ''

export const sanitize = (string: String) => string.replace('-', ' ')
