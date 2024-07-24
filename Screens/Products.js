import { View, Text, Platform, StatusBar, StyleSheet, SafeAreaView, Switch, } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faInstagram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { ActivityIndicator, Avatar, Button, Card, MD2Colors, } from "react-native-paper";
import { useState, useEffect, useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { SedgwickAveDisplay_400Regular } from "@expo-google-fonts/sedgwick-ave-display";
import { Manrope_400Regular, Manrope_700Bold, Manrope_800ExtraBold } from "@expo-google-fonts/manrope";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";

export function Products() {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync({ SedgwickAveDisplay_400Regular });
                await Font.loadAsync({ Manrope_400Regular });
                await Font.loadAsync({ Manrope_700Bold });
                await Font.loadAsync({ Manrope_800ExtraBold });
                await Font.loadAsync({ Pacifico_400Regular });
                await new Promise(resolve => setTimeout(resolve, 50));
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
            <View style={styles.container}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontFamily: "Manrope_800ExtraBold", fontSize: 20 }}>Expo Font</Text>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                </View>
                
                <FontAwesomeIcon icon={faUser} size={50} />
                <View style={styles.social}>
                    <FontAwesomeIcon icon={faFacebook} size={50} color="#325afa" />
                    <FontAwesomeIcon icon={faInstagram} size={50} color="#fa32b4" />
                    <FontAwesomeIcon icon={faTwitter} size={50} color="#325afa" />
                    <FontAwesomeIcon icon={faWhatsapp} size={50} color="#10d724" />
                    <FontAwesomeIcon icon={faGithub} size={50} color="#171718" />
                </View>
                {
                    !isSwitchOn ? <ActivityIndicator animating={true} size={100} color={MD2Colors.red800} /> : null
                }

                <Button
                    mode="contained-tonal"
                    onPress={() => console.log("React native")}
                    loading={false}
                    icon="camera"
                >Click here</Button>

                <View style={styles.shadow}></View>

                <Card>
                    <Card.Title title="Card Title" subtitle="Card Subtitle" />
                    <Card.Content>
                        <Text variant="titleLarge">Card title</Text>
                        <Text variant="bodyMedium">Card content</Text>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Actions>
                        <Button>Cancel</Button>
                        <Button>Ok</Button>
                    </Card.Actions>
                </Card>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        padding: 20,
    },
    social: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        borderColor: "#ff67c0",
        borderWidth: 1, padding: 10,
        borderRadius: 10
    },
    shadow: {
        backgroundColor: "#ffffff",
        marginVertical: 10,
        borderRadius: 10,
        padding: 50,
        elevation: 5,
        shadowColor: "gray",
        shadowOpacity: 0.6,
        shadowRadius: 5,
        shadowOffset: { width: 3, height: 3 }
    }
})