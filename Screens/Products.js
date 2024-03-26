
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, Text, Platform, StatusBar, StyleSheet, SafeAreaView, } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import { useEffect, useState, useCallback } from "react";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

export function Products() {
    const [appIsReady, setAppIsReady] = useState(false);
    const [years, setYears] = useState(2022);

    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync({ Pacifico_400Regular });
                await new Promise(resolve => setTimeout(resolve, 500));
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }

        prepare();
    }, [])
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
                <Text style={styles.header}>Expo Post</Text>
                <FontAwesomeIcon icon={faUser} size={50} color="green" />
                <Button loading={true} icon="account" mode="elevated" onPress={() => setYears(years + 1)}>
                    Press me
                </Button>

                <View style={styles.shadow}>
                    <Card>
                        <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
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
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS == "android" ? StatusBar.currentHeight : null,
        padding: 20,
    },
    header: {
        fontSize: 30,
        fontFamily: "Pacifico_400Regular",
        textAlign: "center",
        color: "green",
    },
    shadow: {
        padding: 10,
        marginTop: 30,
        backgroundColor: "white",
        borderWidth: 0.5,
        elevation: 5,
        shadowColor: "#262222",
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.6,
        shadowRadius: 5,
    }
})