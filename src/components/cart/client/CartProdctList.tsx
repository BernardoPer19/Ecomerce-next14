"use client";

import { useCart } from "@/context/CartContext";

function CartProdctList() {
  const { cart } = useCart();

  return (
    <div className="p-5">
      {cart.length === 0 ? (
        <p className="text-center text-gray-800">El carrito está vacío.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center text-black"
            >
              <img className="w-24" src={item.image} alt={item.title} />
              <div>
                <p className="font-bold">{item.title}</p>
                <p className="text-sm text-gray-500">
                  Cantidad: {item.quantity}
                </p>
              </div>

              <p className="font-bold">${item.price.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartProdctList;
