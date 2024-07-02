import { Dimensions, Image, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faHome } from '@fortawesome/free-solid-svg-icons';
// import { faUser, } from '@fortawesome/free-regular-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faHomeAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { ActivityIndicator, Button } from 'react-native-paper';

export function Position() {
    const [visibility, setVisibility] = useState(true)
    // console.log(Dimensions.get("screen").height);

    setTimeout(() => {
        setVisibility(false)
    }, 5000);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={{ uri: visibility ? null : "https://images.pexels.com/photos/25853709/pexels-photo-25853709/free-photo-of-an-aerial-view-of-two-people-laying-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }} style={{ height: "100%", width: "100%" }}>
                <View style={styles.container}>
                    <Text>Position</Text>
                    <View style={styles.parent}>
                        <View style={styles.box}></View>
                        <View style={[styles.box, { backgroundColor: "red", }]}></View>
                        <View style={styles.box}></View>
                    </View>
                    <View style={{ flexDirection: "row", }}>
                        <FontAwesomeIcon icon={faHomeAlt} />
                        <FontAwesomeIcon icon={faUser} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faInstagramSquare} color='orange' size={40} />

                    </View>
                    {/* <Image source={require("../assets/img.jpg")} style={{ width: "100%", height: 500 }} /> */}
                    <ActivityIndicator animating={visibility} color={"#a51a01"} size={100} />
                    {/* <Button mode='contained' onPress={() => setVisibility(visibility ? false : true)} >Activity</Button> */}
                    <Button mode='contained' onPress={() => setVisibility(!visibility)} >Activity</Button>
                </View>
            </ImageBackground>
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
        flexDirection: 'row',
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: "#00000007",
        // height: "100%",
        // flex: 1,
        position: "relative",
        elevation:10
    },
    box: {
        width: 70,
        height: 70,
        backgroundColor: "#71c06b",
        margin: 3,
        // flex: 1
    }
})