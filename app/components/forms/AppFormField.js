import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";
import colors from "../../config/colors";

export default function AppFormField({ name, ...restProps }) {
  const { setFieldTouched, setFieldValue, errors, touched } =
    useFormikContext();
  return (
    <>
      <View style={[styles.container, restProps.style]}>
        <TextInput
          onChangeText={(text) => setFieldValue(name, text)}
          onBlur={() => setFieldTouched(name)}
          {...restProps}
          placeholderTextColor={colors.medium}
          style={[styles.input]}
        />
      </View>
      <ErrorMessage name={name} errors={errors} touched={touched} />
    </>
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
  input: {
    width: "100%",
    height: "70%",
    fontSize: 20,
    color: colors.dark,
    paddingHorizontal: 20,
  },
});
