import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { photoSaga } from './photo/photo.sagas';
import location from './photo/photo.slice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        location,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(photoSaga);

store.subscribe(() =>
    console.log('State after dispatch: ', JSON.stringify(store.getState(), undefined, '  ')),
);

export type Dispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
