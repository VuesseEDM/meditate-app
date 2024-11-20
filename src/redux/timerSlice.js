import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  time: 0,
  isActive: false,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    startTimer: (state) => {
      state.isActive = true;
    },
    stopTimer: (state) => {
      state.isActive = false;
    },
    resetTimer: (state) => {
      state.time = 0;
      state.isActive = false;
    },
    decrementTime: (state) => {
      if (state.isActive && state.time > 0) {
        state.time -= 1;
      }
    },
    setTime: (state, action) => {
      state.time = action.payload; // Imposta il valore del timer direttamente
    },
  },
});

export const { startTimer, stopTimer, resetTimer, decrementTime, setTime } =
  timerSlice.actions;
export default timerSlice.reducer;
