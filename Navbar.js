import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { Ionicons, Octicons } from "@expo/vector-icons"; // Import Ionicons

const Navbar = () => {
    const { width, height } = Dimensions.get("window");
    return (
        <View style={[styles.container, { width: width }]}>
            <Text style={styles.text}>Songbook</Text>
            <View style={styles.rightnav}>
                <Ionicons style={styles.icon_style} name="language" size={24} color="white" />
                <Ionicons style={styles.icon_style} name="search" size={24} color="white" />
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
        color:"white",
    },
    icon_style:{
        marginHorizontal: 10,
    },
    rightnav:{
        marginRight:-20,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        // backgroundColor:"#F4FDD9",
    }
});

export default Navbar;
