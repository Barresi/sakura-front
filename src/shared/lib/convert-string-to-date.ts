export function convertStringToDate(birthDate: string | null): Date | null {
  return birthDate ? new Date(birthDate) : null
}
