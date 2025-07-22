🛒 Native Store App
A modern React Native e-commerce app built with Expo Router, Zustand, and FakeStoreAPI.

✨ Features
🧭 Navigation with Expo Router (Tabs + Dynamic Screens)

🛍 Product listing with filters, sort, pagination

🔍 Search functionality

🧰 Zustand global state for filters/products

⚠️ Error UI with retry logic (for Home & Shop)

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
├── useProductStore.ts # Zustand global state with error UI support
services/
├── api.ts # API calls to FakeStoreAPI
types/
├── product.ts # Product types
🚀 Getting Started

1. Clone the repository
   bash
   Copy
   Edit
   git clone https://github.com/VictorG10/Native-Store-App.git
   cd Native-Store-App
2. Install dependencies
   bash
   Copy
   Edit
   yarn install

# or

npm install 3. Start the app
bash
Copy
Edit
npx expo start
🧪 API Source
Using FakeStoreAPI for products and categories.

🛠️ Tech Stack
React Native (Expo)

Expo Router

Zustand (State Management)

TypeScript

✅ Features Implemented
Product listing with filters & pagination

Product detail screen with router push

Dynamic routing with Expo Router

Centralized state via Zustand

Error UI with retry button on API failure

Modular architecture for scalability
