import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 75, height: 75 }}
        source={require("../assets/logo-red.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
