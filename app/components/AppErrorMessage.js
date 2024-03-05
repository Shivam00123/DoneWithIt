import { View, Text } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import colors from "../config/colors";

export default function AppErrorMessage({ name }) {
  const { errors, touched } = useFormikContext();
  if (!errors[name] || !touched[name]) return null;
  return (
    <View style={{ width: "100%", marginLeft: 20 }}>
      <Text
        style={{
          color: colors.danger,
          fontSize: 16,
          fontWeight: "bold",
          marginLeft: 20,
          marginTop: 10,
        }}
      >
        {errors[name] ? errors[name] : ""}
      </Text>
    </View>
  );
}
