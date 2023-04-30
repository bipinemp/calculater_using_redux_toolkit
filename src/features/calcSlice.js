import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
  error: false,
  ans: "",
};

const calcSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    calculation: (state, action) => {
      state.value = state.value.concat(action.payload);
      state.ans = "";
      state.error = false;
    },
    del: (state) => {
      state.value = state.value.slice(0, -1);
    },
    clear: (state) => {
      state.value = "";
      state.ans = "";
      state.error = false;
    },
    answer: (state) => {
      try {
        state.ans = eval(state.value).toString();
        state.value = "";
        state.error = false;
      } catch {
        state.ans = "Math Error !!!";
        state.value = "";
        state.error = true;
      }
    },
  },
});

export default calcSlice.reducer;
export const { calculation, clear, answer, del } = calcSlice.actions;
