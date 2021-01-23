import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import AppText from "../AppText/AppText";
import colors from "../colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

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
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
