import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name = "close" size={30} color="white" />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name = "trash-can-outline" size={30} color="white" />
            </View>

            <Image 
                resizeMode="contain" 
                style={styles.image} 
                source={require('../assets/chair.jpg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : "#000",
        flex : 1
    },

    closeIcon : {
        position : "absolute",
        top : 40,
        left : 30
    },

    deleteIcon : {
        position : "absolute",
        top : 40,
        right : 30
    },

    image : {
        height : "100%",
        width : "100%"
    }
})
