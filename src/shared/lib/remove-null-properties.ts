type argObject = Record<string, any>

export const removeNullProperties = (obj: argObject): argObject => {
  for (const prop in obj) {
    if (obj[prop] === null || obj[prop] === '') delete obj[prop]
  }
  return obj
}
