import { createSlice } from '@reduxjs/toolkit'
import { deleteCookie, setCookie } from '@shared/lib/cookie'
import { AuthStatus } from '@shared/lib/types/api'
import {
  editUserInfoThunk,
  editUserSecurityInfoThunk,
  loginThunk,
  logoutThunk,
  registrationThunk,
  userInfoThunk
} from './async-thunks'

interface IInitialState {
  isLoading: boolean
  error: string | null
  status: AuthStatus
  user: {
    id: null | string
    email: null | string
    firstName: null | string
    lastName: null | string
    birthDate: null | string
    city: null | string
    description: null | string
    gender: null | 'female' | 'male'
    username: null | string
  }
}

const initialState: IInitialState = {
  isLoading: false,
  error: '',
  status: AuthStatus.pending,
  user: {
    id: null,
    email: null,
    firstName: null,
    lastName: null,
    birthDate: null,
    city: null,
    description: null,
    gender: null,
    username: null
  }
}

const profileInfoSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Authorization
    builder.addCase(loginThunk.pending, (state) => {
      state.isLoading = true
      state.error = null
      state.status = AuthStatus.pending
    })
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.isLoading = false
      state.status = AuthStatus.authorized
      state.user = { ...state.user, ...action.payload.userWithoutPassword }

      setCookie('accessToken', action.payload.accessToken)
      localStorage.setItem('refreshToken', action.payload.refreshToken)
    })
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as string
      state.status = AuthStatus.notAuthorized
    })
    // Registration
    builder.addCase(registrationThunk.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(registrationThunk.fulfilled, (state) => {
      state.isLoading = false
    })
    builder.addCase(registrationThunk.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as string
    })
    // LogOut
    builder.addCase(logoutThunk.pending, (state) => {
      state.isLoading = true
      state.error = null
      state.status = AuthStatus.pending
    })
    builder.addCase(logoutThunk.fulfilled, (state) => {
      state.isLoading = false
      state.status = AuthStatus.notAuthorized
      state.user.email = null
      state.user.id = null
      state.user.firstName = null
      state.user.lastName = null
      deleteCookie('accessToken')
      localStorage.removeItem('refreshToken')
    })
    builder.addCase(logoutThunk.rejected, (state, action) => {
      state.isLoading = false
      state.status = AuthStatus.authorized
      state.error = action.payload as string
    })
    // Protected Info
    builder.addCase(userInfoThunk.pending, (state) => {
      state.isLoading = true
      state.error = null
      state.status = AuthStatus.pending
    })
    builder.addCase(userInfoThunk.fulfilled, (state, action) => {
      state.isLoading = false
      state.user = action.payload.user
      state.status = AuthStatus.authorized
    })
    builder.addCase(userInfoThunk.rejected, (state, action) => {
      state.isLoading = false
      state.status = AuthStatus.notAuthorized
      state.error = action.payload as string
    })
    // Edit user info
    builder.addCase(editUserInfoThunk.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(editUserInfoThunk.fulfilled, (state, action) => {
      state.isLoading = false

      const { birthDate, city, description, firstName, gender, lastName, username } =
        action.payload.updatedFields
      state.user.birthDate = birthDate
      state.user.city = city
      state.user.description = description
      state.user.firstName = firstName
      state.user.lastName = lastName
      state.user.gender = gender
      state.user.username = username
    })
    builder.addCase(editUserInfoThunk.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as string
    })
    // Edit security user info
    builder.addCase(editUserSecurityInfoThunk.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(editUserSecurityInfoThunk.fulfilled, (state, action) => {
      state.isLoading = false
      state.user.email = action.payload.email
    })
    builder.addCase(editUserSecurityInfoThunk.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as string
    })
  }
})

export default profileInfoSlice.reducer
