// postsSlice.js 에서 기능을 수행하는 action과 reducer의 로직을 모아놓은 파일이다.
// posts들의 상태를 여러 state로 분리한다.

import { createSlice, nanoid } from "@reduxjs/toolkit"; //random Id 생성해줌.
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "리덕스 툴킷 배우기",
    content: "열공열공 💪🏻 ",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumpsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: "2",
    title: "리덕스 Slice란?",
    content: "슬라이스란...",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumpsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      // reducer과 prepare은 payload를 한 번 거치는 미들웨어 같은 함수들이다. action을 dispatch할 때, action은 매개변수를 받는데, 이 매개변수의 값을 전처리하는 역할을 한다. action의 매개변수를 전처리해야 한다면 reducer와 prepare을 정의하고 그렇지 않으면 reducer이므로 그대로 정의한다.

      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumpsUp:0,
              wow:0,
              heart:0,
              rocket:0,
              coffee:0,
            }
          },
        };
      },
    },

    reactionAdded(state , action){
      const { postId, reaction } = action.payload
      const existingPost = state.find(post => post.id === postId)
      if(existingPost){
        existingPost.reactions[reaction]++
      }
    }
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded , reactionAdded} = postsSlice.actions;

export default postsSlice.reducer;
