import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaViewBase } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import Card from './app/components/Card/Card';


export default function App() {

  return (
      <WelcomeScreen /> 
      // <ViewImageScreen />
      // <View
      //   style = {{
      //     backgroundColor : '#f8f4f4',
      //     padding : 20,
      //     paddingTop : 100 
      //   }}
      // >
      //   <Card
      //     title = "Couch"
      //     subTitle = "$100"
      //     image = {require("./app/assets/couch.jpg")}
      //   />
      // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
