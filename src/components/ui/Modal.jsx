import { useImperativeHandle } from "react";
import { useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, ref }) => {
  const dialogRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      open,
      close,
    };
  });

  const open = () => {
    console.log("showing modal");
    dialogRef.current.showModal();
  };
  const close = () => {
    dialogRef.current.close();
  };

  return createPortal(
    <dialog ref={dialogRef}>{children}</dialog>,
    document.getElementById("modal"),
  );
};

export default Modal;
