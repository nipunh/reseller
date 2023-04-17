import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import defaultStyles from '../config/defaultStyles';
import AppText from './AppText/AppText';

export default function AppPicker({icon, placeholder,  ...otherProps}) {
  return (
    <View style={styles.container}>
        {icon && <MaterialCommunityIcons style={styles.icon} name = {icon} size={20} color={defaultStyles.colors.medium} />}
        <AppText style={styles.text}> {placeholder} </AppText>
        <MaterialCommunityIcons style={styles.icon} name = "chevron-down" size={20} color={defaultStyles.colors.medium} />
        
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : defaultStyles.colors.light,
        borderRadius : 25,
        flexDirection : "row",
        width : '100%',
        marginVertical : 10
    },
    icon : {
        margin : 20
    },

    text : {
        flex : 1,
    }
});
