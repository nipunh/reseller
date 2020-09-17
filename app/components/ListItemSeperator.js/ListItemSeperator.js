import React from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../colors'

export default function ListItemSeperator() {
    return (
        <View style={styles.seperator}>
        </View>
    )
}

const styles = StyleSheet.create({
    seperator :{
        width : '100%',
        height : 1,
        backgroundColor : colors.light
    }
})