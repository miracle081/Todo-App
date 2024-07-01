import { Dimensions, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export function Position() {
    console.log(Dimensions.get("screen").height);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text>Position</Text>
                <View style={styles.parent}>
                    <View style={styles.box}></View>
                    <View style={[styles.box, { backgroundColor: "red", display: "flex", position: "absolute", top: -10 }]}></View>
                    <View style={styles.box}></View>
                </View>
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
    parent: {
        // flexDirection: 'row',
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: "#00000007",
        // height: "100%",
        flex: 1,
        position: "relative"
    },
    box: {
        width: 70,
        height: 70,
        backgroundColor: "#71c06b",
        margin: 3,
        // flex: 1
    }
})