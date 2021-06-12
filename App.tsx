import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';

import { MainPage } from './src/pages';
import { store } from './src/state';

export default function App(): ReactElement {
    return (
        <Provider store={store}>
            <MainPage />
        </Provider>
    );
}
