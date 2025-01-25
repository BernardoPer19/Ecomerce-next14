import React from "react";
import { Review } from "@/types/ProductTypes";
import { productTypeID } from "@/types/Props";
import { loadProdID } from "@/services/loadProducts";

const ProductReviews: React.FC<productTypeID> = async ({ id }) => {
  const product = await loadProdID(id);

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl mt-8 w-[206%] ">
      <h2 className="text-2xl font-semibold text-gray-800">Customer Reviews</h2>

      {product.reviews.length === 0 ? (
        <p className="text-gray-500 mt-4">
          No reviews yet. Be the first to review this product!
        </p>
      ) : (
        <ul className="space-y-6 mt-4 ">
          {product.reviews.map((review, index) => (
            <li key={index} className="flex space-x-4 border-b pb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                {review.reviewerName.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="text-gray-800 font-semibold">
                  {review.reviewerName}
                </p>
                <p className="text-sm text-gray-500">{review.date}</p>
                <div className="flex items-center mt-1 space-x-1 text-yellow-400">
                  {"★".repeat(Math.floor(review.rating))}
                  <span className="text-gray-400 text-sm">
                    ({review.rating})
                  </span>
                </div>
                <p className="text-gray-700 mt-2">{review.comment}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductReviews;
