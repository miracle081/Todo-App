import { useState } from 'react';
import {
    StyleSheet, View, Text, StatusBar,
    Platform, SafeAreaView, TextInput, Button, TouchableOpacity, FlatList, ToastAndroid, Alert
} from 'react-native';

export function TodoList() {
    const [text, setText] = useState("");
    const [list, setList] = useState([]);

    function pushText() {
        const obj = { text, time: new Date().getTime() }
        setList([...list, obj])
        Alert.prompt(
            'Item Added',
            'Item has been added to the list',
            [
                { text: 'Add More', onPress: () => console.log('OK Pressed') },
                { text: 'Yes', onPress: () => console.log('Yes Pressed') },
            ]
        )

    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.header}>Todo List Display</Text>
                <TextInput
                    placeholder='Enter your name'
                    style={styles.input}
                    placeholderTextColor="green"
                    onChangeText={(inp) => { setText(inp) }}
                />

                <TouchableOpacity onPress={pushText} style={{
                    backgroundColor: "green", borderRadius: 40,
                    padding: 10, alignItems: "center", marginTop: 10
                }}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>Add To List</Text>
                </TouchableOpacity>

                {/* {
                    list.map((item) => <Text>{item.text}</Text>)
                } */}

                <FlatList
                    style={{ flex: 1, marginTop: 20 }}
                    data={list}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.renderView}>
                                <Text>{item.text}</Text>
                                <View style={styles.row}>
                                    <Text>{new Date(item.time).toDateString()}</Text>
                                    <TouchableOpacity style={styles.btn} >
                                        <Text style={{ color: "white" }}>Delete</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }}
                    key={(item) => item.date}
                />

            </View>
        </SafeAreaView>
    )
}
console.log(StatusBar.currentHeight);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: StatusBar.currentHeight,
        backgroundColor: "#ffffff",
    },
    header: {
        fontSize: 25,
        color: "green",
        textAlign: "center"
    },
    input: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        fontSize: 16,
        marginTop: 20
    },
    renderView: {
        borderColor: "green",
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 5
    },
    btn: {
        backgroundColor: "#ed2929",
        padding: 4,
        borderRadius: 50,
        paddingHorizontal: 13
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
});
