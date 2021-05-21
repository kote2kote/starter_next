import { createSlice } from '@reduxjs/toolkit';

const testSlice = createSlice({
  name: 'testSlice',
  initialState: {
    test: 'testSliceから出力',
    hello: 'ここのテキストを変えます',
    bp: {
      tb: 520,
      pc: 960,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      wide: 1536,
      isMAXTB: false,
      isTB: false,
      isTBPC: false,
      isMAXPC: false,
      isPC: false,
      isMAXSM: false,
      isSM: false,
      isSMMD: false,
      isMAXMD: false,
      isMD: false,
      isMDLG: false,
      isMAXLG: false,
      isLG: false,
      isLGXL: false,
      isMAXXL: false,
      isXL: false,
      isXLWIDE: false,
      isMAXWIDE: false,
      isWIDE: false,
      size: '',
    },
    windowSizeX: 0,
    // testNum: 0,
  },
  reducers: {
    setTest: (state, action) => {
      state.test = process.env.MAIN_URL;
    },
    changeHello: (state, action) => {
      state.hello = action.payload;
    },
    changeWindowSize: (state, action) => {
      state.windowSizeX = action.payload;
    },
    // setTestNum: (state, action) => {
    //   state.testNum = action.payload;
    // },
    setWindowSize: (state, action) => {
      // state.bp.isMAXTB = false;
      // state.bp.isTB = false;
      // state.bp.isTBPC = false;
      // state.bp.isMAXPC = false;
      // state.bp.isPC = false;
      // state.bp.isMAXSM = false;
      // state.bp.isSM = false;
      // state.bp.isSMMD = false;
      // state.bp.isMAXMD = false;
      // state.bp.isMD = false;
      // state.bp.isMDLG = false;
      // state.bp.isMAXLG = false;
      // state.bp.isLG = false;
      // state.bp.isLGXL = false;
      // state.bp.isMAXXL = false;
      // state.bp.isXL = false;
      // state.bp.isXLWIDE = false;
      // state.bp.isMAXWIDE = false;
      // state.bp.isWIDE = false;

      if (process.browser) {
        state.windowSizeX = window.innerWidth;
        // // tb
        // if (state.windowSizeX <= state.bp.tb - 1) {
        //   state.bp.size = 'isMAXTB';
        // }
        // if (state.windowSizeX >= state.bp.tb) {
        //   state.bp.size = 'isTB';
        // }
        // if (state.windowSizeX >= state.bp.tb && state.windowSizeX <= state.bp.pc - 1) {
        //   state.bp.size = 'isTBPC';
        // }

        // //pc
        // if (state.windowSizeX <= state.bp.pc - 1) {
        //   state.bp.size = 'isMAXPC';
        // }
        // if (state.windowSizeX >= state.bp.pc) {
        //   state.bp.size = 'isPC';
        // }

        // // SM
        // if (state.windowSizeX <= state.bp.sm - 1) {
        //   state.bp.size = 'isMAXSM';
        // }
        // if (state.windowSizeX >= state.bp.sm) {
        //   state.bp.isSM = true;
        //   state.bp.size = 'isSM';
        // }
        // if (state.windowSizeX >= state.bp.sm && state.windowSizeX <= state.bp.md - 1) {
        //   state.bp.size = 'isSMMD';
        // }

        // // MD
        // if (state.windowSizeX <= state.bp.md) {
        //   state.bp.size = 'isMAXMD';
        // }
        // if (state.windowSizeX >= state.bp.md) {
        //   state.bp.size = 'isMD';
        // }
        // if (state.windowSizeX >= state.bp.md && state.windowSizeX <= state.bp.lg - 1) {
        //   state.bp.size = 'isMDLG';
        // }

        // // LG
        // if (state.windowSizeX <= state.bp.lg - 1) {
        //   state.bp.size = 'isMAXLG';
        // }
        // if (state.windowSizeX >= state.bp.lg) {
        //   state.bp.size = 'isLG';
        // }
        // if (state.windowSizeX >= state.bp.lg && state.windowSizeX <= state.bp.xl - 1) {
        //   state.bp.size = 'isLGXL';
        // }

        // // XL
        // if (state.windowSizeX <= state.bp.xl - 1) {
        //   state.bp.size = 'isMAXXL';
        // }
        // if (state.windowSizeX >= state.bp.xl) {
        //   state.bp.size = 'isXL';
        // }
        // if (state.windowSizeX >= state.bp.xl && state.windowSizeX <= state.bp.wide - 1) {
        //   state.bp.size = 'isXLWIDE';
        // }

        // // WIDE
        // if (state.windowSizeX <= state.bp.wide - 1) {
        //   state.bp.size = 'isMAXWIDE';
        // }
        // if (state.windowSizeX >= state.bp.wide) {
        //   state.bp.size = 'isWIDE';
        // }
      }
    },
  },
});

export const getTestState = (state) => state.testSlice;
export const {
  setTest,
  changeHello,
  setWindowSize,
  changeWindowSize,
  // setTestNum,
} = testSlice.actions;
export default testSlice.reducer;
