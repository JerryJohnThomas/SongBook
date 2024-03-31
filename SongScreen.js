import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import React from "react";

const SongScreen = ({ item }) => {
    const colors = ["#4464AD", "#A4B0F5", "#F58F29"];
    const { width, height } = Dimensions.get("window");
    let langIndex = 0;

    return (
        <View style={[styles.container, { height, width }]}>
            <View style={styles.number}>
                <Text style={styles.numberText}>{item.SongNo}</Text>
            </View>
            {/* <View style={styles.title}>
                <Text style={styles.titleText}>{item.Title}</Text>
            </View> */}
            <ScrollView style={styles.body} showsVerticalScrollIndicator= {false}>
                <Text style={styles.bodyText}>{item.Lyrics[langIndex]}</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        paddingHorizontal: 30,
    },
    number: {},
    title: {},
    body: {
        marginTop: 10,
    },
    bodyText: {
        fontSize: 18,
    },
    numberText:{
        fontSize: 22,
    },
    titleText:{
        fontSize: 22,
    }
});

export default SongScreen;
