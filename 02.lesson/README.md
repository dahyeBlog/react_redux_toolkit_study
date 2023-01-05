## Redux - 02.lesson

### 리덕스 npm 라이브러리 설치하기
- npm i @reduxjs/toolkit react-redux
- npm i date-fns //날짜라이브러리


### index.js 에 Provider 전역적으로 state를 주고 받을 수 있음 
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from './app/store'
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
);
```

### 리덕스에서 store란?
- store란 리덕스에서 state와 dispatch할 함수들을 가지는 저장 수 역할을 한다. 
- Redux-toolkit 에서 configureStore을 사용해 store를 생성한다.

```
import {configureStore} from "@reduxjs/toolkit"
// configureStore로 store를 세팅 할 수 있다. 

export const store = configureStore({
  reducer: {
    //reducer를 필수로 전달해야한다. 
    ...
  }
})
```

### 리덕스에서 slice 란?
- Redux-toolkit(RTK)는 createAction, createReducer등 이것들을 합친 것이 createSlice이다. 훨씬 간편하다고 한다. 


### slice 함수?
- slice() 메서드는 어떤 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환한다. 원본 배열은 바뀌지 않는다. 

### localeCompare 함수?
- localeCompare() 메서드는 참조 문자열이 정렬 순으로 지정된 문자열 앞 혹은 뒤에 오는지 또는 동일한 문자열인지 나타내는 수치를 반환한다.

### Object.entries() 함수?
- 모든 프로퍼티와 값을 배열로 반환한다. 
- 키,밸류의 속성으로 되어 있지 않는 객체를 키와 값 쌍으로 배열의 형태로 반환해준다. 

