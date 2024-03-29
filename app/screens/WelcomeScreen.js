import React, { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground,Image } from 'react-native'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'
import routes from '../navigation/routes';

export default function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground style={styles.background} 
            source={require('../assets/home.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo}  source={require('../assets/logo-red.png')} />
                <AppText style={{color : "white"}}>Reseller</AppText>
                <AppText style={{color : "white"}}>Exhange books with nearby readers</AppText>
            </View> 
            <View style={styles.buttonContainer}>
<<<<<<< HEAD
                <AppButton title="Login" onPress={()=> navigation.navigate(routes.LOGIN)} />
                <AppButton title="Register" onPress={()=> navigation.navigate(routes.REGISTER)} />
=======
                <AppButton title="Login" onPress={()=> navigation.navigate("Login")} />
                <AppButton title="Register" onPress={()=> navigation.navigate("Register")} />

>>>>>>> 64049861ed8eaf723007605eb8f152a59a0f58cd
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
