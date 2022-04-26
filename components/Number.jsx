import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export default Number = ({ id, number, isSelected, onSelected }) => {
    const handlePress = () => {
        console.info(number);
        onSelected(id);
    };

    return(
    <TouchableOpacity onPress={handlePress}>
        <Text style={[styles.random, isSelected && styles.selected]}>{number}</Text>
    </TouchableOpacity>
    )
};

const styles = StyleSheet.create({

    random: {
        backgroundColor: 'green',
        color: 'white',
        width: 100,
        marginHorizontal: 15,
        marginVertical: 25,
        fontSize: 35,
        textAlign: 'center',
        minHeight: 45,
    },

    selected: {
        opacity: 0.3,
    },
});