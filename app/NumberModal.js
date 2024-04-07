import { FlatList, StyleSheet, Text, View, Dimensions, TextInput, Button, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import React, { useContext, useState } from "react";
import { appContext } from "./appContext";
import { Keyboard } from "react-native";
const { width, height } = Dimensions.get("window");

const NumberModal = () => {
    let { contextValue, setContextValue } = useContext(appContext);
    let [number, setNumber] = useState("");

    let handleSubmit = () => {
        let numIndex = parseInt(parseInt(number) - 1);
        if (contextValue.flatListRef && contextValue.flatListRef.current) {
            try {
                let itemOffset = numIndex * width; // ITEM_HEIGHT is the height of each item
                console.log("offset :", itemOffset);
                contextValue.flatListRef.current.scrollToIndex({ index: numIndex, animated: false });
                // contextValue.flatListRef.current.scrollToOffset({ offset: itemOffset, animated: false });
            } catch (e) {
                console.log(e);
                alert("Invalid Number ");
            }
        }
        modalDisappear();
        setNumber("");
    };
    let handleCancel = () => {
        Keyboard.dismiss();
        modalDisappear();
    };

    let modalDisappear = () => {
        setContextValue((prevValue) => ({ ...prevValue, isModalOpen: !prevValue.isModalOpen }));
    };

    return (
        <View style={[styles.backgroundcontainer, { width, height }]}>
            <KeyboardAvoidingView>
                <View style={styles.modal_container}>
                    <Text style={styles.prompt}>Enter Song Number</Text>
                    <TextInput keyboardType="numeric" style={styles.inpNumber} value={number} onChangeText={setNumber} />
                    <View>
                        <View style={styles.buttonrow}>
                            <TouchableOpacity onPress={handleSubmit}>
                                <Text style={styles.Button}>Submit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleCancel}>
                                <Text style={styles.Button}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundcontainer: {
        backgroundColor: "rgba(0, 0, 0,0.2)",
        position: "absolute",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    prompt: {
        fontSize: 17,
        marginBottom: 5,
    },
    modal_container: {
        width: width * 0.8,
        height: height * 0.2,
        backgroundColor: "white",
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 5,
        justifyContent: "center",
        marginBottom: 0.2*height,
    },
    buttonrow: {
        // flex:1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    inpNumber: {
        borderBottomWidth: 1, // Add a bottom border
        borderBottomColor: "black", // Set the color of the bottom border
        marginBottom: 20, // Optional: Add some space below the TextInput
        fontSize: 18,
    },
    Button: {
        backgroundColor: "#38686A", // Set button background color
        color: "white", // Set button text color
        paddingHorizontal: 10, // Set button padding
        paddingVertical: 7, // Set button padding
        borderRadius: 5, // Set button border radius
    },
});

export default NumberModal;
