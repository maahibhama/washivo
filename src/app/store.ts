import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../reducer/counterSlice';
import appReducer from '../reducer/appSlice';
export const store = configureStore({
  reducer: {
    app: appReducer,
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
