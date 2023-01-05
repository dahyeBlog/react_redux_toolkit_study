import {configureStore} from "@reduxjs/toolkit"
// configureStore로 store를 세팅 할 수 있다. 
import postsReducer from "../features/posts/postsSlice"
import usersReducer from '../features/users/usersSlice'

export const store = configureStore({
  reducer: {
    //reducer를 필수로 전달해야한다. 
    posts: postsReducer,
    users: usersReducer
  }
})