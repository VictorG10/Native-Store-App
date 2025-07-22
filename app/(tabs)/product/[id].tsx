import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import { Product } from "../../../types/product";

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("Invalid response");
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to load product:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  if (loading)
    return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;
  if (!product) return <Text style={{ padding: 20 }}>Product not found.</Text>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.category}>{product.category}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  category: { fontSize: 16, fontStyle: "italic", marginBottom: 5 },
  price: { fontSize: 20, color: "green", marginBottom: 10 },
  description: { fontSize: 16, color: "#333" },
});
