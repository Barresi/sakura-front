import { configureStore } from "@reduxjs/toolkit";
import profileInfoReducer from "./reducers/profileInfo/reducer";
import usersReducer from "./reducers/users/reducer";

export const store = configureStore({
  reducer: { profileInfo: profileInfoReducer, users: usersReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
