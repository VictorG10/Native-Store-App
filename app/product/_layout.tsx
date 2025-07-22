import { Stack } from "expo-router";

export default function ProductStackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{
          title: "Product Details",
          presentation: "card",
        }}
      />
    </Stack>
  );
}
