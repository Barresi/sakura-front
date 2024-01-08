import { createSlice } from '@reduxjs/toolkit'
import { type IChat } from '@src/shared/lib/types/api'
import { getUserChatsThunk } from './async-thunks'

interface IInitialState {
  isLoading: boolean
  error: string
  userChats: IChat[]
}

const initialState: IInitialState = {
  isLoading: false,
  error: '',
  userChats: []
}

const messengerSlice = createSlice({
  name: 'messenger',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserChatsThunk.pending, (state) => {
      state.isLoading = true
      state.error = ''
    })
    builder.addCase(getUserChatsThunk.fulfilled, (state, action) => {
      state.isLoading = false
      state.userChats = [...action.payload.userChats]
    })
    builder.addCase(getUserChatsThunk.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as string
    })
  }
})

export default messengerSlice.reducer
