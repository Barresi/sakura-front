import { type RootState } from '@app/store/store'
import { type IPost } from '@shared/lib/types/api'

export const selectAllPosts = (store: RootState): IPost[] => store.news.posts
