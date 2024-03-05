import { View, Text } from "react-native";
import React from "react";
import AppText from "../AppText";
import colors from "../../config/colors";

export default function ErrorMessage({ errors, name, touched }) {
  if (!errors[name] || !touched[name]) return null;
  return (
    <AppText
      style={{
        color: colors.danger,
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 20,
      }}
    >
      {errors[name]}
    </AppText>
  );
}
