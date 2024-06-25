import { Alert, Button, Dimensions, FlatList, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'

export function Login() {
    const [text, setText] = useState("");
    const [allText, setAllText] = useState([
        {
            text: "kvjsd vksjdvsoiubd",
            date: 17438739482934
        }
    ]);

    // console.log(Platform.OS, Dimensions.get("screen").width);
    // console.log(StatusBar.currentHeight);

    function submitText() {
        setAllText(prev => [...prev, text])
        Alert.alert(
            "Adding Text",
            "Text has been added successfully",
            [{ text: "Nice!" }, { text: "Remove Text", onPress: () => { setAllText(allText.slice(0, -1)) } }]
        )
        ToastAndroid.showWithGravity(
            "Text has been added successfully",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM
        )
        setText("")
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.header}>Login</Text>
                <TextInput
                    placeholder="Entet text"
                    style={styles.input}
                    placeholderTextColor="gray"
                    // onChange={() => { console.log("Something just change") }}
                    onChangeText={(inp) => setText(inp)}
                    value={text}
                    multiline

                />

                {/* <View style={styles.btn}>
                    <Button title="Submit" color="green" />
                </View> */}
                <TouchableOpacity onPress={submitText} style={styles.btn}>
                    <Text style={{ color: 'white' }}>Submit</Text>
                </TouchableOpacity>

                <FlatList
                    data={allText}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.card}>
                                <Text style={styles.text}>{item.text}</Text>
                                <View style={{ flexDirection: "row", marginTop: 5, justifyContent: "space-between", alignItems: "flex-end" }}>
                                    <Text style={styles.date}>~ 1/23/2020</Text>
                                    <TouchableOpacity style={styles.cardBtn}>
                                        <Text style={{ color: "white", fontWeight: "bold" }}>Delete</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }}
                    key={({ item }) => { { item } }}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 30,
        color: "green",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20
    },
    input: {
        borderColor: "green",
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        fontSize: 18,
        height: 100
    },

    btn: {
        backgroundColor: "green",
        borderRadius: 30,
        padding: 10,
        alignItems: "center",
        marginVertical: 10,
    },

    card: {
        borderRadius: 10,
        borderColor: "gray",
        borderWidth: 1,
        padding: 5,
        marginTop: 5
    },
    date: {
        textAlign: 'right',
        fontStyle: "italic",
        color: "gray"
    },
    cardBtn: {
        backgroundColor: "#ff5050",
        padding: 5,
        paddingHorizontal: 20,
        borderRadius: 50
    }
})