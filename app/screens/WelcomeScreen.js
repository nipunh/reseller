import React from 'react'
import { StyleSheet, Text, View, ImageBackground,Image } from 'react-native'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'

export default function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground style={styles.background} 
            source={require('../assets/home.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo}  source={require('../assets/logo-red.png')} />
                <AppText style={{color : "white"}}>Reseller</AppText>
                <AppText style={{color : "white"}}>We buy what you don't need</AppText>
            </View> 
            <View style={styles.buttonContainer}>
                <AppButton title="Login" onPress={()=> navigation.navigate("Login")} />
                <AppButton title="Register" onPress={()=> navigation.navigate("Register")} />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    buttonContainer : {
        padding: 5,
        width : "100%",
        marginBottom : 50
    },
    background : {
        flex:1,
        justifyContent : "flex-end",
        alignItems : "center"
    },
    logo :{
        height : 100,
        width: 100, 
        margin : 5
        
    },
    logoContainer : {
        position : "absolute",
        top : 80,
        alignItems : "center", 
    },
})
