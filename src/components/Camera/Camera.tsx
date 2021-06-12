import { useIsFocused } from '@react-navigation/native';
import React, { ReactElement } from 'react';
import { RNCamera } from 'react-native-camera';

export function Camera(): ReactElement {
    const isFocused = useIsFocused();

    // ...

    if (isFocused) {
        return <RNCamera />;
    } else {
        return <></>;
    }
}
