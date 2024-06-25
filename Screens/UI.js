import { StyleSheet, Text, View, } from 'react-native';
import { Login } from './Screens/Login';


export default function UI() {
    return (
        <View style={styles.body}>
            <Text style={{ marginTop: 80, fontSize: 30, color: "green" }}>Welcome to React Native class</Text>
            <View ></View>
            <Login />
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#5a5959",
        padding: 20,
        margin: 10,
    },
    button: {
        backgroundColor: ""
    }
})