import { useIsFocused } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import * as FileSystem from 'expo-file-system';
import React, { ReactElement, useCallback, useRef } from 'react';
import { Button, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';

import { AppStackNavParamList } from '../../../App';

export function Camera({ navigation }: StackScreenProps<AppStackNavParamList>): ReactElement {
    const isFocused = useIsFocused();
    const camera = useRef<RNCamera | null>(null);

    const takePhoto = useCallback(async () => {
        if (!camera.current) return;

        const photo = await camera.current.takePictureAsync({ imageType: 'jpeg' });
        await savePhoto(photo.uri);

        navigation.goBack();
    }, [navigation]);

    if (isFocused) {
        return (
            <>
                <RNCamera ref={camera} style={s.preview} captureAudio={false} />
                <Button title="Capture" onPress={takePhoto} />
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

async function savePhoto(fileUri: string): Promise<string> {
    const photoDirectory = `${FileSystem.documentDirectory}/photos`;
    if (!(await FileSystem.getInfoAsync(photoDirectory)).exists) {
        await FileSystem.makeDirectoryAsync(photoDirectory);
    }

    const newPhotoUri = `${photoDirectory}/${Date.now()}.jpg`;
    await FileSystem.moveAsync({
        from: fileUri,
        to: newPhotoUri,
    });

    return newPhotoUri;
}
