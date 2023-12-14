import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './slices/auth.slice'
import { userReducer } from './slices/user.slice'
import { mediaReducer } from './slices/media.slice'

export const store = configureStore({
  reducer: {
    authReducer,
    userReducer,
    mediaReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch