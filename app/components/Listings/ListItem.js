import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import React from "react";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";

import AppText from "../AppText";
import colors from "../../config/colors";

export default function ListItem({
  title,
  description,
  image,
  onPress,
  renderRight,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRight}>
        <TouchableHighlight underlayColor={colors.grey} onPress={onPress}>
          <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View style={styles.wrapper}>
              <AppText style={styles.name}>{title}</AppText>
              <AppText style={styles.listings}>{description}</AppText>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  wrapper: {
    paddingLeft: 10,
  },
  name: {
    color: colors.black,
    fontWeight: "500",
  },
  listings: {
    color: colors.black,
    fontWeight: "400",
    fontSize: 15,
    color: colors.medium,
    textTransform: "capitalize",
  },
});
