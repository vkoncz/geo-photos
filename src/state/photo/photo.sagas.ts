import { call, put, takeEvery } from 'redux-saga/effects';

import { showToast } from '../../services/showToast';
import { uploadPhotoMock } from '../../services/uploadPhoto';
import { photoActions } from './photo.slice';
import { Photo } from './photo.state';

function* photoSave(action: { payload: Omit<Photo, 'coordinates'>; type: string }) {
    // TODO save to database
}

function* photoUpload(action: { payload: Photo; type: string }) {
    try {
        yield call(uploadPhotoMock, action.payload);
        yield put(photoActions.uploadPhotoSuccessful());
    } catch (error) {
        yield put(photoActions.uploadPhotoError(error.toString()));
    }
}

function* successfulPhotoUpload() {
    yield call(showToast, 'Successful photo upload');
}

function* errorPhotoUpload(action: { payload: string; type: string }) {
    yield call(showToast, `Photo upload error:${action.payload}`);
}

export function* photoSaga() {
    yield takeEvery(photoActions.savePhotoInfo, photoSave);
    yield takeEvery(photoActions.uploadPhoto, photoUpload);
    yield takeEvery(photoActions.uploadPhotoSuccessful, successfulPhotoUpload);
    yield takeEvery(photoActions.uploadPhotoError, errorPhotoUpload);
}
