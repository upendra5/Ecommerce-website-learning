import { createContext, useState } from "react";

export const CartContext = createContext({});

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return { ...item };
          }
        });
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  }
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
