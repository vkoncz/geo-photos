import React, { ReactElement } from 'react';
import { FlatList } from 'react-native';

import { PhotoDetails } from '../../components';
import { useAppSelector } from '../../state';

export function ResultsTab(): ReactElement {
    const photos = useAppSelector(state => state.location.photos);
    const sortedPhotos = [...photos].sort((a, b) => b.date.getTime() - a.date.getTime());

    return (
        <FlatList
            style={{ backgroundColor: '#fff' }}
            data={sortedPhotos}
            renderItem={({ item }) => <PhotoDetails photo={item} />}
            keyExtractor={photo => photo.imageUri}
        />
    );
}
