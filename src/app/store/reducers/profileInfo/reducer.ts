import { createSlice } from '@reduxjs/toolkit'
import { loginThunk, logoutThunk, userInfoThunk, registrationThunk } from './async-thunks'
import { deleteCookie, setCookie } from '@src/shared/lib/cookie/cookie'
import { type IUser } from '@src/shared/lib/types/types'
import { AuthStatus } from '@src/shared/lib/types/api'

interface IInitialState {
  isLoading: boolean
  error: string
  status: AuthStatus
  user: IUser
}

const initialState: IInitialState = {
  isLoading: false,
  error: '',
  status: AuthStatus.pending,
  user: {
    id: '',
    email: '',
    firstName: '',
    lastName: ''
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
      state.error = ''
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
      state.error = ''
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
      state.error = ''
      state.status = AuthStatus.pending
    })
    builder.addCase(logoutThunk.fulfilled, (state) => {
      state.isLoading = false
      state.status = AuthStatus.notAuthorized
      state.user.email = ''
      state.user.id = ''
      state.user.firstName = ''
      state.user.lastName = ''
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
      state.error = ''
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
  }
})

export default profileInfoSlice.reducer
