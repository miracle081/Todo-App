import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { TextInput, Avatar, Button, Card, Text as P } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export function TripPlanner() {
    return (
        <SafeAreaView style={{ backgroundColor: '#f3f1f1', flex: 1, marginTop: StatusBar.currentHeight }}>
            <View style={styles.container}>
                <View style={styles.topBar}>
                    <Image source={require("../assets/Miracle.jpeg")} style={styles.img} />
                    <Text style={styles.header}>Trip Planner</Text>
                    <View style={styles.search}>
                        <FontAwesomeIcon icon={faFacebook} color='#2968f0' size={30} />
                    </View>
                </View>
                <View style={styles.bottomBar}>
                    <Button icon="delete" mode="contained" loading={false} onPress={() => console.log('Pressed')}>
                        Press me
                    </Button>
                    <TextInput
                        label="Email"
                    // value={text}
                    // onChangeText={}
                    />
                    <Card>
                        <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                        <Card.Content>
                            <P variant="titleLarge">Card title</P>
                            <P variant="bodyMedium">Card content</P>
                        </Card.Content>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                        <Card.Actions>
                            <Button>Cancel</Button>
                            <Button>Ok</Button>
                        </Card.Actions>
                    </Card>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,

    },
    topBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    header: {
        fontSize: 25,
        fontWeight: "bold"
    },
    search: {
        backgroundColor: "white",
        borderRadius: 50,
        padding: 10,
        paddingHorizontal: 14
    },
})