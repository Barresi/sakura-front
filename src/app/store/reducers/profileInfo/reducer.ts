import { createSlice } from '@reduxjs/toolkit'
import { capitalizeFirstLetter } from '@shared/lib/capitalize-first-letter'
import { deleteCookie, setCookie } from '@shared/lib/cookie'
import { AuthStatus, type IUserInfoResponse } from '@shared/lib/types/api'
import {
  deleteAccountThunk,
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
  user: IUserInfoResponse | null
}

const initialState: IInitialState = {
  isLoading: false,
  error: '',
  status: AuthStatus.pending,
  user: null
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
      const user = action.payload.userWithoutPassword
      state.user = {
        ...state.user,
        ...user,
        firstName: capitalizeFirstLetter(user.firstName),
        lastName: capitalizeFirstLetter(user.lastName)
      }

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
    // Protected Info
    builder.addCase(userInfoThunk.pending, (state) => {
      state.isLoading = true
      state.error = null
      state.status = AuthStatus.pending
    })
    builder.addCase(userInfoThunk.fulfilled, (state, action) => {
      state.isLoading = false
      const user = action.payload.user
      state.user = {
        ...user,
        firstName: capitalizeFirstLetter(user.firstName),
        lastName: capitalizeFirstLetter(user.lastName)
      }
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
      const updatedFields = action.payload.updatedFields
      if (state.user)
        state.user = {
          ...state.user,
          ...updatedFields,
          firstName: capitalizeFirstLetter(updatedFields.firstName),
          lastName: capitalizeFirstLetter(updatedFields.lastName)
        }
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
      if (state.user) state.user.email = action.payload.email
    })
    builder.addCase(editUserSecurityInfoThunk.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as string
    })
    // Logout
    builder.addCase(logoutThunk.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(logoutThunk.fulfilled, (state) => {
      state.isLoading = false
      state.status = AuthStatus.notAuthorized
      state.user = null
      deleteCookie('accessToken')
      localStorage.removeItem('refreshToken')
    })
    builder.addCase(logoutThunk.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as string
    })
    // Delete Account
    builder.addCase(deleteAccountThunk.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(deleteAccountThunk.fulfilled, (state) => {
      state.isLoading = false
      state.status = AuthStatus.notAuthorized
      state.user = null
      deleteCookie('accessToken')
      localStorage.removeItem('refreshToken')
    })
    builder.addCase(deleteAccountThunk.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as string
    })
  }
})

export default profileInfoSlice.reducer
