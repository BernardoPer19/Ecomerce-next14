import FilterComponent from "@/components/products/client/BtnFilters";
import ProductList from "@/components/products/server/ProductList";
import React from "react";

async function ProductPaget() {
  return (
    <div>
      <FilterComponent />

      <ProductList />
    </div>
  );
}

export default ProductPaget;
