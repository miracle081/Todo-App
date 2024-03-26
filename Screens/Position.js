import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Text, View, StyleSheet, Platform, StatusBar, SafeAreaView, ScrollView, Modal, Pressable, TouchableOpacity, FlatList } from "react-native";
import { useState, useEffect } from "react";

export function Position() {
    const [years, setYears] = useState([]);
    const [selectYear, setSelectYear] = useState(new Date().getFullYear());
    const [selectMonth, setSelectMonth] = useState(new Date().getMonth());

    const [modalVisibility, setModalVisibility] = useState(false);
    const closeModal = () => setModalVisibility(!modalVisibility);

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();

        const yearsArray = [];
        for (let year = 2020; year <= currentYear; year++) {
            yearsArray.push(year);
        }
        setYears(yearsArray);


        if (selectYear === currentYear) {
            setSelectMonth(currentMonth);
        } else {
            setSelectMonth(undefined);
        }
    }, [selectYear]);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff", }}>
            <TouchableOpacity onPress={closeModal} style={styles.parent}>
                <View style={styles.child}></View>
            </TouchableOpacity>
            <Modal
                visible={modalVisibility}
                animationType="slide"
                transparent={true}
            >
                <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.8)" }}>
                    <Pressable style={{ flex: 1 }} onPress={closeModal} >
                    </Pressable>
                    <View style={{ height: 600, backgroundColor: "white", borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>
                        <View style={{ alignItems: 'flex-end', margin: 10 }}>
                            <TouchableOpacity onPress={closeModal}>
                                <FontAwesomeIcon
                                    icon={faXmark}
                                    size={24}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center', marginBottom: 10 }}>
                            <Text style={{}}>Are you sure you want to log out</Text>
                        </View>
                        <View style={{ flexDirection: "row", flex: 1, padding: 20 }}>
                            <FlatList style={{ flex: 1 }}
                                data={months.slice(0, selectYear === new Date().getFullYear() ? new Date().getMonth() + 1 : months.length)}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity onPress={() => setSelectMonth(months.indexOf(item))}
                                            style={{ borderColor: "gray", borderWidth: 1, padding: 5, margin: 5, borderRadius: 5, backgroundColor: selectMonth === months.indexOf(item) ? "#284fff" : "transparent" }}>
                                            <Text style={{ color: selectMonth === months.indexOf(item) ? "white" : "gray", fontWeight: "bold", fontSize: 16, }}>{item}</Text>
                                        </TouchableOpacity>
                                    )
                                }}
                                keyExtractor={(item) => item}
                            />
                            <FlatList style={{ flex: 1 }}
                                data={years}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity onPress={() => setSelectYear(item)}
                                            style={{ borderColor: "gray", borderWidth: 1, padding: 5, margin: 5, borderRadius: 5, backgroundColor: selectYear === item ? "#284fff" : "transparent" }}>
                                            <Text style={{ color: selectYear === item ? "white" : "gray", fontWeight: "bold", fontSize: 16, }}>{item}</Text>
                                        </TouchableOpacity>
                                    )
                                }}
                                keyExtractor={(item) => item.toString()}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        padding: 20,
        flexWrap: "wrap"
    },
    child: {
        backgroundColor: "#9eb1ff",
        width: "100%",
        height: 50,
        margin: 1,
        borderRadius: 230
    }
})
