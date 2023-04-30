import { configureStore } from "@reduxjs/toolkit";
import calcReducer from "../features/calcSlice";

const store = configureStore({
  reducer: {
    calculator: calcReducer,
  },
});

export default store;
