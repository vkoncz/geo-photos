import { takeEvery } from 'redux-saga/effects';

import { photoActions } from './photo.slice';
import { Photo } from './photo.state';

function* photoSave(action: { payload: Omit<Photo, 'coordinates'>; type: string }) {
    // only sample
}

export function* photoSaga() {
    yield takeEvery(photoActions.savePhotoInfo, photoSave);
}
