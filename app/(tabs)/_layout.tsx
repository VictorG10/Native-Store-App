import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router/tabs";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: "Products",
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons
              name={focused ? "cart" : "cart-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
