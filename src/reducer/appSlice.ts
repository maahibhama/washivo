import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';

export interface AppState {
  isLogin: boolean
}

const initialState: AppState = {
  isLogin: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
  },
});

export const { updateIsLogin } = appSlice.actions;

export const getIsLogin = (state: RootState) => state.app.isLogin;


export default appSlice.reducer;
