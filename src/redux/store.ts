import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './slices/auth.slice'
import { userReducer } from './slices/user.slice'

export const store = configureStore({
  reducer: {
    authReducer,
    userReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch