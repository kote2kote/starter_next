import { useDispatch, useSelector } from 'react-redux'; // 変更用、参照用
import { getTestState, setTestNum } from 'lib/slices/testSlice';
// ==================================================
// console.log
// ==================================================
export function Log(...logs) {
  console.log(logs);
}

// ==================================================
// console.log
// ==================================================
let bp = {
  tb: 520,
  pc: 960,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  wide: 1536,
};
let windowSizeX = 0;
// let testNum = 0;
// export function test() {
//   if (process.browser) {
//     const dispatch = useDispatch(); // 変更用
//     // const state = useSelector(getTestState); // state一覧

//     dispatch(setTestNum(testNum + 1));
//     // window.addEventListener('resize', test);
//   }
//   // console.log(testNum);
//   // testNum = testNum + 1;
// }
// export function testResult() {
//   console.log('testResult()');
//   return testNum;
// }
export function windowSize(str) {
  if (process.browser) {
    windowSizeX = window.innerWidth;

    // tb
    if (windowSizeX <= bp.tb - 1) {
      if (str === 'isMAXTB') {
        return true;
      }
    }
    if (windowSizeX >= bp.tb) {
      if (str === 'isTB') {
        return true;
      }
    }
    if (windowSizeX >= bp.tb && windowSizeX <= bp.pc - 1) {
      if (str === 'isTBPC') {
        return true;
      }
    }

    //pc
    if (windowSizeX <= bp.pc - 1) {
      if (str === 'isMAXPC') {
        return true;
      }
    }
    if (windowSizeX >= bp.pc) {
      if (str === 'isPC') {
        return true;
      }
    }

    // SM
    if (windowSizeX <= bp.sm - 1) {
      if (str === 'isMAXSM') {
        return true;
      }
    }
    if (windowSizeX >= bp.sm) {
      if (str === 'isSM') {
        return true;
      }
    }
    if (windowSizeX >= bp.sm && windowSizeX <= bp.md - 1) {
      if (str === 'isSMMD') {
        return true;
      }
    }

    // MD
    if (windowSizeX <= bp.md) {
      if (str === 'isMAXMD') {
        return true;
      }
    }
    if (windowSizeX >= bp.md) {
      if (str === 'isMD') {
        return true;
      }
    }
    if (windowSizeX >= bp.md && windowSizeX <= bp.lg - 1) {
      if (str === 'isMDLG') {
        return true;
      }
    }

    // LG
    if (windowSizeX <= bp.lg - 1) {
      if (str === 'isMAXLG') {
        return true;
      }
    }
    if (windowSizeX >= bp.lg) {
      if (str === 'isLG') {
        return true;
      }
    }
    if (windowSizeX >= bp.lg && windowSizeX <= bp.xl - 1) {
      if (str === 'isLGXL') {
        return true;
      }
    }

    // XL
    if (windowSizeX <= bp.xl - 1) {
      bp.isMAXXL = true;
    }
    if (windowSizeX >= bp.xl) {
      if (str === 'isXL') {
        return true;
      }
    }
    if (windowSizeX >= bp.xl && windowSizeX <= bp.wide - 1) {
      if (str === 'isXLWIDE') {
        return true;
      }
    }

    // WIDE
    if (windowSizeX <= bp.wide - 1) {
      if (str === 'isMAXWIDE') {
        return true;
      }
    }
    if (windowSizeX >= bp.wide) {
      if (str === 'isWIDE') {
        return true;
      }
    }
  }
}

// function test(...logs) {
//   console.log(logs);
// }
