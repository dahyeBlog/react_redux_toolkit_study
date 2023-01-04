import { createSlice } from "@reduxjs/toolkit";
// createSlice API는 action과 reducer를 간단하게 생성할 수 있다. 

const initialState = [
  {id: '1', title: 'Learning Redux Toolkit', content: "I've heard good things." },
  {id: '2', title: 'Slices...', content: "The more I say slice, the more I want pizza." },
]

const postsSlice = createSlice({
  // action 타입 문자열의 prefix로 사용
  name: 'posts',
  // 초기 state값
  initialState,
  // 리듀서 맵, 해당 리듀서의 키값으로 액션함수가 자동으로 생성
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    }  
  }
})

export const selectAllPosts = (state) => state.posts;

export const {postAdded} = postsSlice.actions

export default postsSlice.reducer