import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { useCallback, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { TextInput, Avatar, Button, Card, Text as P, shadow } from 'react-native-paper';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Manrope_400Regular, Manrope_500Medium, Manrope_600SemiBold } from "@expo-google-fonts/manrope"

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export function TripPlanner() {
    const [appIsReady, setAppIsReady] = useState(false);
    const [balance, setbalance] = useState(30000);
    const [btn, setbtn] = useState(false);

    useEffect(() => {
        // console.log("Button Clicked");
        setbalance(btn == true ? 50000 : balance)
    }, [btn])


    useEffect(() => {
        // console.log("Done");
        async function prepare() {
            try {
                await Font.loadAsync({ Manrope_400Regular, Manrope_500Medium, Manrope_600SemiBold });
                await new Promise(resolve => setTimeout(resolve, 500));
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
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
        <SafeAreaView style={{ backgroundColor: '#f3f1f1', flex: 1, marginTop: StatusBar.currentHeight }}>
            <View style={styles.container}>
                <View style={styles.topBar}>
                    <Image source={require("../assets/Miracle.jpeg")} style={styles.img} />
                    <Text style={styles.header}>Trip Planner</Text>
                    <View style={styles.search}>
                        <FontAwesomeIcon icon={faFacebook} color='#2968f0' size={30} />
                    </View>
                </View>
                <Text style={styles.header}>Balance: {balance}</Text>
                <View style={styles.bottomBar}>
                    <Button icon="delete" mode="contained" loading={false} onPress={() => setbtn(true)}>
                        Press me
                    </Button>

                    <Text style={styles.text}>
                        Expo SDK officially supports OTF and TTF font formats across Android, iOS and web platforms. If your font is in another font format, you have to set up advanced configuration to support that format in your project.
                        How to choose between OTF and TTF
                        If the font you're using have both OTF and TTF versions, prefer OTF. The .otf files are smaller than .ttf files. Sometimes, OTF also renders slightly better in certain contexts.
                    </Text>
                </View>
                <View style={styles.shadow}></View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,

    },
    topBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    header: {
        fontSize: 25,
        fontWeight: "bold"
    },
    search: {
        backgroundColor: "white",
        borderRadius: 50,
        padding: 10,
        paddingHorizontal: 14
    },
    text: {
        fontSize: 26,
        marginTop: 20,
        fontFamily: "Manrope_600SemiBold"
    },
    shadow: {
        marginTop: 20,
        backgroundColor: "#f3f1f1",
        width: 150,
        height: 150,
        borderRadius: 600,
        marginHorizontal: "auto",
        alignSelf: "center",
        shadowColor: "gray",
        shadowRadius: 0,
        shadowOpacity: 1,
        shadowOffset: { height: 0, width: -70 }
    }
})