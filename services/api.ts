import { Product } from "../types/product";

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};

export const fetchCategories = async (): Promise<string[]> => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const data = await res.json();
  return ["All", ...data];
};
