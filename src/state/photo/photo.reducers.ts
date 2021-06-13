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
        currentDate: payload.currentDate,
        imageUri: payload.imageUri,
    });
}
