import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  SafeAreaViewBase,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import ListingDetailsScreens from "./app/screens/ListingDetailsScreens";
import MessageScreen from "./app/screens/MessageScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListScreen from "./app/screens/ListScreen";
import AppText from "./app/components/AppText";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/components/ListingEditScreen";

export default function App() {
  const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Cameras", value: 3 },

  ]

  const [category, setCategory] = useState(categories[0]);

  return (
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
    <ListingEditScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
