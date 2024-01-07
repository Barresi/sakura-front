import { createSlice } from '@reduxjs/toolkit'
import { type INotification } from '@src/types/api'
import { getUserNotificationsThunk } from './async-thunks'

interface IInitialState {
  isLoading: boolean
  error: string
  notifications: INotification[]
}

const initialState: IInitialState = {
  isLoading: false,
  error: '',
  notifications: []
}

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserNotificationsThunk.pending, (state) => {
      state.isLoading = true
      state.error = ''
    })
    builder.addCase(getUserNotificationsThunk.fulfilled, (state, action) => {
      state.isLoading = false
      state.notifications = [...action.payload.notifications]
    })
    builder.addCase(getUserNotificationsThunk.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as string
    })
  }
})

export default notificationsSlice.reducer
