export interface LocationState {
    latitude: number;
    longitude: number;
}

export const initialState: LocationState = {
    longitude: 0,
    latitude: 0,
};
