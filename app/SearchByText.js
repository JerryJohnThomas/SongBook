import { View, Text, StyleSheet, Dimensions, Pressable, TouchableOpacity, TextInput, FlatList } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
const { width, height } = Dimensions.get("window");
import { Ionicons, Octicons } from "@expo/vector-icons"; // Import Ionicons
import { Link } from "expo-router";
import { router } from "expo-router";
import mlindex from "../data/mlindex.json";
import ListItem from "./ListItem";
// import mlindex from "./data/mlindex_mini.json";

const SearchByText = () => {
    let [songName, setSongName] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const textInputRef = useRef(null);
    // useEffect(() => {
    //     // Focus on the TextInput when the screen mounts
    //     textInputRef.current.focus();
    //   }, []);

      
    // Function to filter data based on search query
    const searchByTitle = (query) => {
        const filteredResults = mlindex
            .map((item) => item.Songs)
            .flat()
            .filter((song) => song.Title.toLowerCase().includes(query.toLowerCase()) || song.ETitle.toLowerCase().includes(query.toLowerCase()));
        setSearchResults(filteredResults);
    };

    let handleQuery = (query) => {
        console.log("query is", query);
        searchByTitle(query);
        setSongName(query);
    };

    return (
        <>
            <View style={[styles.container, { width: width }]}>
                <Link href="/" asChild>
                    <Pressable>
                        <Ionicons style={styles.icon_style} name="arrow-back" size={24} color="white" />
                    </Pressable>
                </Link>

                {/* <TextInput keyboardType="text" style={styles.textsearch} value={songName} onChangeText={(e) => handleQuery(e)} /> */}
                <TextInput  ref={textInputRef} style={styles.textsearch} value={songName} onChangeText={(e) => handleQuery(e)} />

                <View style={styles.rightnav}>
                    <Link href="/" asChild>
                        <Pressable>
                            <Ionicons style={styles.icon_style} name="search" size={24} color="white" />
                        </Pressable>
                    </Link>
                </View>
            </View>

            <FlatList keyboardShouldPersistTaps='always' data={searchResults} renderItem={({ item }) => <ListItem item={item} />} keyExtractor={(item) => item.SongNo.toString()} />
        </>
    );
};

export default SearchByText;

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
        marginRight: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        // backgroundColor:"#F4FDD9",
    },
    textsearch: {
        borderBottomWidth: 1, // Add a bottom border
        borderBottomColor: "#38686A", // Set the color of the bottom border
        fontSize: 18,
        width: 0.6 * width,
        // marginTop:25,
        marginTop:5,
        // marginVertical: 20,
        color: "white",
        // backgroundColor: "red",
    },
    resultItem: {
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
});
