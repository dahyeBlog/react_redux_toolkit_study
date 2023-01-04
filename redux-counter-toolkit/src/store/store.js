import {configureStore, createSlice} from '@reduxjs/toolkit'
// configureStore 함수는 리덕스 라이브러리의 createStore 함수를 추상화한것, 
// slice에서 보낸 ruducer을 configureStore에 등록 시키는 것. 

const initialState={ counter: 0}

const counterSlice = createSlice({
// 실제 리듀서가 동작할 수 있도록 해준다. 
  name : 'counter',
  initialState,
  reducers: {
    increment(state,action){
      state.counter++
    },
    decrement(state,action){
      state.counter--
    },
    addBy(state,action){
      // action에서 받아온 payload의 값을 더해준다. 
      state.counter += action.payload
    },
  }
})

export const actions = counterSlice.actions
// 리덕스 툴킷에는 counterSlice의 actions 생성자를 사용해 생성된 action과 리듀서를 export한다. 

const store = configureStore({
  // counterSlice에서 보낸 reducer를 configureStore에 등록 시켜준다. 
  
  reducer: counterSlice.reducer
})

export default store;