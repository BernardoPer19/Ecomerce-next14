import { CartInputType, CartType } from "@/types/CartTypes";
import { useState } from "react";

export const useCartHook = () => {
  const [cart, setCart] = useState<CartType[]>([]);

  const addToCart = (product: CartInputType) => {
    setCart((prevItem) => {
      const existingProduct = prevItem.find(
        (item) => item.title === product.title
      );
      if (existingProduct) {
        return prevItem.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prevItem,  {...product} ];
      }
    });
  };

  const removeToCart = (id: number) => {
    setCart((prevItem) => prevItem.filter((item) => item.id !== id));
  };

  return { addToCart, removeToCart, cart,setCart };
};
