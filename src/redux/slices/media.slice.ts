import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMedia, IMediaState } from '../../constant/interfaces';

const initialState: IMediaState = {
    totalSize: 0,
    media: null
}

export const mediaSlice = createSlice({
    name: 'mediaSlice',
    initialState,
    reducers: {
        setSize(state: IMediaState, { payload }: PayloadAction<number>) {
            state.totalSize = payload;
        },
        setMedia(state: IMediaState, { payload }: PayloadAction<IMedia>) {
            state.media = payload;
        }
    },
})

export const { setSize } = mediaSlice.actions;
export const { setMedia } = mediaSlice.actions;
export const mediaReducer = mediaSlice.reducer;