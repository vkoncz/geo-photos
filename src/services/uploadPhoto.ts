import * as FileSystem from 'expo-file-system';

import { Photo } from '../state';

export function uploadPhotoMock(photo: Photo): Promise<void> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
}

export async function uploadPhoto(photo: Photo): Promise<void> {
    const { coordinates, date } = photo;
    const photoBase64 =
        'data:image/jpeg;base64' + (await FileSystem.readAsStringAsync(photo.imageUri));

    const body = JSON.stringify({ photo: photoBase64, coordinates, date: date.toISOString() });

    const result = await fetch('https://this.is.a.test/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body,
    });

    if (!result.ok) throw Error(`Request returned${result.status}response`);
}
