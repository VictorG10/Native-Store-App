import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Product } from "../types/product";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <View style={styles.card}>
    <Image source={{ uri: product.image }} style={styles.image} />
    <Text style={styles.title}>{product.title}</Text>
    <Text>{product.category}</Text>
    <Text>${product.price}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    elevation: 2,
  },
  image: { width: 100, height: 100, resizeMode: "contain" },
  title: { fontWeight: "bold", fontSize: 16 },
});

export default ProductCard;
