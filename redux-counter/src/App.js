import {useSelector, useDispatch} from 'react-redux'
// useSelector는 redux store에 저장된 state의 데이터를 실행 시켜 값을 반환할 수 있다. 값을 불러드려 사용할 수 있도록 해준다. 

// useDispatch는 action을 통해 실행 시킬 수 있다. action이 변경할 때 새 state를 넣어줘야 reducer에서 값을 넘겨준다. 

function App() {
  const counter = useSelector((state) => state.counter)
  // useSelector 함수를 이용하여 store의 초기 state.counter를 정보를 받아온다. 

  const dispatch = useDispatch()
  
  const increment = () => {
    dispatch({type:'INC'})
  }
  const decrement = () => {
    dispatch({type:'DEC'})
  }
  const addBy = () => {
    // payload안에 전달하고자 하는 state의 값을 넣는다. 
    dispatch({type:'ADD', payload: 10})
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
