import { View, StyleSheet } from "react-native";
import React from "react";
import Logo from "./Logo";
import Screen from "./Screen";
import * as Yup from "yup";
import AppFormField from "./forms/AppFormField";
import SubmitButton from "./forms/SubmitButton";
import AppForm from "./forms/AppForm";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function Login() {
  return (
    <Screen>
      <View style={styles.container}>
        <Logo />
        <View style={styles.wrapper}>
          <AppForm
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}
          >
            <AppFormField name="email" icon="email" placeholder="Email" />
            <AppFormField
              name="password"
              icon="lock"
              placeholder="Password"
              secureTextEntry
            />

            <SubmitButton title="Login" />
          </AppForm>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    marginTop: 50,
    alignItems: "center",
  },
});
