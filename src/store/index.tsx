import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import { combineReducers, configureStore, PayloadAction } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

import surveyReducer from './survey';

const reducers = combineReducers({
  survey: surveyReducer
});

export type AppState = ReturnType<typeof reducers>;

const rootReducer = (state: AppState | undefined, action: PayloadAction<AppState>) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload
    };
  }

  return reducers(state, action);
};

const makeStore = () =>
  configureStore({
    reducer: rootReducer
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;

export const useSelector = useReduxSelector.withTypes<RootState>();
export const useDispatch = useReduxDispatch.withTypes<AppDispatch>();

export const wrapper = createWrapper<AppStore>(makeStore);
