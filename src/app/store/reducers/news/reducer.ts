import { createSlice } from '@reduxjs/toolkit'
import { convertStringToDate } from '@shared/lib/convert-string-to-date'
import { type IPost } from '@shared/lib/types/api'
import { getAllPostsThunk } from './async-thunks'

interface IInitialState {
  isLoading: boolean
  error: string
  posts: IPost[]
}

const initialState: IInitialState = {
  isLoading: false,
  error: '',
  posts: []
}

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPostsThunk.pending, (state) => {
      state.isLoading = true
      state.error = ''
    })
    builder.addCase(getAllPostsThunk.fulfilled, (state, action) => {
      state.isLoading = false
      state.posts = action.payload.posts.map((post) => ({
        ...post,
        createdAt: convertStringToDate(post.createdAt) as Date,
        updatedAt: convertStringToDate(post.updatedAt) as Date,
        deleted: convertStringToDate(post.deleted)
      }))
    })
    builder.addCase(getAllPostsThunk.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as string
    })
  }
})

export default newsSlice.reducer
