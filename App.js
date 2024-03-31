import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import mlindex from "./data/mlindex.json";
// import mlindex from "./data/mlindex_mini.json";
import SongScreen from "./SongScreen";
import Navbar from "./Navbar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    return (
        <>
            <SafeAreaProvider>
                <SafeAreaView style={[styles.safe_container]}>
                    <View style={styles.container}>
                        <Navbar />
                        <FlatList
                            data={mlindex.map((item) => item.Songs).flat().sort((a, b) => a.SongNo - b.SongNo)}
                            renderItem={SongScreen}
                            keyExtractor={(item, index) => item.SongNo}
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator = {false}
                        />
                        <StatusBar style="auto" />
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
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
