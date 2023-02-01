import { createStore } from "redux"
 // store은 나의 data를 넣는 곳이다. 즉, State는 나의 application에서 바뀌는 data를 말한다. 
 // store가 하는 일은 기본적으로 나의 data를 넣을 수 있는 장소를 생성한다. 
 // 리덕스는 나의 data를 관리하는데 도움을 준다.


const add = document.getElementById('add')
const minus = document.getElementById('minus')
const number = document.querySelector('span')


number.innerText = 0

const ADD = "ADD"
const MINUS = "MINUS"

// data를 수정하고 변경하는 함수
const countModifier = (count = 0, action) => {
  // 현재 state는 count이다. 0으로 초기값정함.
  // action은 redux에서 function을 부를 때 쓰는 두번째 parameter, 혹은 argument이다. 


  switch (action.type) {
    case ADD:
      return count + 1
    case MINUS:
      return count - 1
    default:
      return count
  }

  // if(action.type === "ADD") {
  //   
  // }else if(action.type === "MINUS"){
  //   return count - 1
  // } else {
  //   return count
  // }
}

const countStore = createStore(countModifier)
// createStore()라는 함수가 우리에게 countModifier라는 함수를 주기를 요구한다.

// subscribe는 우리에게 store안에 있는 변화들을 알수 있게 해준다. 
const onChange = () => {
  number.innerText = (countStore.getState())
}

countStore.subscribe(onChange)

const handleAdd = () => {
  countStore.dispatch({type:ADD})
}

const handleMinus = () => {
  countStore.dispatch({type:MINUS})
}
 
add.addEventListener('click', handleAdd )
minus.addEventListener('click', handleMinus )

