import { Dimensions, Image, ImageBackground, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { useState, useEffect, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faHome } from '@fortawesome/free-solid-svg-icons';
// import { faUser, } from '@fortawesome/free-regular-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faHomeAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { ActivityIndicator, Button } from 'react-native-paper';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { Manrope_500Medium, Manrope_600SemiBold } from '@expo-google-fonts/manrope';

export function Position() {
    const [visibility, setVisibility] = useState(true)
    const [appIsReady, setAppIsReady] = useState(false);
    // console.log(Dimensions.get("screen").height);

    setTimeout(() => {
        setVisibility(false);
    }, 10000);

    // console.log(300);
    // useEffect(() => {
    //     // setVisibility(true);
    //     console.log("visibility");
    // }, [visibility]);



    useEffect(() => {
        console.log(Platform.OS);
        async function prepare() {
            try {
                await Font.loadAsync({ Pacifico_400Regular });
                await Font.loadAsync({ Manrope_500Medium });
                await Font.loadAsync({ Manrope_600SemiBold });
                await new Promise(resolve => setTimeout(resolve, 5000));
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={{ uri: visibility ? null : "https://images.pexels.com/photos/25853709/pexels-photo-25853709/free-photo-of-an-aerial-view-of-two-people-laying-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }} style={{ height: "100%", width: "100%" }}>
                <View style={styles.container}>
                    <View style={styles.parent}>
                        <View style={styles.box}></View>
                        <View style={[styles.box, { backgroundColor: "red", }]}></View>
                        <View style={styles.box}></View>
                    </View>
                    <View style={{ flexDirection: "row", }}>
                        <FontAwesomeIcon icon={faHomeAlt} />
                        <FontAwesomeIcon icon={faUser} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faInstagramSquare} color='orange' size={40} />

                    </View>
                    {/* <Image source={require("../assets/img.jpg")} style={{ width: "100%", height: 500 }} /> */}
                    <ActivityIndicator animating={visibility} color={"#a51a01"} size={100} />
                    {/* <Button mode='contained' onPress={() => setVisibility(visibility ? false : true)} >Activity</Button> */}
                    <Button mode='contained' onPress={() => setVisibility(!visibility)} >Activity</Button>

                    <Text style={styles.text}>Position</Text>

                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS == "android" ? StatusBar.currentHeight : null,
        paddingHorizontal: 20,
    },
    parent: {
        flexDirection: 'row',
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: "#00000007",
        // height: "100%",
        // flex: 1,
        position: "relative",
        elevation: 10
    },
    box: {
        width: 70,
        height: 70,
        backgroundColor: "#71c06b",
        margin: 3,
        // flex: 1
    },
    text: {
        fontSize: 30,
        textAlign: "center",
        marginTop: 30,
        fontFamily: "Pacifico_400Regular",
    }
})