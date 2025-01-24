// components/ProductList.server.tsx
import CardProduct from "./CardProduct";

const ProductList = async () => {
  return (
    <div className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Nuestros Productos
        </h2>
        <CardProduct />
      </div>
    </div>
  );
};

export default ProductList;
