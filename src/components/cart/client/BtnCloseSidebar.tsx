import { useCart } from "@/context/CartContext";
import React from "react";

function BtnCloseSidebar() {
  const { setIsOpen } = useCart();
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <button onClick={onClose} className="text-xl font-bold">
        ×
      </button>
    </div>
  );
}

export default BtnCloseSidebar;
