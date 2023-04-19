import React from "react";
import { View, Text, Image, TouchableHighlight, StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "./colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Icon from "./Icon";


export default function ListItem({
  title,
  subTitle,
  image,
  ImageComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        onPress={() => {
          onPress;
        }}
        underlayColor={colors.light}
      >
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
          </View>
          <MaterialCommunityIcons name="chevron-right" size={25} color = {colors.medium} />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container : {
      flexDirection : "row",
      padding : 15,
      backgroundColor :  colors.white,
      alignItems : "center"      
  },
  detailsContainer : {
      flex : 1,
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