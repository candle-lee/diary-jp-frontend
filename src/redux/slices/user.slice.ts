import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserState } from '../../constant/interfaces';

const initialState: IUserState = {
    username: '',
    email: '',
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUser(state: IUserState, { payload }: PayloadAction<IUserState>) {
            state.username = payload.username;
            state.email = payload.email;
        },
    },
})

export const { setUser } = userSlice.actions
export const userReducer = userSlice.reducer