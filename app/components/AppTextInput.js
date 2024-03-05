import { View, StyleSheet, TextInput } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function AppTextInput({
  placeholder,
  onChange,
  onBlur,
  ...props
}) {
  return (
    <View style={[styles.container, props.style]}>
      {props.icon && (
        <View style={styles.icon}>
          <MaterialCommunityIcons name={props.icon} size={30} />
        </View>
      )}
      <TextInput
        onChangeText={(text) => onChange(text)}
        onBlur={() => onBlur()}
        placeholder={placeholder}
        placeholderTextColor={colors.medium}
        style={[styles.input, { fontWeight: props.style.fontWeight || "" }]}
        keyboardType={props.keyboardType}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 60,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    backgroundColor: colors.darkgrey,
    padding: 10,
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: "70%",
    fontSize: 20,
    color: colors.dark,
    paddingHorizontal: 20,
  },
});
