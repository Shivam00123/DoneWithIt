import {
  View,
  StyleSheet,
  Modal,
  Button,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import Screen from "./Screen";
import { useFormikContext } from "formik";
import ErrorMessage from "./forms/ErrorMessage";

export default function AppPicker({
  icon,
  style,
  PickerLayout,
  data,
  numberOfColumns = "1",
  category,
  onSelect,
}) {
  const { setFieldValue, errors, touched } = useFormikContext();
  const [showModal, setShowModal] = useState(false);

  const categorySelected = (category) => {
    setFieldValue("category", category);
    onSelect(category);
    setShowModal(false);
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
          <View style={{ height: 60, alignSelf: "flex-start" }}>
            <View style={[styles.wrapper, style]}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 20 }}
              >
                {icon && <MaterialCommunityIcons name={icon} size={30} />}
                <AppText style={{ color: colors.medium, fontWeight: "bold" }}>
                  {category || "Category"}
                </AppText>
              </View>
              <MaterialCommunityIcons
                name="chevron-down"
                size={30}
                color={colors.medium}
              />
            </View>
            <ErrorMessage name="category" touched={touched} errors={errors} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <Modal visible={showModal} animationType="slide">
        <Screen>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerLayout item={item} onSelect={categorySelected} />
            )}
          />
          <Button title="Close" onPress={() => setShowModal(false)} />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 60,
    paddingHorizontal: 20,
  },
  wrapper: {
    width: "100%",
    height: "100%",
    borderRadius: 37,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: colors.darkgrey,
  },
});
