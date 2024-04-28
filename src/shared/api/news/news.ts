import {
  type ICreatePostResponse,
  type IDeletePostResponse,
  type IGetPostsResponse,
  type ILikePostResponse,
  type IMarkWatchedPostResponse
} from '@shared/lib/types/api'
import { type ICreatePostForm } from '@shared/lib/types/forms'
import { apiWithAuth } from '../api'

export const getAllPosts = async (): Promise<IGetPostsResponse> => {
  const res = await apiWithAuth.get<IGetPostsResponse>('/posts')

  return res.data
}

export const createPost = async (form: ICreatePostForm): Promise<ICreatePostResponse> => {
  const res = await apiWithAuth.post<ICreatePostResponse>('/posts', form, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })

  return res.data
}

export const markWatchedPost = async (
  postId: string
): Promise<IMarkWatchedPostResponse> => {
  const res = await apiWithAuth.post<IMarkWatchedPostResponse>(`/posts/${postId}/watched`)

  return res.data
}

export const likePost = async (postId: string): Promise<ILikePostResponse> => {
  const res = await apiWithAuth.patch<ILikePostResponse>(`/posts/${postId}/liked`)

  return res.data
}

export const deletePost = async (postId: string): Promise<IDeletePostResponse> => {
  const res = await apiWithAuth.delete<IDeletePostResponse>(`/posts/${postId}`)

  return res.data
}
