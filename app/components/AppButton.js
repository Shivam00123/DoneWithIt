import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";
import ButtonText from "./ButtonText";

function AppButton({ children, color = "primary", style, onPress, textStyle }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: colors[color] }, style]}
    >
      <View>
        <ButtonText textStyle={textStyle}>{children}</ButtonText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "90%",
    height: 60,
  },
});

export default AppButton;
