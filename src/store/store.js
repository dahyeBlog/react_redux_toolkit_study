// configureStore는 createStore 처럼 store를 만든다.
// 다른 점은 여러개의 리듀서를 하나의 리듀서로 쉽게 합칠 수 있다는 것이다.
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counter-slice'
import authReducer from "./auth-slice";


const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

// 기존 redux 사용

// // counterReducer를 설정해야함. 첫번째 변수로 현재상태인 state 값 설정, 아래에는 카운터의 기본 값을 counter: 0 으로 지정함.
// // 두번째 변수로 디스패치 된 값을 받아온다.

// const initialState = {counter: 0, showCounter: true }

// const counterReducer = (state = initialState, action) => {
//   if(action.type === 'increment') {
//     return {
//       counter : state.counter + 1,
//       showCounter: state.showCounter
//     }
//   }

//   if(action.type === 'increase') {
//     return {
//       counter : state.counter + action.amount,
//       showCounter: state.showCounter
//     }
//   }

//   if(action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     }
//   }

//   if(action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter
//     }
//   }

//   return state;
// }

// // 리덕스 store에 createStore을 저장한다.
// // createStore에는 포인터가 있어야 하므로, Reducer을 매개변수로 지정해야한다.
// const store = createStore(counterReducer)

// // 리액트 앱과 리덕스 store를 연결하기 위해서 export 해야함
// // 그리고 리덕스 store를 리액트 앱에 제공 하기 위해서 앱 전체를 렌더링 한 index.js에서 import해야함.
// // 즉, 컴포넌트 트리의 최상단은 우리가 루트 컴포넌트를 렌더링한 곳이다.
export default store;
