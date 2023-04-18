import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import AppText from './AppText'
import colors from './colors'


function Card({title, subTitle, image}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card : {
        borderRadius : 15,
        backgroundColor : colors.white,
        marginBottom : 20,
        overflow : 'hidden'
    },

    detailsContainer : {
        padding : 20
    },

    image : {
        width : "100%",
        height : 200
    },

    subTitle : {
        color : colors.secondary,
        fontWeight : "bold"    
    },

    title : {
        marginBottom : 7,
        color : colors.black
    }

})

export default Card;