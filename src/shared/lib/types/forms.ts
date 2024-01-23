export interface ILoginForm {
  email: string
  password: string
}
export interface IRegistrationForm {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}
export interface IEditUserInfoForm {
  username: 'string'
  firstName: 'string'
  lastName: 'string'
  city: 'string'
  birthDate: 'string'
  gender: 'string'
  description: 'string'
}
export interface IEditUserSecurityInfoForm {
  email: string
  password: string
}
