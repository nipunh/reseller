import React from 'react'
import { Text, StyleSheet} from 'react-native'
import defaultStyles from '../config/defaultStyles'

export default function AppText({children, style, ...otherProps}) {
    return (
        <Text style={[defaultStyles.text, style]} {...otherProps}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    text :{
        color : "#fc5c65",
        ...Platform.select({
            ios : {
                fontSize : 20,
                fontFamily : "Avenir"
            },
            android : {
                fontSize : 18,
                fontFamily : "Roboto"
            } 
        })
    }
})

 
