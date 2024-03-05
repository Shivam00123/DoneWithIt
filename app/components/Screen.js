import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Constants from "expo-constants";
import colors from "../config/colors";

function Screen({ children, style = { backgroundColor: colors.grey } }) {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;
