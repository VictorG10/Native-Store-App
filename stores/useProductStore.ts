import { fetchCategories, fetchProducts } from "@/services/api";
import { Product } from "@/types/product";
import { create } from "zustand";

interface ProductStore {
  products: Product[];
  categories: string[];
  selectedCategory: string;
  sortOption: string;
  maxPrice: number;
  searchQuery: string;
  page: number;
  loading: boolean;
  setSelectedCategory: (category: string) => void;
  setSortOption: (option: string) => void;
  setMaxPrice: (price: number) => void;
  setSearchQuery: (query: string) => void;
  setPage: (page: number) => void;
  loadData: () => Promise<void>;
  error: string | null;
  setError: (message: string | null) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  categories: ["All"],
  selectedCategory: "All",
  sortOption: "default",
  maxPrice: 1000,
  searchQuery: "",
  page: 1,
  loading: false,

  setSelectedCategory: (selectedCategory) => set({ selectedCategory, page: 1 }),
  setSortOption: (sortOption) => set({ sortOption, page: 1 }),
  setMaxPrice: (maxPrice) => set({ maxPrice, page: 1 }),
  setSearchQuery: (searchQuery) => set({ searchQuery, page: 1 }),
  setPage: (page) => set({ page }),

  loadData: async () => {
    set({ loading: true, error: null });
    try {
      const [products, cats] = await Promise.all([
        fetchProducts(),
        fetchCategories(),
      ]);
      set({ products, categories: ["All", ...cats] });
    } catch (err: any) {
      set({ error: err?.message || "Failed to load data" });
    } finally {
      set({ loading: false });
    }
  },

  error: null,
  setError: (error) => set({ error }),
}));
