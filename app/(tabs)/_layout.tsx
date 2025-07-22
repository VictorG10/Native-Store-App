import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router/tabs";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
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
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "cart" : "cart-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="[id].tsx"
        options={{
          href: null,
          tabBarStyle: { display: "none" },
        }}
      /> */}
    </Tabs>
  );
}
