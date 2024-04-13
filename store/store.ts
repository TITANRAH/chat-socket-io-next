import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSliceStore";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});


export default store;
