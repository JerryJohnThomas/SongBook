import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import mlindex from "./data/mlindex.json";
// import mlindex from "./data/mlindex_mini.json";
import SongScreen from "./SongScreen";
import Navbar from "./Navbar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { appContext } from "./appContext";
import NumberModal from "./NumberModal";
import InfoModal from "./InfoModal";

export default function App() {
    const flatListRef = useRef(null);
    let [contextValue, setContextValue] = useState({ isEng: false, text: "boom", isModalOpen: false, flatListRef: flatListRef , isInfoOpen: false});

    return (
        <>
            <appContext.Provider value={{ contextValue, setContextValue }}>
                <SafeAreaProvider>
                    <SafeAreaView style={[styles.safe_container]}>
                        <View style={styles.container}>
                            <Navbar setContextValue={setContextValue} />
                            <FlatList
                                initialNumToRender={20}
                                ref={flatListRef}
                                data={mlindex
                                    .map((item) => item.Songs)
                                    .flat()
                                    .sort((a, b) => a.SongNo - b.SongNo)}
                                renderItem={({ item }) => <SongScreen item={item} />}
                                keyExtractor={(item, index) => item.SongNo}
                                horizontal
                                pagingEnabled
                                showsHorizontalScrollIndicator={false}
                                onScrollToIndexFailed={(error) => {
                                    flatListRef.current.scrollToOffset({ offset: error.averageItemLength * error.index, animated: false });
                                    setTimeout(() => {
                                        if (flatListRef !== null) {
                                            flatListRef.current.scrollToIndex({ index: error.index, animated: false });
                                        }
                                    }, 1);
                                }}
                            />
                            <StatusBar style="auto" />
                            {contextValue.isModalOpen ? <NumberModal /> : null}
                            {contextValue.isInfoOpen? <InfoModal /> : null}
                        </View>
                    </SafeAreaView>
                </SafeAreaProvider>
            </appContext.Provider>
        </>
    );
}

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
});
