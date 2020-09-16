import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>

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
        backgroundColor : "#fc5c65", 
        width : 50,
        height : 50,
        position : "absolute",
        top : 40,
        left : 30
    },
    deleteIcon : {
        backgroundColor : "#4ecdc4", 
        width : 50,
        height : 50,
        position : "absolute",
        top : 40,
        right : 30
    },
    image : {
        height : "100%",
        width : "100%"
    }
})
