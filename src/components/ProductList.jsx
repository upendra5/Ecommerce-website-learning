import { use } from "react";
import Product from "./Product";
import { CartContext } from "../store/CartContext";
const ProductList = ({ products }) => {
  const { addToCart } = use(CartContext);
  return (
    <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Product key={product.id} {...product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
