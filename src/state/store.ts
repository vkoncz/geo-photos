import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { locationSaga } from './location/location.sagas';
import cv from './location/location.slice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        cv,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(locationSaga);

export type Dispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
