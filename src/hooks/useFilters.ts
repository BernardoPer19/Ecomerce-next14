// services/filterProducts.ts
import { ProductType } from "@/types/ProductTypes";

export function filterProducts(
  products: ProductType[],
  category: string = "",
  price: number = 800,
  orderBy: string = "default"
): ProductType[] {

  const filtered = products.filter((product) => {
    const isCategoryMatch = category ? product.category === category : true;
    const isPriceMatch = product.price <= price;
    return isCategoryMatch && isPriceMatch;
  });

  switch (orderBy) {
    case "asc":
      return [...filtered].sort((a, b) => a.price - b.price);
    case "desc":
      return [...filtered].sort((a, b) => b.price - a.price);
    default:
      return filtered;
  }
}
