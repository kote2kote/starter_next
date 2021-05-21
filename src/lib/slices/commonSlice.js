import { createSlice } from '@reduxjs/toolkit';

const commonSlice = createSlice({
  name: 'commonSlice',
  initialState: {
    bp: {
      tb: 520,
      pc: 960,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      wide: 1536,
    },
    windowSizeX: 0,
  },
  reducers: {
    setState: (state, action) => {
      state.test = process.env.MAIN_URL;
    },
    changeWindowSize: (state, action) => {
      state.windowSizeX = action.payload;
    },
    setWindowSize: (state, action) => {
      if (process.browser) {
        state.windowSizeX = window.innerWidth;
      }
    },
  },
});

export const getState = (state) => state.commonSlice;
export const {
  setState,
  changeHello,
  setWindowSize,
  changeWindowSize,
  // setTestNum,
} = commonSlice.actions;
export default commonSlice.reducer;
