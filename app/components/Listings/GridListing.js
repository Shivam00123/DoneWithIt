import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../AppText";
import colors from "../../config/colors";

export default function GridListing({ item, onSelect }) {
  return (
    <TouchableHighlight
      underlayColor={colors.grey}
      style={styles.container}
      onPress={() => onSelect(item)}
    >
      <View style={{ alignItems: "center" }}>
        <View
          style={[
            styles.iconView,
            { backgroundColor: colors[item.iconColor || "primary"] },
          ]}
        >
          <MaterialCommunityIcons
            name={item.icon}
            size={30}
            color={colors.white}
          />
        </View>
        <AppText
          style={{
            color: colors.medium,
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {item.title}
        </AppText>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "33%",
    height: 120,
    paddingHorizontal: 10,
    paddingVertical: 20,
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },
  iconView: {
    width: 75,
    height: 75,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 37.5,
  },
});
