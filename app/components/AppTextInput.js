import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import defaultStyles from '../config/defaultStyles';

export default function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, {width : width}]}>
      {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={defaultStyles.colors.medium} />}
      <TextInput 
      placeholderTextColor={defaultStyles.colors.medium}
      style={defaultStyles.text} {...otherProps} />
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : defaultStyles.colors.light,
    borderRadius : 25,
    flexDirection : "row",
    width : '100%',
    marginVertical : 10,
    padding :  25
},
  icon: {
    marginRight: 20
  },
});
