import React from 'react'
import {  SafeAreaView, StyleSheet, View } from 'react-native'
import Constsants from 'expo-constants'


export default function Screen({children, style}) {
    return (
        <SafeAreaView style={[styles.screen, style,]}>
            <View style = {[styles.view ,style]}>
                {children}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        paddingTop : Constsants.statusBarHeight
    },

    view : {
        flex : 1
    }
})