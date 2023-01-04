import {createStore} from 'redux'
// 밑줄 그어진 것은 그냥 무시하면됨.. 오류 없음

const reducerFn = (state={ counter: 0 }, action) => {

  // useDispatch로 받아온 action 값이 INC이면,다음과 같이 state의 값을 반환한다. 
  if(action.type === 'INC') {
    return {counter:state.counter+1}
  }
  
  if(action.type === 'DEC') {
    return {counter:state.counter-1}
  }

  if(action.type === 'ADD') {
    return {counter: state.counter + action.payload}
  }

  return state;

}

const store = createStore(reducerFn)
export default store