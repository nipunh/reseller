import React from 'react'
import { StyleSheet, Text, View, ImageBackground,Image } from 'react-native'
import AppText from '../components/AppText/AppText'
import AppButton from '../components/AppButton/AppButton'

export default function WelcomeScreen() {
    return (
        <ImageBackground style={styles.background} 
            source={require('../assets/home.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo}  source={require('../assets/logo-red.png')} />
                <AppText style={{color : "white"}}>Reseller</AppText>
                <AppText style={{color : "white"}}>Exhange books with nearby readers</AppText>
            </View> 
            <View style={styles.buttonContainer}>
                <AppButton title="Loginn" onPress={()=>console.log("Hello")} />
                <AppButton title="Registerr" onPress={()=>console.log("")} color="secondary" />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    buttonContainer : {
        padding: 20,
        width : "100%"
        
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
