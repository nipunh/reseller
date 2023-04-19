import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../components/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'


function NewListingButton({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="plus-circle" color={colors.white} size={40} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 80,
        width: 80,
        borderRadius: 40,
        bottom: 20,
        borderColor: colors.white,
        borderWidth: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

});

export default NewListingButton