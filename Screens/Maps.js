import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MapView from 'react-native-maps';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export function Maps() {

    const { width, height } = Dimensions.get('window');
    const ASPECT_RATIO = width / height;
    const LATITUDE_DELTA = 0.02;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
    // const INITIAL_POSITION = {
    //     latitude: 9.055255305727574,
    //     longitude: 7.489606969426971,
    //     latitudeDelta: LATITUDE_DELTA,
    //     longitudeDelta: LONGITUDE_DELTA
    // };

    const [inital, setInital] = useState({
        latitude: 9.055255305727574,
        longitude: 7.489606969426971,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
    })

    return (
        <>
            <MapView
                // style={{ height: 200, marginTop: 100 }}
                style={{ flex: 1 }}
                initialRegion={inital}
            />
            <View style={styles.mapAutoComplete}>

                <GooglePlacesAutocomplete placeholder="Search"
                    query={{
                        key: 'AIzaSyAaSMKHvgtvpeFGkJlK-aBBm5FMGM09evI',
                        language: 'en',
                    }}
                    fetchDetails={true}
                    enablePoweredByContainer={false}

                    onPress={(data, details = null) => {
                        const { lat, lng } = details.geometry.location
                        // console.log(data);
                        setInital({ ...inital, latitude: lat, longitude: lng })
                        console.log({ ...inital, latitude: lat, longitude: lng });
                    }}
                    minLength={2}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    map: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    mapAutoComplete: {
        position: 'absolute',
        top: 80,
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: 'black',
        shadowOffset: { width: 4, height: 4 },
        shadowRadius: 4,
        shadowOpacity: 0.5,
        elevation: 5,
        width: '90%',
        alignSelf: 'center'
    }
});