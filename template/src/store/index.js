import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import basicReducer from './modules/basic.module';
import counterReducer from '../pages/counter/counter.module';

const middleware = [...getDefaultMiddleware()];

if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {
  middleware.push(logger);
}

const store = configureStore({
  reducer: {
    base: basicReducer,
    counter: counterReducer,
  },
  middleware: [logger, ...getDefaultMiddleware()],
});

export default store;
