import React, { useState } from 'react'
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import ListItem from '../components/ListItem/ListItem'
import ListItemDeleteAction from '../components/ListItemDeleteAct/ListItemDeleteAction'
import ListItemSeperator from '../components/ListItemSeperator.js/ListItemSeperator'


export default function MessageScreen() {

    const [messages, setMessage] = useState([
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
    ]);

    const handleDelete = message => {
        //Delete message from messages
        //call the server

        setMessage(messages.filter(msg => msg.id !== message.id));

    }



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
                    onPress = {() => console.log("Message Selected", item)}
                    renderRightActions = {()=> <ListItemDeleteAction onPress={()=>{handleDelete(item)}} /> }
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