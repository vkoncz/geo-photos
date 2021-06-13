import { PayloadAction } from '@reduxjs/toolkit';

import { Coordinates, Photo, PhotosState } from './photo.state';

export function setCurrentCoordinates(state: PhotosState, { payload }: PayloadAction<Coordinates>) {
    state.coordinates = payload;
}

export function savePhotoInfo(
    state: PhotosState,
    { payload }: PayloadAction<Omit<Photo, 'coordinates'>>,
) {
    state.photos.push({
        coordinates: state.coordinates,
        date: payload.date,
        imageUri: payload.imageUri,
    });
}

export function uploadPhoto(state: PhotosState, { payload }: PayloadAction<Photo>) {
    state.uploadStatus.status = 'in-progress';
    state.uploadStatus.photo = payload;
}

export function uploadPhotoSuccessful(state: PhotosState) {
    state.uploadStatus.status = 'finished';
}

export function uploadPhotoError(state: PhotosState, { payload }: PayloadAction<string>) {
    state.uploadStatus.status = 'error';
    state.uploadStatus.errorMessage = payload;
}
