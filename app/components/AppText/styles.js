import { StyleSheet, Platform} from 'react-native'

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

export default styles;