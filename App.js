import { StatusBar } from "expo-status-bar";
import React from "react";
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
import Card from "./app/components/Card/Card";
import ListingDetailsScreens from "./app/screens/ListingDetailsScreens";
import MessageScreen from "./app/screens/MessageScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListScreen from "./app/screens/ListScreen";
import AppText from "./app/components/AppText/AppText";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  return (
    // <WelcomeScreen />
    // <ViewImageScreen />
    // <ListingDetailsScreens />
    // <MessageScreen />
    // <AccountScreen />
    // <ListScreen />
    <Screen>
      <AppPicker placeholder="Category" icon="apps"  />
      <AppTextInput placeholder="Email" icon="email" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
