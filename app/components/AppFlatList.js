import { View, Text } from "react-native";
import React from "react";

const HOC = ({ Component, ...props }) => {
  return <Component {...props} />;
};

export default function AppFlatList({ renderItem, data, Component, ...props }) {
  return (
    <FlatList
      data={data}
      {...props}
      keyExtractor={(item) => data.id || item}
      renderItem={({ item }) => <HOC Component={Component} {...item} />}
    />
  );
}
