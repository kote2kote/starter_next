import { configureStore } from '@reduxjs/toolkit';
import testReducer from 'lib/slices/testSlice';
import commonReducer from 'lib/slices/commonSlice';

export default configureStore({
  reducer: {
    testSlice: testReducer,
    commonSlice: commonReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
