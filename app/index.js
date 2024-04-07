import { StatusBar } from "expo-status-bar";
import { FlatList, SectionList, StyleSheet, Text, View, Dimensions } from "react-native";
import mlindex from "../data/mlindex.json";
// import mlindex from "./data/mlindex_mini.json";
import SongScreen from "./SongScreen";
import Navbar from "./Navbar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { appContext } from "./appContext";
import NumberModal from "./NumberModal";
import InfoModal from "./InfoModal";

import { FlashList } from "@shopify/flash-list";
const { width, height } = Dimensions.get("window");

export default function index() {
    const flatListRef = useRef(null);
    // let [contextValue, setContextValue] = useState({ isEng: false, text: "boom", isModalOpen: false, flatListRef: flatListRef, isInfoOpen: false });

    let {contextValue,setContextValue} = useContext(appContext);

    useEffect(() => {
        // Here you can update the contextValue to include the flatListRef
        setContextValue(prevState => ({
          ...prevState,
          flatListRef: flatListRef
        }));
    
        // Cleanup function to remove the ref when the component unmounts
        return () => {
          setContextValue(prevState => ({
            ...prevState,
            flatListRef: null
          }));
        };
      }, [setContextValue, flatListRef]);
    return (
        <>
            <View style={styles.container}>
                <Navbar />
                <View style={styles.flashcontainer}>
                    <FlashList
                        estimatedItemSize={100}
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
                </View>
                <StatusBar style="auto" />
                {contextValue.isModalOpen ? <NumberModal /> : null}
                {contextValue.isInfoOpen ? <InfoModal /> : null}
            </View>
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
    flashcontainer: {
        flex: 1 /* Ensure the container takes up available space */,
    },
});
