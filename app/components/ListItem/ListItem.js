import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import AppText from '../AppText/AppText'

export default function ListItem({title, subTitle, image}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    )
}
