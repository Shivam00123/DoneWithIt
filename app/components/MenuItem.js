import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import React from "react";

import colors from "../config/colors";
import AppText from "./AppText";

export default function MenuItem({ title, style, children }) {
  return (
    <TouchableHighlight underlayColor={colors.grey} onPress={() => {}}>
      <View style={styles.container}>
        <View style={[styles.icon, style]}>{children}</View>
        <AppText style={styles.text}>{title}</AppText>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  icon: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: colors.primary,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.black,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});
