import FilterBar from "@/components/FilterBar";
import ProductCard from "@/components/ProductCard";
import { fetchCategories, fetchProducts } from "@/services/api";
import { Product } from "@/types/product";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const ITEMS_PER_PAGE = 6;

export default function ProductListScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const [prod, cats] = await Promise.all([
        fetchProducts(),
        fetchCategories(),
      ]);
      setProducts(prod);
      setCategories(cats);
      setLoading(false);
    };
    load();
  }, []);

  const filtered = products.filter(
    (p) =>
      (selectedCategory === "All" || p.category === selectedCategory) &&
      p.price <= maxPrice &&
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortOption === "price-asc") return a.price - b.price;
    if (sortOption === "price-desc") return b.price - a.price;
    if (sortOption === "name") return a.title.localeCompare(b.title);
    return 0;
  });

  const paginated = sorted.slice(0, page * ITEMS_PER_PAGE);
  const hasMore = paginated.length < sorted.length;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🛍️ Product Listing</Text>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <TextInput
            placeholder="Search products..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={styles.searchInput}
          />
          <FilterBar
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
          <FlatList
            data={paginated}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Pressable
                onPress={() =>
                  router.push({
                    pathname: "/product/[id]",
                    params: { id: item.id.toString() },
                  })
                }
              >
                <ProductCard product={item} />
              </Pressable>
            )}
          />
          {hasMore && (
            <Button title="Load More" onPress={() => setPage((p) => p + 1)} />
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f5f5f5" },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 12 },
  searchInput: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
});
