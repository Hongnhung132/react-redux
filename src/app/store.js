import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/withRedux/SingleCounterReduxSlice';
import multiCounterSlice from '../components/withRedux/MultiCounterReduxSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    multicounter: multiCounterSlice
  },
});
