import {createSlice} from '@reduxjs/toolkit'

// authSlice 생성 - (전달할 리듀서 생성)
const authSlice = createSlice({
  name: 'auth',
  initialState: {isLoggedIn : false},
  reducers: {
    login(state){
      state.isLoggedIn = true
    },
    logout(state){
      state.isLoggedIn = false
    }
  }
})

// authSlice의 actions메서드를 export 함.
export const authActions = authSlice.actions

// authSlice를 전체를 export 함.
export default authSlice