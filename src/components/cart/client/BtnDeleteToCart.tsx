import { useCart } from "@/context/CartContext";
import { CartInputType, CartType } from "@/types/CartTypes";
import React from "react";

interface PropsCart {
    item: number
}

function BtnDeleteToCart({item}:PropsCart) {
  const { removeToCart } = useCart();

  return (
    <>
      <button 
      onClick={()=>removeToCart(item)}
      className="text-2xl font-bold">
        x
      </button>
    </>
  );
}

export default BtnDeleteToCart;
