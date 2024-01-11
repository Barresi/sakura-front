import { createSlice } from '@reduxjs/toolkit'
import { type IFriend } from '@shared/lib/types/api'
import { type IUser } from '@shared/lib/types/types'
import {
  getAllUsersThunk,
  getFriendsThunk,
  getReceivedThunk,
  getSendedThunk
} from './async-thunks'

interface IInitialState {
  isLoading: boolean
  error: string
  friends: IFriend[]
  allUsers: IUser[]
  sended: IFriend[]
  received: IFriend[]
}

const initialState: IInitialState = {
  isLoading: false,
  error: '',
  friends: [],
  allUsers: [],
  sended: [],
  received: []
}

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get all users
    builder.addCase(getAllUsersThunk.pending, (state) => {
      state.isLoading = true
      state.error = ''
    })
    builder.addCase(getAllUsersThunk.fulfilled, (state, action) => {
      state.isLoading = false
      state.allUsers = [...action.payload]
    })
    builder.addCase(getAllUsersThunk.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as string
    })

    // Get friends
    builder.addCase(getFriendsThunk.pending, (state) => {
      state.isLoading = true
      state.error = ''
    })
    builder.addCase(getFriendsThunk.fulfilled, (state, action) => {
      state.isLoading = false
      state.error = ''
      state.friends = [...action.payload]
    })
    builder.addCase(getFriendsThunk.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as string
    })

    // Received requests to friends
    builder.addCase(getReceivedThunk.pending, (state) => {
      state.isLoading = true
      state.error = ''
    })
    builder.addCase(getReceivedThunk.fulfilled, (state, action) => {
      state.isLoading = false
      state.error = ''
      state.received = [...action.payload]
    })
    builder.addCase(getReceivedThunk.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as string
    })

    // Sended requests to friends
    builder.addCase(getSendedThunk.pending, (state) => {
      state.isLoading = true
      state.error = ''
    })
    builder.addCase(getSendedThunk.fulfilled, (state, action) => {
      state.isLoading = false
      state.error = ''
      state.sended = [...action.payload]
    })
    builder.addCase(getSendedThunk.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as string
    })
  }
})

export default friendsSlice.reducer
