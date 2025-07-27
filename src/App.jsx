import Header from "./components/Header";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import ProductList from "./components/ProductList.jsx";
import CartContextProvider from "./store/CartContext.jsx";

export default function App() {
  return (
    <CartContextProvider>
      <main>
        <Header />
        <div className="max-w-7xl mx-auto mt-8">
          <ProductList products={DUMMY_PRODUCTS} />
        </div>
      </main>
    </CartContextProvider>
  );
}
