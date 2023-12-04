import { Text, View, StyleSheet, Platform, StatusBar, SafeAreaView } from "react-native";

export function Position() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.parent}>
                <View style={styles.child}></View>
                <View style={styles.child}></View>
                <View style={styles.child}></View>
                <View style={styles.child}></View>
                <View style={styles.child}></View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "gray",
        marginTop: Platform.OS == "android" ? StatusBar.currentHeight : null,
    },
    parent: {
        backgroundColor: "#65656584",
        width: "100%",
        height: 400,
        padding: 10,
        flexWrap: "wrap"
    },
    child: {
        backgroundColor: "orange",
        width: 100,
        height: 100,
        margin: 3,
        // position: "absolute",
        // bottom: 0,
        // right: 0
    }
})