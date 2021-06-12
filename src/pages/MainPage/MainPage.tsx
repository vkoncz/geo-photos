import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { ReactElement } from 'react';

import { MapTab } from '../MapTab/MapTab';
import { ResultsTab } from '../ResultsTab/ResultsTab';
import { MainPageTabNavParamList } from './MainPage.model';

export function MainPage(): ReactElement {
    const Tab = createBottomTabNavigator<MainPageTabNavParamList>();

    return (
        <Tab.Navigator tabBarOptions={{ labelStyle: { fontSize: 12 } }}>
            <Tab.Screen
                name="Map"
                component={MapTab}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="map" size={28} {...{ color }} />
                    ),
                }}
            />
            <Tab.Screen
                name="Results"
                component={ResultsTab}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="auto-awesome-motion" size={28} {...{ color }} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
