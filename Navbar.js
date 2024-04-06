import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons, Octicons } from "@expo/vector-icons"; // Import Ionicons

const Navbar = ({ setContextValue }) => {
    const { width, height } = Dimensions.get("window");

    let languageHandler = () => {
        // alert("language");
        setContextValue(prevValue => ({ ...prevValue, isEng: !prevValue.isEng }));
    };
    let searchHandler = () => {
        // setContextValue({ isEng: false, text: "GO" });
    };

    return (
        <View style={[styles.container, { width: width }]}>
            <Text style={styles.text}>Songbook</Text>
            <View style={styles.rightnav}>
                <TouchableOpacity onPress={() => languageHandler()}>
                    <Ionicons style={styles.icon_style} name="language" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => searchHandler()}>
                    <Ionicons style={styles.icon_style} name="search" size={24} color="white" />
                </TouchableOpacity>
                <Octicons style={styles.icon_style} name="number" size={24} color="white" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#CAD2C5",
        backgroundColor: "#98B9AB",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        height: 50,
    },
    text: {
        fontSize: 20,
        color: "white",
    },
    icon_style: {
        marginHorizontal: 10,
    },
    rightnav: {
        marginRight: -20,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        // backgroundColor:"#F4FDD9",
    },
});

export default Navbar;
