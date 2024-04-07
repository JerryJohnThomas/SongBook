import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import React, { useContext } from "react";
import { appContext } from "./appContext";

const SongScreen = ({ item }) => {
    const colors = ["#4464AD", "#A4B0F5", "#F58F29"];
    const { width, height } = Dimensions.get("window");
    let langIndex = 0;
    let { contextValue, setContextValue } = useContext(appContext);

    return (
        <View style={[styles.container, { height, width }]}>
            <View style={styles.number}>
                <Text style={styles.numberText}>{item.SongNo}</Text>
            </View>
            <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
                <Text style={styles.bodyText}>{renderStanzas(item.Lyrics[contextValue.isEng == true ? 1 : 0])}</Text>
            </ScrollView>
        </View>
    );
};

const renderStanzas = (lyrics) => {
    // Split the lyrics string into individual stanzas using the newline character as delimiter
    const stanzas = lyrics.split("\n");

    return stanzas.map((stanza, index) => {
        if (stanza.trim().startsWith("T:i")) {
            // Apply italic styling to stanzas starting with "T:i"
            return (
                <Text key={index} style={styles.italic}>
                    {'\t'}{stanza.trim().substring(4)}{'\n'}{/* Exclude the "T:i" prefix */}
                </Text>
            );
        } 
        else if (stanza.trim().startsWith("W:")) {
            // Apply italic styling to stanzas starting with "T:i"
            return (
                <Text key={index} style={styles.italic}>
                    {stanza.trim().substring(2)}{'\n'}{/* Exclude the "T:i" prefix */}
                </Text>
            );
        }
        else {
            // Render regular stanzas
            return <Text key={index}>{stanza.trim()}{'\n'}</Text>;
        }
    });
};

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
    numberText: {
        fontSize: 22,
    },
    titleText: {
        fontSize: 22,
    },
    italic: {
        fontStyle: 'italic',
      },
});

export default SongScreen;
