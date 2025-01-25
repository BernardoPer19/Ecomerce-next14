import { ProductType } from "@/types/ProductTypes"

export async function fetchProducts(): Promise<ProductType[]> {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "no-store"
  })
  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }
  const data = await res.json()
  return data.products as ProductType[]
}




export async function loadProdID(id: number): Promise<ProductType> {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Error fetching product data");
  }
  const data = await res.json();
  return data;
}