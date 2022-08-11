import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { covidSlice } from '../features/covidSlice';


export const store = configureStore({
  reducer: {
    covid: covidSlice.reducer
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
