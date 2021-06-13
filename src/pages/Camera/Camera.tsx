import { useIsFocused } from '@react-navigation/native';
import React, { ReactElement } from 'react';
import { Button, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';

export function Camera(): ReactElement {
    const isFocused = useIsFocused();

    // ...

    if (isFocused) {
        return (
            <>
                <RNCamera style={s.preview} captureAudio={false} />
                <Button title="Capture" onPress={() => {}} />
            </>
        );
    } else {
        return <></>;
    }
}

const s = StyleSheet.create({
    preview: {
        flex: 1,
    },
});
