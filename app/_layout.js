import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { appContext } from "./appContext";

const StackLayout = () => {
    let [contextValue, setContextValue] = useState({ isEng: false, text: "boom", isModalOpen: false, flatListRef: null, isInfoOpen: false });

    return (
        <appContext.Provider value={{ contextValue, setContextValue }}>
            <SafeAreaProvider>
                <SafeAreaView style={[styles.safe_container]}>
                    <Stack>
                        <Stack.Screen name="index" options={{ headerTitle: "Home", headerShown: false }} />

                        <Stack.Screen
                            name="InfoModal"
                            options={{
                                headerShown: false,
                                // presentation: "modal",
                            }}
                        />

                        <Stack.Screen
                            name="SearchByText"
                            options={{
                                headerShown: false,
                                // presentation: "modal",
                            }}
                        />
                    </Stack>
                </SafeAreaView>
            </SafeAreaProvider>
        </appContext.Provider>
    );
};
//
export default StackLayout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    safe_container: {
        flex: 1,
        backgroundColor: "#CAD2C5",
    },
    flashcontainer: {
        flex: 1 /* Ensure the container takes up available space */,
    },
});
