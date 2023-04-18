import React from 'react'
import { View , Image, StyleSheet} from 'react-native'
import AppText from '../components/AppText'
import colors from '../components/colors'
import ListItem from '../components/ListItem'

export default function ListingDetailsScreens() {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/couch.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Couch for sale</AppText>
                <AppText style={styles.price}>$200</AppText>
                <View style={styles.userContainer}>
                    <ListItem 
                        image = {require('../assets/chair.jpg')}
                        title = "Nipun Hedaoo"
                        subTitle = "3 Listings"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    detailsContainer : {
        padding : 20,
    },
    
    image : {
        width : "100%",
        height : 300
    },

    price : {
        color : colors.secondary,
        fontSize : 20,
        
    },

    title : {
        fontSize : 24,
        color : colors.black
    },

    userContainer : {
        marginVertical : 40
    }

})
