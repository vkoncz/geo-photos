import { createSlice } from '@reduxjs/toolkit';

import * as reducers from './photo.reducers';
import { initialState } from './photo.state';

export const photoSlice = createSlice({
    name: 'photo',
    initialState,
    reducers,
});

export const photoActions = photoSlice.actions;

export default photoSlice.reducer;
