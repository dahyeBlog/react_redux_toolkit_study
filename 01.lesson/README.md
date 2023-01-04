## Redux - 01.lesson

### 리덕스 npm 라이브러리 설치하기
- npm i @reduxjs/toolkit
- npm i react-redux

### useSelector
- 리액트의 리덕스 스토어 관련 hook중 하나, 스토어의 상태값을 반환해주는 역할을 한다. 
- useSelector를 사용한 함수에서 리덕스 스토어의 상태값이 바뀐 경우 바뀐 스토어의 상태값을 다시 가져와 컴포넌트를 렌더링 시킨다.

```

const fruitList = useSelector(state => state.모듈명.요소);
```

### useDispatch
- 리덕스 스토어에 변경된 상태값을 저장하기 위해서는 useDispatch훅을 사용하여 액션을 실행시킨다. 
- 실행할 액션함수명을 적은 후, 액션 함수의 파라미터에 변경할 상태값을 추가하고 dispatch로 감싸면, 헤당 액션을 호출하는 dispath함수가 된다. 

```
const dispatch = useDispatch();
```

