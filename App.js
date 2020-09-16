import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaViewBase } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {

  return (
      <WelcomeScreen /> 
      // <ViewImageScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
