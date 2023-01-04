import { configureStore } from "@reduxjs/toolkit"; // slice에서 보낸 ruducer을 configureStore에 등록 시키는 것. 
import authSlice from "./auth-slice"; //authSlice를 import해옴.

const store = configureStore({
  reducer: {
    auth: authSlice.reducer // authSlice로 부터 reducer를 가져옴
  }
})


export default store
