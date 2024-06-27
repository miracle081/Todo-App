import { Button, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, } from "react-native";
import { useState } from "react"

export function Login() {
    const [eamil, setEmail] = useState("")
    // console.log(StatusBar.currentHeight);
    const num = "";

    return (
        <SafeAreaView>
            <View style={styles.container}>

                <Text style={styles.header}>Login {num}</Text>
                <Text style={styles.text}>Provide you log in details to proceed to the next screen</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={(inp) => setEmail(inp)}

                />
                <Text>{eamil}</Text>

                <Button onPress={() => console.log("Button clicked")} title="Submit" />
                <TouchableOpacity style={styles.btn} onPress={() => setEmail("ben10@gmail.com")}>
                    <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>Submit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight, // Android
        padding: 20
    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
    },
    text: {
        marginTop: 20,
        fontSize: 18,
        color: "gray",
    },
    input: {
        borderWidth: 1,
        borderColor: "green",
        padding: 10,
        marginTop: 10,
        borderRadius: 30
    },
    btn: {
        backgroundColor: "green",
        padding: 10,
        alignItems: "center",
        borderRadius: 40,
    }
})