import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import React, { ReactElement, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useDispatch } from 'react-redux';

import { AppStackNavParamList } from '../../../App';
import { useLocation } from '../../hooks';
import { locationActions } from '../../state';
import { MainPageTabNavParamList } from '../MainPage/MainPage.model';
import s from './MapTab.style';

export function MapTab({
    navigation,
}: BottomTabScreenProps<MainPageTabNavParamList> &
    StackScreenProps<AppStackNavParamList>): ReactElement {
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
                navigation.navigate('Camera');
            }}
        >
            {location && <Marker coordinate={location} />}
        </MapView>
    );
}
