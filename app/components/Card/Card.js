import React from 'react'
import { View, Image } from 'react-native'
import styles from './styles'
import AppText from '../AppText/AppText'

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

export default Card;