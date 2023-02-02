import { configureStore } from '@reduxjs/toolkit'
import { createAction } from '@reduxjs/toolkit'


// createSlice라는 기능을 사용하면 createAction을 통해 따로 액션타입을 정의하지 않아도 자동으로 액션 타입을 만들어준다. 

const addToDo = createAction("ADD")
const deleteToDo = createAction("DELETE")




export const store = configureStore({
  reducer: {},
})