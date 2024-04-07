import { View, Text, StyleSheet, Dimensions, Pressable, TouchableOpacity, TextInput, FlatList, Keyboard } from "react-native";
import React, { useContext } from 'react'
import { router } from "expo-router";
import { appContext } from "./appContext";
const { width, height } = Dimensions.get("window");

const ListItem = ({item}) => {
    let { contextValue, setContextValue } = useContext(appContext);

    let handleSubmit = () => {
        let numIndex = parseInt(parseInt(item.SongNo) - 1);
        if (contextValue.flatListRef && contextValue.flatListRef.current) {
            try {
                let itemOffset = numIndex * width; // ITEM_HEIGHT is the height of each item
                contextValue.flatListRef.current.scrollToIndex({ index: numIndex, animated: false });
            } catch (e) {
                console.log(e);
            }
        }
    };

    let handleItem =()=>{
        Keyboard.dismiss();
        console.log("clicked on ", item.SongNo )
        handleSubmit();
        router.back();
    }
    return (
    
    <TouchableOpacity onPress={() => handleItem()}>
      <Text style={styles.resultItem}>{item.Title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    resultItem: {
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderBottomWidth: 1,
        borderBottomColor: "black",
        fontSize: 16,
    },
});


export default ListItem