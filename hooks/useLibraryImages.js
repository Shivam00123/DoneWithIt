import { useEffect, useState } from "react";
import * as imagePicker from "expo-image-picker";
import { useFormikContext } from "formik";

export default function useLibraryImages() {
  const [selectedImagesUri, setSelectedImagesUri] = useState([]);
  const { setFieldTouched, setFieldValue } = useFormikContext();

  const fileAndPhotosAccess = async () => {
    const { granted } = await imagePicker.requestMediaLibraryPermissionsAsync();
    if (granted === false) return;
  };

  useEffect(() => {
    fileAndPhotosAccess();
  }, []);

  const singleSelectionImage = (image) => {
    return [...selectedImagesUri, image[0].uri];
  };

  const multiSelectionImages = (images) => {
    const selectedImages = images?.map((image) => image.uri);
    return [...selectedImagesUri, ...selectedImages];
  };

  const pickImagesFromLibrary = async (context, selectionType = "multiple") => {
    const result = await imagePicker.launchImageLibraryAsync({
      mediaTypes: imagePicker.MediaTypeOptions.Images,
      quality: 0.5,
      allowsMultipleSelection: selectionType === "multiple",
    });
    let data;
    if (!result.canceled) {
      if (selectionType === "multiple") {
        data = multiSelectionImages(result.assets);
      } else {
        data = singleSelectionImage(result.assets);
      }
      setSelectedImagesUri(data);
      if (context) {
        setFieldTouched(context);
        setFieldValue(context, data);
      }
    }
  };

  return {
    selectedImagesUri,
    pickImagesFromLibrary,
    setSelectedImagesUri,
  };
}
