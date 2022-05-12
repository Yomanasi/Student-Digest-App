
import React from "react";
import { Text, View, Button, Alert, TouchableOpacity, StyleSheet, useColorScheme } from "react-native";


export const MyButton = () => {
    return(
        <TouchableOpacity>
            <Text>ABOUT</Text>
        </TouchableOpacity>
    );
}

export const MyButton2 = () => {
    return (
        <TouchableOpacity
            style={styles.text}
            onPress={() => {
                alert('You tapped the button!');
            }}
        >
            <Text>Sign Out</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    text: {
        padding: 16,
        backgroundColor: "#fff"
    },
})

