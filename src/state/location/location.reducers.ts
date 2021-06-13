import { PayloadAction } from '@reduxjs/toolkit';

import { LocationState } from './location.state';

export function setLocation(state: LocationState, { payload }: PayloadAction<LocationState>) {
    state.latitude = payload.latitude;
    state.longitude = payload.longitude;
}
