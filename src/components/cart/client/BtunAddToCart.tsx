"use client";

import React from "react";
import { CartInputType } from "@/types/CartTypes";
import { useCart } from "@/context/CartContext";

interface ProductButtonProps {
  product: CartInputType;
}

const ProductButton: React.FC<ProductButtonProps> = ({ product }) => {

  const {addToCart} = useCart()

  const handleAddToCart = async () => {
    try {
      const updatedCart = await addToCart(product);
      console.log("Carrito actualizado:", updatedCart);
    } catch (error) {
      console.error("Error al agregar al carrito:", error);
    }
  };

  return (
    <button
      onClick={handleAddToCart}
       className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
    >
      Agregar al carrito
    </button>
  );
};

export default ProductButton;
