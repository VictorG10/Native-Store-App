import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const [featured, setFeatured] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchFeatured = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://fakestoreapi.com/products?limit=4");
      const data = await res.json();
      setFeatured(data);
    } catch (err: any) {
      console.error("Error fetching featured products:", err);
      setError("Failed to load featured products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeatured();
  }, []);

  return (
    <View style={styles.container}>
      <Header />

      <Text style={styles.title}>Welcome to Fake Store</Text>
      <Text style={styles.subtitle}>Your one-stop shop for mock products.</Text>

      <Text style={styles.sectionTitle}>Featured Products</Text>

      {error && (
        <View style={styles.errorBox}>
          <Text style={styles.errorText}>{error}</Text>
          <Button title="Retry" onPress={fetchFeatured} />
        </View>
      )}

      {loading && !error ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={featured}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable onPress={() => router.push(`/shop/${item.id}`)}>
              <ProductCard product={item} />
            </Pressable>
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  errorBox: {
    padding: 12,
    marginBottom: 12,
    backgroundColor: "#ffe5e5",
    borderColor: "#cc0000",
    borderWidth: 1,
    borderRadius: 6,
  },
  errorText: {
    color: "#cc0000",
    fontWeight: "bold",
    marginBottom: 6,
    textAlign: "center",
  },
});
