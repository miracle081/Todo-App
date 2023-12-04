import { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, Platform, SafeAreaView, Image, ImageBackground, ScrollView, TextInput } from 'react-native';

export function OldUI() {
    const [number, setNumber] = useState(20);
    // setNumber(40);
    // console.log(number);
    // const number = 0;
    let x = 10;
    x = 20
    console.log(x);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.header}>Hello React Native</Text>
                    {/* <Image source={require("./assets/icon.png")} style={{ width: "100%", height: 380 }} /> */}
                    <Image source={{ uri: "https://media.istockphoto.com/id/1075599562/photo/programmer-working-with-program-code.jpg?b=1&s=612x612&w=0&k=20&c=-wTGItN4uscm4sy8X07O4YXhyl2xOBnc9DfzMyUKxJ0=" }} style={{ width: "100%", height: 380 }} />

                    <ImageBackground source={{ uri: "https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=400" }} style={styles.bg} borderRadius={20}>

                        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: "center" }}>Welcome to the world of Moble Development</Text>
                        <TextInput
                            placeholder='Enter your name'
                            style={{ borderWidth: 1, padding: 10, borderRadius: 10, fontSize: 16 }}
                            placeholderTextColor={"green"}
                        />
                    </ImageBackground>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        margin: Platform.OS == "android" ? StatusBar.currentHeight : null,
        backgroundColor: "#ffffff",
    },
    header: {
        color: "green",
        fontSize: 25,
        borderWidth: 1,
        borderColor: "green",
        padding: 5,
        width: "100%",
        borderRadius: 10,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 20
    },
    bg: {
        width: "100%",
        height: 580,
        marginTop: 20,
        justifyContent: "center",
    }
});
