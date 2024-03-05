import { View, Text, FlatList, SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";
import ListItem from "./Listings/ListItem";
import Screen from "./Screen";
import ListItemSeperator from "./Listings/ListItemSeperator";
import colors from "../config/colors";
import ListDeleteItem from "./Listings/ListDeleteItem";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

export default function MessageScreen() {
  const [listItems, setListItems] = useState(messages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (item) => {
    const deleteItem = listItems.filter((el) => el.id !== item.id);
    setListItems(deleteItem);
  };

  return (
    <Screen>
      <FlatList
        data={listItems}
        keyExtractor={(message) => message.id}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            description={item.description}
            image={item.image}
            onPress={() => console.log(item)}
            renderRight={() => (
              <ListDeleteItem onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeperator />}
        refreshing={refreshing}
        onRefresh={() => {
          setListItems([
            {
              id: 3,
              title: "T3",
              description: "D3",
              image: require("../assets/mosh.jpg"),
            },
            {
              id: 4,
              title: "T4",
              description: "D4",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}
