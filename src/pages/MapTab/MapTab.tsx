import React, { ReactElement } from 'react';
import MapView from 'react-native-maps';

import s from './MapTab.style';

export function MapTab(): ReactElement {
    return (
        <MapView
            provider="google"
            style={s.map}
            region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }}
        />
    );
}
