import React from "react";
import ListItem from "../components/ListItem/ListItem";
import Screen from "../components/Screen";
import { StyleSheet, View, FlatList } from "react-native";
import colors from "../components/colors";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/ListItemSeperator/ListItemSeperator";



export default function AccountScreen() {

    const menuItems = [
        {
        title : 'My Listings',
            icon : {
                name : 'format-list-bulleted',
                backgroundColor : colors.primary 
            }
        },
        {
            title : 'My Messages',
                icon : {
                    name : 'email',
                    backgroundColor : colors.secondary 
            }
        },
    ]

  return (
    <Screen style={styles.Screen}>
      <View style={styles.container}>
        <ListItem
          title="Nipun Hedaoo"
          subTitle="nipunhedaoo@gmail.com"
          image={require("../assets/chair.jpg")}
        />
      </View>
      <View style={styles.container}>
          <FlatList 
            ItemSeparatorComponent = {ListItemSeperator}
            data = {menuItems}
            keyExtractor = {menuItem => menuItem.title}
            renderItem = {({item})=>(
                <ListItem 
                    title = {item.title}
                    ImageComponent = {
                        <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
                    }
                />
            )}
          />
      </View>
      <View style={styles.container}>
                <ListItem 
                    title = 'Log Out'
                    ImageComponent = {
                        <Icon 
                            name = 'logout'
                            backgroundColor = '#ffe66d'
                        />
                    }
                />
</View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  Screen : {
      backgroundColor : colors.light
  }
});
