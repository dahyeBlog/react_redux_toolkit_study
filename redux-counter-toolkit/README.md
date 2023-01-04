## 리덕스 기초 - counter 앱 - toolkit 사용
- Redux Toolkit 은 Redux를 더 쉽게 사용하기 위해 만들어짐
- 기존 Redux의 문제점은 다음과 같다. 
- 1. 리덕스의 복잡한 스토어 설정
- 2. 리덕스를 유용하게 사용하기 위해서 추가되어야하는 많은 패키지들
- 3. 리덕스 사용을 위해 요구되는 다량의 상용구 코드
- 위의 문제점들을 개선하기 위해서 Redux Tookit이 만들어 졌다. 
- 리덕스 툴킷에서 제공하는 함수들을 사용하면 기존 리덕스의 복잡도를 낮추고 사용성을 높여서 코드를 작성할 수 있다.


### 설치
- npm i react-redux
- npm install @reduxjs/toolkit

### 작성 코드
- index.js에 Provider 컴포넌트 import 하는 것은 기존 리덕스와 같다 .

```
src
 ┣ store
 ┃ ┗ store.js
 ┣ App.js
 ┣ index.css
 ┗ index.js
```

```
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
```

```
 ┣ App.js

import {useSelector, useDispatch} from 'react-redux'
import { actions } from './store/store'
// store에서 export 한 actions를 가져온다. 

function App() {
  const counter = useSelector((state) => state.counter)

  const dispatch = useDispatch()
  
  const increment = () => {
    dispatch(actions.increment()) // actions 에서 생성한 reducer 함수를 가져옴.
  }
  const decrement = () => {
    dispatch(actions.decrement())
  }
  const addBy = () => {
    dispatch(actions.addBy(10) ) // reducer 함수내에 payload의 값을 넣어준다. 
  }


  return (
    <div>
      <h1>Counter App </h1>
      <h2>{counter}</h2>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={addBy}>Add By 10</button>
    </div>
  );
}

export default App;


```