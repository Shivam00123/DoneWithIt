import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";

import AppPicker from "../AppPicker";
import SimpleList from "./SimpleList";

import AppForm from "../forms/AppForm";
import SubmitButton from "../forms/SubmitButton";
import AppFormField from "../forms/AppFormField";
import AppImagePicker from "../AppImagePicker";
import AppErrorMessage from "../AppErrorMessage";
import GridListing from "./GridListing";
import useLocation from "../../../hooks/useLocation";

const data = [
  { id: 1, title: "Furniture" },
  { id: 2, title: "Kitchen" },
  { id: 3, title: "Playwood" },
  { id: 4, title: "Furniture" },
  { id: 5, title: "Kitchen" },
  { id: 6, title: "Playwood" },
  { id: 7, title: "Furniture" },
  { id: 8, title: "Kitchen" },
  { id: 9, title: "Playwood" },
];

const dataGrid = [
  { id: 1, title: "Furniture", icon: "floor-lamp", iconColor: "primary" },
  { id: 2, title: "Cars", icon: "car", iconColor: "orange" },
  { id: 3, title: "Cameras", icon: "camera", iconColor: "yellow" },
  { id: 4, title: "Games", icon: "cards", iconColor: "lightGreen" },
  { id: 5, title: "Clothing", icon: "shoe-heel", iconColor: "darkGreen" },
  { id: 6, title: "Sports", icon: "basketball", iconColor: "dodgerblue" },
  { id: 7, title: "Movies & Music", icon: "headphones", iconColor: "blue" },
  {
    id: 8,
    title: "Books",
    icon: "book-open-blank-variant",
    iconColor: "purple",
  },
  { id: 9, title: "Others", icon: "credit-card", iconColor: "slate" },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  price: Yup.number()
    .min(1, "Price must be greater than 0")
    .required("Price is required"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string()
    .min(5, "Description must be at least 5 characters")
    .required("Description is required"),
  images: Yup.array()
    .min(1, "Please select at least one image")
    .required("Please select at least one image"),
});

export default function AddListing() {
  const [category, setCategory] = useState(null);
  const { lastLocation } = useLocation();

  const handlePost = (values) => {
    console.log({ values, lastLocation });
  };

  const handleCategoryPick = (category) => {
    setCategory(category);
  };

  return (
    <AppForm
      initialValues={{
        title: "",
        price: "",
        category: "",
        description: "",
        images: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => handlePost(values)}
    >
      <View style={styles.container}>
        <View style={styles.imagePicker}>
          <AppImagePicker />
        </View>
        <AppErrorMessage name="images" />
        <View>
          <AppFormField
            name="title"
            placeholder="Title"
            style={{ fontWeight: "bold", marginTop: 20 }}
          />
        </View>
        <View style={styles.priceView}>
          <AppFormField
            name="price"
            placeholder="Price"
            keyboardType="numeric"
            style={{ width: "35%", fontWeight: "bold" }}
          />
        </View>
        <View style={{ width: "100%", marginBottom: 30 }}>
          <AppPicker
            style={{ width: "60%" }}
            PickerLayout={GridListing}
            numberOfColumns="3"
            data={dataGrid}
            category={category?.title || ""}
            onSelect={handleCategoryPick}
          />
        </View>
        <View>
          <AppFormField
            name="description"
            style={{ fontWeight: "bold" }}
            placeholder="Description"
          />
        </View>
        <SubmitButton title="Post" />
      </View>
    </AppForm>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 10,
  },
  priceView: {
    width: "100%",
    marginTop: -15,
    padding: 20,
    marginTop: 5,
  },
  imagePicker: {
    width: "100%",
    alignSelf: "flex-start",
    height: 100,
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 10,
    alignSelf: "flex-start",
    overflow: "hidden",
  },
});
