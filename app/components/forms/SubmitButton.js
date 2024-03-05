import { View, Text } from "react-native";
import React from "react";
import AppButton from "../AppButton";

import { useFormikContext } from "formik";

export default function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      style={{ borderRadius: 37, marginTop: 15 }}
      textStyle={{ textTransform: "uppercase" }}
      onPress={handleSubmit}
    >
      {title}
    </AppButton>
  );
}
