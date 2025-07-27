import { use } from "react";
import { CartContext } from "../store/CartContext";
import Modal from "./ui/Modal";
import { useRef } from "react";
import Cart from "./Cart";

const Header = () => {
  const { cart } = use(CartContext);
  const modalRef = useRef(null);
  function handleOpenModal() {
    modalRef.current.open();
  }
  return (
    <>
      <Modal ref={modalRef}>
        <Cart />
      </Modal>

      <div className="p-4">
        <nav className="max-w-7xl mx-auto flex justify-between">
          <h1 className="text-2xl font-bold uppercase">Velvet horizon</h1>
          <div>
            <button onClick={handleOpenModal}>Cart ({cart.length})</button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
