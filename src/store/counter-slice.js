import { createSlice } from "@reduxjs/toolkit";

// redux-toolkit 사용
const initialCounterState = { counter: 0, showCounter: true };
// createSlice는 객체를 인자로서 생성한다.
const counterSlice = createSlice({
  // 상태마다 식별자가 필요하기때문에 name에 식별자이름을 지정한다.
  name: "counter",
  initialState: initialCounterState,
  // reducers는 객체 혹은 맵이라고 할 수 있다. 상태 slice는 리듀서를 필요로 한다. 객체안에 메서드를 추가하면 된다.

  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer