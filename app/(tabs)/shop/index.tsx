import FilterBar from "@/components/FilterBar";
import ProductCard from "@/components/ProductCard";
import { useProductStore } from "@/stores/useProductStore";
import { useRouter } from "expo-router";
import { useEffect, useMemo } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";

const ITEMS_PER_PAGE = 6;

export default function ProductListScreen() {
  const router = useRouter();
  const {
    products,
    categories,
    selectedCategory,
    setSelectedCategory,
    sortOption,
    setSortOption,
    maxPrice,
    setMaxPrice,
    searchQuery,
    setSearchQuery,
    page,
    setPage,
    loading,
    loadData,
  } = useProductStore();

  useEffect(() => {
    loadData();
  }, []);

  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (selectedCategory === "All" || p.category === selectedCategory) &&
          p.price <= maxPrice &&
          p.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [products, selectedCategory, maxPrice, searchQuery]
  );

  const sorted = useMemo(() => {
    const sortedCopy = [...filtered];
    if (sortOption === "price-asc")
      return sortedCopy.sort((a, b) => a.price - b.price);
    if (sortOption === "price-desc")
      return sortedCopy.sort((a, b) => b.price - a.price);
    if (sortOption === "name")
      return sortedCopy.sort((a, b) => a.title.localeCompare(b.title));
    return sortedCopy;
  }, [filtered, sortOption]);

  const paginated = sorted.slice(0, page * ITEMS_PER_PAGE);
  const hasMore = paginated.length < sorted.length;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
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
              <Pressable onPress={() => router.push(`/shop/${item.id}`)}>
                <ProductCard product={item} />
              </Pressable>
            )}
            showsVerticalScrollIndicator={false}
          />
          {hasMore && (
            <Button title="Load More" onPress={() => setPage(page + 1)} />
          )}
        </>
      )}
    </KeyboardAvoidingView>
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
    color: "black",
  },
});
