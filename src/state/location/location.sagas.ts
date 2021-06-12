import { takeEvery } from 'redux-saga/effects';

import { locationActions } from './location.slice';
import { LocationState } from './location.state';

function* cameraOpen(action: { payload: LocationState; type: string }) {
    // only sample
}

export function* locationSaga() {
    yield takeEvery(locationActions.setLocation, cameraOpen);
}
