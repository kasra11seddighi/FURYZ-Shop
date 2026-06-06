import { useNavigate } from "react-router";
import { calculateDiscount } from "../../../utils/calculateDiscount";
import AddToCart from "../../../components/common/AddToCard";
import AddToWishlist from "../../../components/common/AddToWishlist";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const finalPrice = calculateDiscount(
    product.price,
    product.discountPercentage
  );

  const handleNavigate = () => {
    navigate(`/product/${product.slug}`);
  };

  return (
    <div
      onClick={handleNavigate}
      className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">

        {/* ✅ Wishlist Button (Reusable + Auth Guard) */}
        <div
          className="absolute z-20 top-3 right-3"
          onClick={(e) => e.stopPropagation()}
        >
          <AddToWishlist
            productId={product.id}
            productName={product.name}
          />
        </div>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
          {product.name}
        </h3>

        <div className="mt-3">
          {product.discountPercentage > 0 ? (
            <>
              <span className="text-lg font-bold text-red-600">
                ${finalPrice}
              </span>
              <span className="ml-2 text-sm text-gray-400 line-through">
                ${product.price}
              </span>
            </>
          ) : (
            <span className="text-xl font-bold text-gray-900">
              ${product.price}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
