import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  SafeAreaViewBase,
} from "react-native";

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {


  return (


    <NavigationContainer theme={navigationTheme}>
      {/* <AuthNavigator /> */}
      <AppNavigator />
    </NavigationContainer>

    // <WelcomeScreen />
    // <ViewImageScreen />
    // <ListingDetailsScreens />
    // <MessageScreen />
    // <AccountScreen />
    // <ListScreen />
    // <Screen>
    //   <AppPicker items={categories} placeholder="Category" icon="apps" selectedItem = {category}  onSelectItem = {item => setCategory(item)}  />
    //   <AppTextInput placeholder="Email" icon="email" />
    // </Screen>
    // <LoginScreen />
    // <ListingEditScreen />
    // <Screen>
    //   <ImageInput img={img} onChangeImage={img => setImg(img)} />
    // </Screen>
    // <Screen>
    //   <ImageInputList imageUris={imgs} onAddImage={handleAdd} onRemoveImage={handleRemove} />
    // </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
