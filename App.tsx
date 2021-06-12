import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';

import { MainPage, Camera } from './src/pages';
import { store } from './src/state';

export type AppStackNavParamList = { Main: undefined; Camera: undefined };

export default function App(): ReactElement {
    const Stack = createStackNavigator<AppStackNavParamList>();

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="Main"
                        component={MainPage}
                    />
                    <Stack.Screen name="Camera" component={Camera} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
