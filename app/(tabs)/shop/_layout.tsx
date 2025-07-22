import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";

const ShopLayout = () => {
  return (
    <>
      <StatusBar />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="[id]" options={{ title: "Product Details" }} />
      </Stack>
    </>
  );
};

export default ShopLayout;
