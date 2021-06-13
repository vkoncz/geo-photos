export interface Photo {
    imageUri: string;
    date: Date;
    coordinates: Coordinates;
}

export interface UploadStatus {
    photo: Photo;
    status: 'in-progress' | 'finished' | 'error';
    errorMessage: string;
}

export interface Coordinates {
    latitude: number;
    longitude: number;
}

export interface PhotosState {
    coordinates: Coordinates;
    photos: Photo[];
    uploadStatus: UploadStatus;
}

export const initialState: PhotosState = {
    photos: [],
    coordinates: {
        latitude: 0,
        longitude: 0,
    },
    uploadStatus: {
        photo: {
            coordinates: {
                latitude: 0,
                longitude: 0,
            },
            date: new Date(),
            imageUri: '',
        },
        status: 'finished',
        errorMessage: '',
    },
};
