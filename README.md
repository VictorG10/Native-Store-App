🛒 Native Store App

A modern React Native e-commerce app built with Expo Router, Zustand, and FakeStoreAPI.

✨ Features

🧭 Navigation with Expo Router (Tabs + Dynamic Screens)

🛍 Product listing with filters, sort, pagination

🔍 Search functionality

🧰 Zustand global state for filters/products

🧱 Modular architecture (components, services, hooks, state)

📦 Product detail view with deep linking support

🗂 Folder Structure

app/
├── \_layout.tsx # Root stack layout
├── (tabs)/ # Tab navigation layout
│ ├── \_layout.tsx # Tabs setup (Home + Shop)
│ ├── index.tsx # Home screen
│ └── shop/
│ ├── index.tsx # ProductList screen
│ └── [id].tsx # Product detail screen
components/
├── FilterBar.tsx
├── ProductCard.tsx
store/
├── useProductStore.ts # Zustand global state
services/
├── api.ts # API calls to FakeStoreAPI
types/
├── product.ts # Product types

🚀 Getting Started

Clone the repository:

git clone https://github.com/VictorG10/Native-Store-App.git
cd Native-Store-App

Install dependencies:

yarn install

# or

npm install

Run the app:

npx expo start

🧪 API Source

This app uses FakeStoreAPI to retrieve product data and categories.

🛠️ Tech Stack

React Native (Expo)

Expo Router

Zustand (for state management)

TypeScript
