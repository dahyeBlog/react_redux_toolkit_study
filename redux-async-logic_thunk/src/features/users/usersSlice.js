import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {id: '0', name: '홍길동'},
  {id: '1', name: '김철수'},
  {id: '2', name: '김영희'},
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})



export const selectAllUsers = (state) => state.users

export default usersSlice.reducer





