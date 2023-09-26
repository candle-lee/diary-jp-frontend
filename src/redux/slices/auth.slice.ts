import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface IAuthState {
    username: string
    email: string
    access_token: string
}

const initialState: IAuthState = {
    username: '',
    email: '',
    access_token: '',
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setAuthenticatedUser: (state: IAuthState, { payload }: PayloadAction<IAuthState>) => {
      console.log('authSlice:: setAuthenticatedUser: ', payload)
      state.username = payload.username
      state.email = payload.email
      state.access_token = payload.access_token
    },
    resetState: (state: IAuthState) => {
      state.access_token = ''
      state.username = ''
      state.email = ''
      localStorage.setItem('user', '')
    },
  },
})

export const { setAuthenticatedUser, resetState } = authSlice.actions
export const authReducer = authSlice.reducer
export const selectAuthenticatedUser = (state: RootState) => state.authReducer