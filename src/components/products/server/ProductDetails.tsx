import React from "react";
import { productTypeID } from "@/types/Props";
import { loadProdID } from "@/services/loadProducts";


const ProductDetails: React.FC<productTypeID> = async ({ id }) => {
  const product = await loadProdID(id);
  return (
    <div className="p-6 bg-gradient-to-r from-white to-gray-50 shadow-lg rounded-xl">
      <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
      <p className="text-gray-600 mt-4 text-sm leading-relaxed">{product.description}</p>

      <div className="flex items-center justify-between mt-6">
        <span className="text-3xl font-bold text-green-600">
          ${product.price.toFixed(2)}
        </span>
        <span className="text-sm bg-blue-600 text-white px-3 py-1 rounded-full shadow-md">
          {product.category.toUpperCase()}
        </span>
      </div>

      <div className="flex items-center space-x-3 mt-4">
        <span className="text-sm text-gray-500">Rating:</span>
        <div className="flex items-center space-x-1 text-yellow-400">
          {"★".repeat(Math.floor(product.rating))}{" "}
          <span className="text-gray-400 text-sm">
            ({product.rating.toFixed(1)})
          </span>
        </div>
      </div>

      <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-6 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 hover:shadow-xl transform hover:scale-105 transition-all">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
