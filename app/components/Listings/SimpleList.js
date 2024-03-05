import { View, StyleSheet, TouchableHighlight } from "react-native";
import React from "react";
import AppText from "../AppText";
import colors from "../../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function SimpleList({ item, onSelect }) {
  return (
    <TouchableHighlight
      underlayColor={colors.grey}
      onPress={() => onSelect(item)}
    >
      <View style={styles.container}>
        {item.icon && (
          <View
            style={[
              styles.iconView,
              { backgroundColor: colors[item.iconColor || "primary"] },
            ]}
          >
            <MaterialCommunityIcons
              name={item.icon}
              size={20}
              style={{ color: colors.white }}
            />
          </View>
        )}
        <AppText
          style={{
            color: colors.medium,
            textTransform: "capitalize",
            fontWeight: "bold",
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
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconView: {
    width: 40,
    height: 40,
    backgroundColor: colors.medium,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
