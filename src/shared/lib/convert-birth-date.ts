export function convertBirthDate(birthDate: string | null): Date | null {
  return birthDate ? new Date(birthDate) : null
}
