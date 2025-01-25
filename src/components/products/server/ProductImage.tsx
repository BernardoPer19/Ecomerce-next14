import React from "react";
import { loadProdID } from "@/services/loadProducts";
import { productTypeID } from "@/types/Props";


const ProductImage: React.FC<productTypeID> = async ({ id }) => {
  const product = await loadProdID(id); // Carga de datos dentro del componente

  return (
    <div className="overflow-hidden rounded-lg shadow-xl bg-white border h-[340px]">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-auto max-h-[300px] object-contain transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};

export default ProductImage;
