import { useIsFocused } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import * as FileSystem from 'expo-file-system';
import React, { ReactElement, useCallback, useRef, useState } from 'react';
import { Button, StyleSheet } from 'react-native';
import { CameraStatus, RNCamera } from 'react-native-camera';

import { AppStackNavParamList } from '../../../App';
import { photoActions, useAppDispatch } from '../../state';

export function Camera({ navigation }: StackScreenProps<AppStackNavParamList>): ReactElement {
    const isFocused = useIsFocused();
    const camera = useRef<RNCamera | null>(null);
    const [captureEnabled, setCaptureEnabled] = useState(true);
    const dispatch = useAppDispatch();
    const [status, setStatus] = useState<keyof CameraStatus>();

    const takePhoto = useCallback(async () => {
        if (!camera.current || status !== 'READY') {
            alert('Camera unavailable');
            navigation.goBack();

            return;
        }
        setCaptureEnabled(false);

        const { uri } = await camera.current.takePictureAsync({ imageType: 'jpeg' });
        const imageUri = await savePhoto(uri);
        dispatch(photoActions.savePhotoInfo({ imageUri, date: new Date() }));

        navigation.goBack();
        setCaptureEnabled(true);
    }, [dispatch, navigation, status]);

    if (isFocused) {
        return (
            <>
                <RNCamera
                    ref={camera}
                    style={s.preview}
                    captureAudio={false}
                    onStatusChange={event => setStatus(event.cameraStatus)}
                />
                <Button title="Capture" onPress={takePhoto} disabled={!captureEnabled} />
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
