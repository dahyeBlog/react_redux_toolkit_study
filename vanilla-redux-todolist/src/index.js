import {createStore} from 'redux'

const form = document.querySelector("form")
const input =  document.querySelector('input')
const ul = document.querySelector('ul')

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"

const addToDo = (text) => {
  return {
    type:ADD_TODO, text
  }
}

const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id
  }
}

const reducer = (state = [], action) => {
  // console.log(action)
  switch (action.type) {
    case ADD_TODO:
      const newToDoObj = { text: action.text, id: Date.now() }
      return [ newToDoObj , ...state]
    case DELETE_TODO:
      const cleaned = state.filter(toDo => toDo.id !== action.id)
      return cleaned
    default:
      return state
  }
}

const store = createStore(reducer)

const paintToDos = () => {
  const toDos = store.getState()
  ul.innerHTML = ""
  toDos.forEach(toDo => {
    const li = document.createElement('li')
    const btn = document.createElement('button')
    btn.innerText = "Delete"
    btn.addEventListener('click', dispatchDeleteToDo)
    li.id = toDo.id
    li.innerText = toDo.text
    ul.appendChild(li)
    li.appendChild(btn)
  })
}

store.subscribe(paintToDos)

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text))

}
const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id)
  store.dispatch(deleteToDo(id))
}


const onSubmit = e => {
  e.preventDefault()
  const toDo = input.value
  input.value = ''
  dispatchAddToDo(toDo)
}

form.addEventListener('submit', onSubmit)