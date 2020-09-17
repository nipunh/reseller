import React from 'react'
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import ListItem from '../components/ListItem/ListItem'
import ListItemSeperator from '../components/ListItemSeperator.js/ListItemSeperator'


export default function MessageScreen() {

    const messages = [
        {
            id : 1,
            title : 'T1',
            description : 'D1',
            image : require('../assets/chair.jpg')
        },
        {
            id : 2,
            title : 'T2',
            description : 'D2',
            image : require('../assets/couch.jpg')
        },
    ]


    return (
        <View style={styles.container}>        
            <FlatList 
                data = {messages}
                keyExtractor = {message => message.id.toString()}
                renderItem = {({item}) => 
                <ListItem 
                    title = {item.title}
                    subTitle = {item.description}
                    image = {item.image}

                />
                }

                ItemSeparatorComponent = {ListItemSeperator}
            />
        </View>

    )
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingTop : 25
        
    }
})