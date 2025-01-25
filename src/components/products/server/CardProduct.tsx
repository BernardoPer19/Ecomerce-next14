import { fetchProducts } from "@/services/loadProducts";
import { CartInputType } from "@/types/CartTypes";
import { ProductType } from "@/types/ProductTypes";
import React from "react";
import ProductButton from "../../cart/client/BtunAddToCart";
import ProdView from "../client/ProdView";

async function CardProduct() {
  const products: ProductType[] = await fetchProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => {
        // Creamos un objeto de tipo CartInputType con solo las propiedades necesarias
        const cartProduct: CartInputType = {
          id: product.id,
          title: product.title,
          price: product.price,
          category: product.category,
          image: product.thumbnail,
          quantity: 1
        };

        return (
          <div
            key={product.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-64 object-cover rounded-t-lg mb-4"
            />
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {product.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{product.category}</p>
              <p className="text-gray-800 font-bold text-lg mb-4">
                ${product.price}
              </p>
              {/* Pasa solo las propiedades necesarias */}
              <ProductButton product={cartProduct} />
              <ProdView item={product.id}/>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardProduct;
