import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import catchAsync from "../utils/catchAsync";

export default function useLocation() {
  const [lastLocation, setLastLocation] = useState(null);

  const getUsersLastLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLastLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsersLastLocation();
  }, []);

  return {
    lastLocation,
  };
}
