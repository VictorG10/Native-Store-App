import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (val: string) => void;
  maxPrice: number;
  setMaxPrice: (val: number) => void;
  sortOption: string;
  setSortOption: (val: string) => void;
}

const FilterBar: React.FC<Props> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  maxPrice,
  setMaxPrice,
  sortOption,
  setSortOption,
}) => {
  return (
    <View>
      <Text style={styles.label}>Category</Text>
      <Picker
        selectedValue={selectedCategory}
        onValueChange={setSelectedCategory}
        style={[styles.picker, { height: 50 }]}
      >
        {categories.map((cat) => (
          <Picker.Item key={cat} label={cat} value={cat} />
        ))}
      </Picker>

      <Text style={styles.label}>Max Price: ${maxPrice.toFixed(0)}</Text>
      <Slider
        minimumValue={0}
        maximumValue={1000}
        step={10}
        value={maxPrice}
        onValueChange={setMaxPrice}
      />

      <Text style={styles.label}>Sort By</Text>
      <Picker
        selectedValue={sortOption}
        onValueChange={setSortOption}
        style={styles.picker}
      >
        <Picker.Item label="Default" value="default" />
        <Picker.Item label="Price: Low to High" value="price-asc" />
        <Picker.Item label="Price: High to Low" value="price-desc" />
        <Picker.Item label="Name" value="name" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  label: { marginTop: 10, fontWeight: "bold" },
  picker: { backgroundColor: "#fff", marginVertical: 5 },
});

export default FilterBar;
