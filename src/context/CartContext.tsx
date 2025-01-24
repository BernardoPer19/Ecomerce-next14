"use client";

import React, {
  createContext,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { CartInputType, CartType } from "@/types/CartTypes";
import { useCartHook } from "@/hooks/useCart";

// Tipos para los props de los children
interface ChildrenType {
  children: React.ReactNode;
}

interface ContextTypes {
  cart: CartType[];
  addToCart: (product: CartInputType) => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  totalItems: number;
  removeToCart: (id: number) => void;
}

const CartContext = createContext<ContextTypes | undefined>(undefined);

export const CartProvider = ({ children }: ChildrenType) => {
  const { addToCart, cart, removeToCart } = useCartHook();

  const [isOpen, setIsOpen] = useState(false);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const value: ContextTypes = {
    cart,
    addToCart,
    isOpen,
    setIsOpen,
    totalItems,
    removeToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Hook para usar el contexto en otros componentes
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }
  return context;
};
