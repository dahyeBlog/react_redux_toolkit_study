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
