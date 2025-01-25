import React from "react";
import ProductDetails from "@/components/products/server/ProductDetails";
import ProductImage from "@/components/products/server/ProductImage";
import ProductReviews from "@/components/products/server/ProductReviews";

async function ProductPageByID({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <ProductImage id={id} />
      <ProductDetails id={id} />
      <ProductReviews id={id} />
    </div>
  );
}

export default ProductPageByID;
