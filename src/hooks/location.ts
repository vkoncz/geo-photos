import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import * as Location from 'expo-location';
import { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { LatLng } from 'react-native-maps';

import { MainPageTabNavParamList } from '../pages/MainPage/MainPage.model';

const showAlert = (alertMessage: string) => {
    Alert.alert('Cannot use location', alertMessage);
};

export function useLocation(navigation: BottomTabNavigationProp<MainPageTabNavParamList>) {
    const [location, setLocation] = useState<LatLng | undefined>(undefined);

    const getLocation = useCallback(async () => {
        try {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                showAlert('Permission to access location was denied');
                navigation.navigate('Results');
                return;
            }

            const currentLocation = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.High,
            });
            setLocation(currentLocation.coords);
        } catch (error) {
            showAlert('Location data is unavailable');
            navigation.navigate('Results');
        }
    }, [navigation]);

    return {
        getLocation,
        location,
    };
}
