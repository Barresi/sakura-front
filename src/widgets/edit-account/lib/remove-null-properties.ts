type argObject = Record<string, any>

export const removeNullProperties = (
  obj: argObject,
  gender: 'male' | 'female' | null,
  birthDate: Date | null
): argObject => {
  for (const prop in obj) {
    if (obj[prop] === null || obj[prop] === '') delete obj[prop]
    if (prop === 'gender' && obj[prop] === gender) delete obj[prop]
    if (prop === 'gender' && obj[prop] === birthDate) delete obj[prop]
  }
  return obj
}
