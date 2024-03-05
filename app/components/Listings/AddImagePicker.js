import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  Alert,
} from "react-native";
import React from "react";
import { useFormikContext } from "formik";

export default function AddImagePicker({
  style,
  item,
  selectedImagesUri,
  setSelectedImagesUri,
}) {
  const { setFieldValue } = useFormikContext();

  const removeSelectedImage = (image) => {
    const list = selectedImagesUri.filter((item) => item !== image);
    setFieldValue("images", list);
    setSelectedImagesUri(list);
  };

  const alertToRemove = (image) => {
    Alert.alert("Remove image", "Are you sure?", [
      { text: "Yes", onPress: () => removeSelectedImage(image) },
      { text: "No" },
    ]);
  };

  return (
    <TouchableWithoutFeedback onPress={() => alertToRemove(item)}>
      <View style={style}>
        <Image source={{ uri: item }} style={{ width: 120, height: 120 }} />
      </View>
    </TouchableWithoutFeedback>
  );
}
