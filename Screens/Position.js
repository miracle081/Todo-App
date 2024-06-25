import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export function Position() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text>Position</Text>
                <View style={styles.parent}>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                    <View style={[styles.box, { backgroundColor: "orange", position: "absolute", bottom: 0, zIndex: -4, left: 40 }]}></View>
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
        flex: 1,
        backgroundColor: "#71c06b50",
        // flexDirection: "row",
        // flexWrap: "wrap"
        // justifyContent: "center",
        // alignItems: "center"
        display: "flex"

    },
    box: {
        width: 70,
        height: 70,
        backgroundColor: "#71c06b",
        margin: 3
    }
})