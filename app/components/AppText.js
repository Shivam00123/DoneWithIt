import React from "react";
import { Platform, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: 20,
    fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto",
  },
});

export default AppText;
