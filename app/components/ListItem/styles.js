import { StyleSheet } from 'react-native'
import colors from '../colors';

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        padding : 15,
        backgroundColor :  colors.white
    },
    detailsContainer : {
        marginLeft : 10,
        justifyContent : 'center'
    },
    image : {
        width : 70,
        height : 70,
        borderRadius : 35,
    },

    subTitle : {
        color : colors.medium,
    },

    title : {
        fontWeight : "500",
        color : colors.black
    }
})

export default styles;