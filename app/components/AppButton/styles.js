import {StyleSheet} from 'react-native'
import colors from '../colors'

const styles = StyleSheet.create({
    button : {
        backgroundColor :  colors.primary,
        borderRadius : 25,
        justifyContent : 'center',
        alignItems : "center", 
        padding : 15,
        width : '100%',
        margin : 10
    },
    text  :{
        color : colors.white,
        fontSize : 18,
        textTransform : 'uppercase',
        fontWeight : "bold"
    }
})

export default styles;