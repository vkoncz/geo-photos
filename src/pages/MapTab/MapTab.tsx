import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React, { ReactElement, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useDispatch } from 'react-redux';

import { useLocation } from '../../hooks';
import { locationActions } from '../../state';
import { MainPageTabNavParamList } from '../MainPage/MainPage.model';
import s from './MapTab.style';

export function MapTab({
    navigation,
}: BottomTabScreenProps<MainPageTabNavParamList>): ReactElement {
    const { getLocation, location } = useLocation(navigation);
    const dispatch = useDispatch();

    useEffect(() => {
        getLocation();
    }, [getLocation]);

    return (
        <MapView
            provider="google"
            style={s.map}
            initialRegion={
                location ? { ...location, latitudeDelta: 0.015, longitudeDelta: 0.0121 } : undefined
            }
            onPress={event => {
                dispatch(locationActions.setLocation(event.nativeEvent.coordinate));
            }}
        >
            {location && <Marker coordinate={location} />}
        </MapView>
    );
}
