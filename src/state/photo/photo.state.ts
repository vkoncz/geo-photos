export interface Photo {
    imageUri: string;
    date: Date;
    coordinates: Coordinates;
}

export interface Coordinates {
    latitude: number;
    longitude: number;
}

export interface PhotosState {
    coordinates: Coordinates;
    photos: Photo[];
}

export const initialState: PhotosState = {
    photos: [],
    coordinates: {
        latitude: 0,
        longitude: 0,
    },
};
