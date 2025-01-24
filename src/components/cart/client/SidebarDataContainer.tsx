"use client"
import { useCart } from "@/context/CartContext";
import React from "react";
import BtnCloseSidebar from "./BtnCloseSidebar";
import CartProdctList from "./CartProdctList";

function SidebarDataContainer() {
    
  const { isOpen } = useCart();
  return (
    <div>
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center px-4 py-2 bg-gray-800 text-white">
          <h2 className="text-lg font-bold">Tu Carrito</h2>
          <BtnCloseSidebar />
        </div>
        <CartProdctList />
      </div>
    </div>
  );
}

export default SidebarDataContainer;
