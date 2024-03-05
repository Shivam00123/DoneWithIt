import { View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import MenuItem from "./MenuItem";

function HOCIcons({
  Component = MaterialCommunityIcons,
  name,
  title,
  bgColor = "primary",
  color = "white",
}) {
  return (
    <MenuItem style={{ backgroundColor: colors[bgColor] }} title={title}>
      <Component name={name} size={40 * 0.5} color={colors[color]} />
    </MenuItem>
  );
}

export default HOCIcons;
