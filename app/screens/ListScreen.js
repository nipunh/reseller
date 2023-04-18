import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Card from '../components/Card';
import Screen from '../components/Screen'

const listings = [
    {
        id : 1,
        title : "Jacket for sale",
        price : 100,
        image : require('../assets/jacket.jpg') 
    },

    {
        id : 2,
        title : "Couch in great condition",
        price : 100,
        image : require('../assets/couch.jpg') 
    }
];

function ListScreen(props) {
  return (
    <Screen style={styles.screen}>
        <FlatList 
            data={listings}
            keyExtractor = {listing => listing.id.toString()}
            renderItem = {({item}) => 
                <Card 
                    title = {item.title}
                    subtitle = {"$" + item.price}
                    image = {item.image}
                />
            }
        />
    </Screen>
  )
  
}

const styles = StyleSheet.create({
    screen : {
        padding : 20,
        backgroundColor : Colors.light
    }
});

export default ListScreen;

