import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { loadStateFromLocalStorage } from '../../utils/storage';
import { hasPasscodeCookie } from '../../utils/cookie/checkCookie';

export interface IAuther {
  username: string;
  email: string;
}

export interface IAuthState {
    auth: IAuther;
    access_token: string;
    isAutherized: boolean;
    isCookie: boolean;
}

const initialState: IAuthState = {
    auth: {
      username: '',
      email: '',
    },
    access_token: loadStateFromLocalStorage() ?? '',
    isAutherized: false,
    isCookie: hasPasscodeCookie(),
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setAutherStatus: (state:IAuthState, {payload}: PayloadAction<boolean>) => {
      state.isAutherized = payload;
      if (!state.isAutherized) {
        localStorage.removeItem('token');
      }
    },
    setAuthenticatedUser: (state: IAuthState, { payload }: PayloadAction<IAuther>) => {
      state.auth.username = payload.username;
      state.auth.email = payload.email;
      state.isAutherized = true;
    },
    setIsCookieStatus: (state:IAuthState, {payload}: PayloadAction<boolean>) => {
      state.isCookie = payload;
    },
    resetState: (state: IAuthState) => {
      state.access_token = ''
      state.auth.username = ''
      state.auth.email = ''
      localStorage.setItem('user', '')
    },
  },
})

export const { setAuthenticatedUser, resetState, setAutherStatus, setIsCookieStatus } = authSlice.actions
export const authReducer = authSlice.reducer
export const selectAuthenticatedUser = (state: RootState) => state.authReducer