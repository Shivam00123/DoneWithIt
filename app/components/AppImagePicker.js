import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AddImagePicker from "./Listings/AddImagePicker";
import colors from "../config/colors";
import useLibraryImages from "../../hooks/useLibraryImages";

export default function AppImagePicker() {
  const { selectedImagesUri, setSelectedImagesUri, pickImagesFromLibrary } =
    useLibraryImages();

  return (
    <>
      <TouchableWithoutFeedback onPress={() => pickImagesFromLibrary("images")}>
        <View style={[styles.imagePickerIcon]}>
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
        }}
      >
        <FlatList
          data={selectedImagesUri}
          horizontal
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <AddImagePicker
              selectedImagesUri={selectedImagesUri}
              setSelectedImagesUri={setSelectedImagesUri}
              style={styles.imagePickerIcon}
              item={item}
            />
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imagePickerIcon: {
    width: 100,
    height: "100%",
    backgroundColor: colors.darkgrey,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginHorizontal: 10,
  },
});
