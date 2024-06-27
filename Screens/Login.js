import { Alert, Button, FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View, } from "react-native";
import { useState } from "react"

export function Login() {
    const [eamil, setEmail] = useState("")
    // console.log(StatusBar.currentHeight);
    const num = "";

    function displayAlert() {
        // console.log(ToastAndroid.SHORT);
        // ToastAndroid.showWithGravity(
        //     "Login Successful",
        //     ToastAndroid.SHORT,
        // )
        Alert.alert(
            "Display alert",
            "Do you want to submit this email for review?",
            [
                {
                    text: "Yes",
                    onPress: () => { console.log("Yes CLicked") }
                },
                { text: "No" }, { text: "don't ask again" }
            ]
        )
    }


    const list = [
        { title: "Am going to the market", date: "2/2/2024" },
    ];


    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <ScrollView > */}
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
                {/* <View style={{ height: "150%", padding: 50, backgroundColor: "gray" }}></View> */}
                <TouchableOpacity style={styles.btn} onPress={() => displayAlert()}>
                    <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>Submit</Text>
                </TouchableOpacity>
                <FlatList horizontal={false}
                    data={list}
                    renderItem={({ item, index }) => {
                        return <Text style={styles.list}>{index}.{item.title} {item.date} </Text>
                    }}
                />
            </View>
            {/* </ScrollView> */}
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
    },
    list: {
        color: "green",
        backgroundColor: "#0358102b",
        padding: 20,
        borderRadius: 10,
        margin: 3,
        fontSize: 20
    }
})