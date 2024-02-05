export interface IUser {
  id: string
  firstName: string
  lastName: string
  email: string
  username: string | null
  city: string | null
  birthDate: Date | null
  gender: 'male' | 'female' | null
  description: string | null
}
