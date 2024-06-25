import { Text, View, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import { appStyles } from '../Components/AppStyles';

export function OldUI() {

    return (
        <ImageBackground style={styles.bg} source={require("../assets/MO.jpg")}>
            <View style={styles.container}>
                <ScrollView>
                    <Text style={{ fontSize: 30, }}>CORE COMPONENTS</Text>
                    <Text style={styles.text}>React Native provides built-in components ready for use in any project.</Text>
                    <Image source={require("../assets/Miracle.jpeg")} style={styles.img} resizeMode="cover" />
                    <View style={appStyles.card}>
                        <Text style={styles.text}>React Native provides built-in components ready for use in any project.</Text>
                    </View>

                    <View style={appStyles.card}>
                        <Text style={styles.text}>
                            React Native provides built-in components ready for use in any project. React Native provides built-in components ready for use in any project.
                        </Text>
                    </View>

                    <View style={appStyles.card}>
                        <Text style={styles.text}>
                            React Native provides built-in components ready for use in any project. React Native provides built-in components ready for use in any project. {"\n"}{"\n"}
                            React Native provides built-in components ready for use in any project.
                            React Native provides built-in components ready for use in any project. React Native provides built-in components ready for use in any project. {"\n"}
                            React Native provides built-in components ready for use in any project.
                        </Text>
                    </View>

                    <View style={appStyles.card}>
                        <Text style={styles.text}>
                            React Native provides built-in components ready for use in any project. React Native provides built-in components ready for use in any project. {"\n"}{"\n"}
                            React Native provides built-in components ready for use in any project.
                            React Native provides built-in components ready for use in any project. React Native provides built-in components ready for use in any project. {"\n"}
                            React Native provides built-in components ready for use in any project.
                        </Text>
                    </View>

                    <View style={appStyles.card}>
                        <Text style={styles.text}>
                            React Native provides built-in components ready for use in any project. React Native provides built-in components ready for use in any project. {"\n"}
                            React Native provides built-in components ready for use in any project.
                        </Text>
                    </View>

                </ScrollView>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bg: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: "#0091ff87",
        padding: 20,
        marginTop: 50,
        borderRadius: 20,
        borderBottomRightRadius: 53,
        borderBottomLeftRadius: 53,
        // margin: 10,
        // height: 300,
        width: "100%",
        borderWidth: 5,
        borderColor: "orangered",
        borderStyle: "dotted",
    },
    text: {
        fontSize: 15,
        color: "#2c2c2c"
    },
    img: {
        width: 200,
        height: 200,
    }
})