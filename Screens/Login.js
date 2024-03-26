import { Alert, Button, FlatList, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { useState } from "react"

const list = [
    { id: 1, text: "Upcoming classes in Kubwa" },
    { id: 2, text: "Event coming up" },
    { id: 1, text: "Upcoming classes in Kubwa" },
    { id: 3, text: "Event coming up" },
]
export function Login() {
    const [email, setEmail] = useState("john123@gmail.com")


    function create() {
        // console.log(email);
        // Alert.alert(
        //     "Hi",
        //     "Message here",
        //     [{ text: "Move up", onPress: () => console.log("Move up") }, { text: "Move down" }]
        // )
        ToastAndroid.showWithGravity("Account created successfully", ToastAndroid.LONG)
    }

    return (
        <View>
            <View style={styles.constainer}>
                <Text>Login</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(inp) => setEmail(inp)}
                />
                <Text>Input Value: {email}</Text>

                <Button title="Login" color="green" onPress={() => console.log(email)} />

                <TouchableOpacity onPress={create} style={styles.btn}>
                    <Text style={{ color: "white" }}>Create Account</Text>
                </TouchableOpacity>
                <FlatList
                    data={list}
                    renderItem={({ item }) => {
                        return (
                            <>
                                <Text>{item.id}: {item.text}</Text>
                            </>
                        )
                    }}
                />
                {/* <View style={{ backgroundColor: "gray", height: 500, marginTop: 10 }}></View>
                <View style={{ backgroundColor: "gray", height: 500, marginTop: 10 }}></View>
                <View style={{ backgroundColor: "gray", height: 500, marginTop: 10 }}></View> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    constainer: {
        padding: 20,
        paddingTop: 50,
    },
    input: {
        borderWidth: 1,
        borderColor: "green",
        padding: 10,
        borderRadius: 10,
        marginTop: 10
    },
    btn: {
        backgroundColor: "green",
        padding: 15,
        borderRadius: 40,
        alignItems: "center",
        // width: 200
    }
});