import { View, StyleSheet, FlatList } from "react-native";
import React from "react";

import Screen from "./Screen";
import ListItem from "./Listings/ListItem";
import HOCIcons from "./HOCIcons";
import colors from "../config/colors";
import ListItemSeperator from "./Listings/ListItemSeperator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      bgColor: "secondary",
    },
  },
];

export default function Account() {
  return (
    <Screen style={{ backgroundColor: colors.grey }}>
      <View style={styles.container}>
        <ListItem
          title="Mosh Hamedani"
          description="programmingwithmosh@gmail.com"
          image={require("../assets/mosh.jpg")}
          onPress={() => {}}
          renderRight={() => {}}
        />
        <View style={{ marginVertical: 30 }}>
          <FlatList
            data={menuItems}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <HOCIcons
                name={item.icon.name}
                title={item.title}
                bgColor={item.icon.bgColor}
              />
            )}
            ItemSeparatorComponent={() => <ListItemSeperator />}
          />
        </View>
        <HOCIcons name="logout" title="Log out" bgColor="yellow" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
