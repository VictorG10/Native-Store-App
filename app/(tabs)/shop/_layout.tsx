import { Stack } from "expo-router";
import React from "react";

const ShopLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[id]" options={{ title: "Product Details" }} />
    </Stack>
  );
};

export default ShopLayout;
