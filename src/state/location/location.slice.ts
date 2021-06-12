import { createSlice } from '@reduxjs/toolkit';

import * as reducers from './location.reducers';
import { initialState } from './location.state';

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers,
});

export const locationActions = locationSlice.actions;

export default locationSlice.reducer;
