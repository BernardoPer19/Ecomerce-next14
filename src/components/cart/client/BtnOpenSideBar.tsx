"use client";
import React, { useState } from "react";
import { useCart } from "@/context/CartContext"; 
function BtnOpenSideBar() {
    const { isOpen,setIsOpen,totalItems } = useCart();


  return (
    <div>
      <button
        className="relative flex items-center space-x-2 px-4 py-2 bg-gray-600 rounded-md hover:bg-gray-700 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="material-icons">shopping_cart</span>
        <span className="font-bold">{totalItems}</span>
      </button>
    </div>
  );
}

export default BtnOpenSideBar;
