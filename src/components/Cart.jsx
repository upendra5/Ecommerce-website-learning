import { use } from "react";
import { CartContext } from "../store/CartContext";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Cart = () => {
  const { cart } = use(CartContext);
  return (
    <div className="p-5 bg-[#382e1b] text-amber-100">
      <h2 className="text-xl font-semibold uppercase">Your cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="flex gap-4 justify-between">
            <span> {item.title}</span>
            <span> {item.price}</span>
            <span>
              <button>
                <FaArrowDown />
              </button>
              {item.quantity}
              <button>
                <FaArrowUp />
              </button>
            </span>
          </li>
        ))}
      </ul>
      <div>Cart Total</div>
    </div>
  );
};

export default Cart;
