import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import colors from "../../config/colors";
import AppText from "../AppText";

export default function Card({ name, price, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.wrapper}>
        <AppText style={styles.text}>{name}</AppText>
        <AppText style={styles.price}>${price}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    margin: 15,
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  wrapper: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 2,
  },
  text: {
    color: colors.black,
    fontWeight: "bold",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
