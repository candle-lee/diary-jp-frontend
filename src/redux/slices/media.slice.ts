import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMediaState } from '../../constant/interfaces';

const initialState: IMediaState = {
    totalSize: 0
}

export const mediaSlice = createSlice({
    name: 'mediaSlice',
    initialState,
    reducers: {
        setSize(state: IMediaState, { payload }: PayloadAction<number>) {
            state.totalSize = payload;
        },
    },
})

export const { setSize } = mediaSlice.actions
export const mediaReducer = mediaSlice.reducer