import { configureStore } from '@reduxjs/toolkit'
import friendsReducer from './reducers/friends/reducer'
import messengerReducer from './reducers/messenger/reducer'
import newsReducer from './reducers/news/reducer'
import notificationsReducer from './reducers/notifications/reducer'
import profileInfoReducer from './reducers/profileInfo/reducer'

export const store = configureStore({
  reducer: {
    profileInfo: profileInfoReducer,
    friends: friendsReducer,
    messenger: messengerReducer,
    notifications: notificationsReducer,
    news: newsReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
