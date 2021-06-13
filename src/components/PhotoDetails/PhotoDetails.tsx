import { MaterialIcons } from '@expo/vector-icons';
import React, { ReactElement } from 'react';
import { Text, Image, StyleSheet, View, Pressable } from 'react-native';

import { Photo, photoActions, useAppDispatch } from '../../state';

interface Props {
    photo: Photo;
}

export function PhotoDetails({ photo }: Props): ReactElement {
    const dispatch = useAppDispatch();

    return (
        <View style={s.container}>
            <Image source={{ uri: photo.imageUri }} resizeMode="contain" style={s.image} />
            <View style={s.details}>
                <Text>Date: {photo.date.toDateString()}</Text>
                <Text>Latitude: {photo.coordinates.latitude}</Text>
                <Text>Longitude: {photo.coordinates.longitude}</Text>
            </View>
            <Pressable onPress={() => dispatch(photoActions.uploadPhoto(photo))}>
                <MaterialIcons name="sync" size={24} color="black" style={s.icon} />
            </Pressable>
        </View>
    );
}

const s = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingLeft: 5,
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    image: {
        height: 100,
        width: 100,
    },
    details: {
        marginLeft: 10,
    },
    icon: {
        fontSize: 28,
    },
});
