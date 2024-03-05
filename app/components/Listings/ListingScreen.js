import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import Card from "./Card";
import Screen from "../Screen";

const listItems = [
  {
    id: 1,
    productName: "Red Jacket for sale",
    productPrice: "600",
    productImage: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    productName: "Couch in great condition",
    productPrice: "1000",
    productImage: require("../assets/couch.jpg"),
  },
];

export default function ListingScreen() {
  return (
    <Screen>
      <View>
        <FlatList
          data={listItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              name={item.productName}
              price={item.productPrice}
              image={item.productImage}
            />
          )}
        />
      </View>
    </Screen>
  );
}
