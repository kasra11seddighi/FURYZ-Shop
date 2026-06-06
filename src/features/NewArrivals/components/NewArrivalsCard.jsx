// ==============================
// NewArrivalsCard Component
// نمایش کارت محصول در بخش New Arrivals
// شامل:
// - Navigation به صفحه محصول
// - Wishlist (کامپوننت مجزا)
// - AddToCart (کامپوننت مجزا)
// ==============================

import { Star } from "lucide-react";
import { useNavigate } from "react-router";

import AddToCart from "../../../components/common/AddToCard";
import AddToWishlist from "../../../components/common/AddToWishlist";

// ----------------------------------------
// Props Structure
// ----------------------------------------
// id          : شناسه محصول
// slug        : برای routing
// name        : نام محصول
// category    : دسته‌بندی
// price       : قیمت (string یا number)
// rating      : امتیاز
// reviews     : تعداد نظرات
// image       : تصویر محصول
// isNew       : نمایش badge NEW
// ----------------------------------------

export default function NewArrivalsCard({
  id,
  slug,
  name,
  category,
  price,
  rating,
  reviews,
  image,
  isNew,
}) {
  const navigate = useNavigate();

  // ----------------------------------------
  // Navigate To Product Detail
  // ----------------------------------------
  const handleNavigate = () => {
    navigate(`/product/${slug}`);
  };

  // ----------------------------------------
  // Normalize Price (اگر string باشد → number شود)
  // ----------------------------------------
  const numericPrice =
    typeof price === "string"
      ? parseFloat(price.replace(/[^0-9.-]+/g, ""))
      : price;

  return (
    <article
      onClick={handleNavigate}
      className="
        group relative flex min-h-[190px] overflow-hidden rounded-2xl
        border border-lime-400/15 bg-[#0f0f0f] p-3
        shadow-[0_0_0_1px_rgba(163,230,53,0.06),0_18px_45px_rgba(0,0,0,0.55)]
        transition hover:border-lime-400/35 hover:bg-[#121212]
        cursor-pointer
      "
    >
      {/* =========================================
          NEW Badge
      ========================================= */}
      {isNew && (
        <span className="absolute left-3 top-3 z-10 rounded-md bg-lime-400 px-2 py-1 text-[10px] font-extrabold uppercase tracking-widest text-black">
          NEW
        </span>
      )}

      {/* =========================================
          Wishlist Button (Reusable Component)
      ========================================= */}
      <div className="absolute right-3 top-3 z-20">
        <AddToWishlist
          productId={id}
          productName={name}
        />
      </div>

      {/* =========================================
          Card Content
      ========================================= */}
      <div className="flex w-full items-center gap-4">
        {/* ---------- Product Image ---------- */}
        <div className="flex w-[38%] min-w-[125px] items-center justify-center">
          <div className="flex h-[120px] w-[120px] items-center justify-center rounded-xl bg-[#141414] ring-1 ring-white/10 shadow-inner">
            <img
              src={image}
              alt={name}
              className="max-h-[105px] w-auto object-contain transition duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* ---------- Product Info ---------- */}
        <div className="flex flex-1 flex-col justify-between py-1 pb-12">
          <div>
            {/* Product Name */}
            <h3 className="pr-12 text-[15px] font-semibold text-white line-clamp-1">
              {name}
            </h3>

            {/* Category */}
            <p className="mt-1 text-xs text-white/55">
              {category}
            </p>

            {/* Price */}
            <p className="mt-2 text-lg font-extrabold text-lime-400">
              ${numericPrice}
            </p>

            {/* Rating */}
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center gap-0.5 text-lime-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-current"
                  />
                ))}
              </div>

              <span className="text-xs text-white/60">
                {rating} ({reviews})
              </span>
            </div>
          </div>

          {/* =========================================
              Add To Cart (Reusable Component)
              توقف propagation برای جلوگیری از navigate
          ========================================= */}
          <div
            className="absolute bottom-4 right-4 z-30"
            onClick={(e) => e.stopPropagation()}
          >
            <AddToCart
              variant="icon"
              product={{
                id,
                name,
                price: numericPrice,
                image,
              }}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
