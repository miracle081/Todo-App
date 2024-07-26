import { Button, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'

export function Login() {
    const [email, setEmail] = useState("john@gmail.com")
    let num = "Account";
    num = "Log in"

    return (
        <ImageBackground source={{ uri: "https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }}
            style={styles.bg}
        >
            <View style={styles.container}>
                <Text style={styles.header}>Log in - {num}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Email"
                    onChangeText={(inp) => setEmail(inp)}
                />
                <Text>{email}</Text>

                {/* <Button title="Login" onPress={() => console.log("Button Clicked")} /> */}

                <TouchableOpacity style={styles.button} onPress={() => setEmail("Button Clicked")}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Login</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        padding: 20
    },
    bg: {
        height: "100%"
    },
    header: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: "center"
    },
    input: {
        borderWidth: 2,
        borderColor: "green",
        padding: 13,
        borderRadius: 40,
        marginTop: 20,
        backgroundColor: "#0b9e132c",
        // color: "white",
        fontSize: 20
    },
    button: {
        backgroundColor: "#0b9e12a1",
        padding: 15,
        borderRadius: 50,
        alignItems: "center",
        marginTop: 20
    }
})