import React from "react";
import { Platform, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

function ButtonText({ children, textStyle }) {
  return <Text style={[styles.text, textStyle]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: 20,
    fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto",
    textTransform: "capitalize",
    fontWeight: "bold",
  },
});

export default ButtonText;
