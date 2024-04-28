export interface IUser {
  avatar: null | string
  banner: null | string
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
