import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

export function OldUI() {

    return (
        <>
            <ImageBackground source={require("../assets/Miracle.jpeg")} style={styles.img}>
                <View style={{ backgroundColor: "#1b099281", padding: 40, height: "100%" }}>
                    <Text style={styles.header}>React Native</Text>
                    <Text style={styles.body}>React Native is a cross platform difhvakjf vajshd ,vjahsdvas</Text>
                    <View style={{ alignItems: "center", }}>

                    </View>
                </View>
            </ImageBackground>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold"
    },
    body: {
        color: "white",
        marginTop: 20,
    },
    img: {
        width: 600,
        height: 900,
        borderRadius: 1000,
        marginTop: 50,

    }
})