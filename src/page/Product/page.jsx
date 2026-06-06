import { useParams, useNavigate } from "react-router";
import { products } from "../../data/products";
import { calculateDiscount } from "../../utils/calculateDiscount";

import {
  HiOutlineShieldCheck,
  HiOutlineTruck,
} from "react-icons/hi2";

import { FaStar } from "react-icons/fa6";
import { ArrowLeft } from "lucide-react";

import AddToCart from "../../components/common/AddToCard";

export default function Product() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.slug === slug);

  const goBack = () => navigate(-1);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white gap-6">
        <h2 className="text-3xl font-bold">Product not found</h2>

        <button
  onClick={goBack}
  className="group flex items-center gap-2 px-4 py-2 mb-10
  rounded-xl border border-white/10
  bg-white/5 backdrop-blur-md
  text-gray-300
  hover:text-white
  hover:border-lime-400/40
  hover:bg-lime-400/10
  transition-all duration-300"
>
  <ArrowLeft
    size={18}
    className="transition-transform group-hover:-translate-x-1"
  />
  <span className="text-sm font-medium">Back</span>
</button>

      </div>
    );
  }

  const finalPrice = calculateDiscount(
    product.price,
    product.discountPercentage
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-14 lg:py-20 text-white">

      {/* back */}
      <button
        onClick={goBack}
        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition mb-10"
      >
        <ArrowLeft size={18} />
        Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">

        {/* Image section */}
        <div className="lg:col-span-7 space-y-6">

          <div className="relative group aspect-square rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 overflow-hidden flex items-center justify-center p-12 shadow-2xl">

            {/* glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(132,255,0,0.15),transparent_60%)]" />

            <img
              src={product.image}
              alt={product.name}
              className="relative z-10 w-full h-full object-contain transition duration-500 group-hover:scale-110"
            />
          </div>

          {/* thumbnails */}
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-xl bg-zinc-900 border border-white/10 p-2 opacity-60 hover:opacity-100 hover:border-lime-400 transition cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={`${product.name} ${i}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

        </div>

        {/* Right panel */}
        <div className="lg:col-span-5 space-y-8 sticky top-32">

          {/* header */}
          <div>

            <div className="flex items-center gap-3 mb-5">

              <span className="px-3 py-1 rounded-full bg-lime-400 text-black text-xs font-bold shadow-lg shadow-lime-400/20">
                {product.brand}
              </span>

              <div className="flex items-center gap-1 text-yellow-400 text-sm font-medium">
                <FaStar />
                {product.rating}
                <span className="text-white/40">
                  ({product.reviews} reviews)
                </span>
              </div>

            </div>

            <h1 className="text-4xl lg:text-5xl font-black mb-4 tracking-tight leading-tight">
              {product.name}
            </h1>

            <p className="text-white/60 text-lg leading-relaxed max-w-lg">
              {product.description ||
                "High-performance gear designed for elite athletes and enthusiasts."}
            </p>

          </div>

          {/* price box */}
          <div className="p-7 rounded-3xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-xl shadow-xl">

            <div className="flex items-end gap-4 mb-6">

              <span className="text-5xl font-bold text-white">
                ${finalPrice}
              </span>

              {product.discountPercentage > 0 && (
                <div className="flex flex-col mb-1">

                  <span className="text-sm text-white/40 line-through">
                    ${product.price}
                  </span>

                  <span className="text-xs text-red-500 font-bold">
                    Save {product.discountPercentage}%
                  </span>

                </div>
              )}

            </div>

            <AddToCart product={product} />

          </div>

          {/* features */}
          <div className="grid gap-4 pt-2">

            <Feature
              icon={<HiOutlineTruck />}
              title="Free Express Shipping"
              subtitle="On orders over $150"
            />

            <Feature
              icon={<HiOutlineShieldCheck />}
              title="Authentic Product"
              subtitle="100% original brand guarantee"
            />

          </div>

        </div>

      </div>

      {/* details */}
      <div className="mt-24 pt-12 border-t border-white/10">

        <h3 className="text-2xl font-bold mb-10">
          Technical Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <DetailItem label="Category" value={product.category} />
          <DetailItem label="Sub Category" value={product.subCategory} />
          <DetailItem
            label="Stock Status"
            value={product.stock > 0 ? "In Stock" : "Out of Stock"}
          />
          <DetailItem label="Rating" value={`${product.rating} / 5`} />
          <DetailItem label="Reviews" value={`${product.reviews}`} />
          <DetailItem label="Item ID" value={`#STX-${product.id}`} />

        </div>

      </div>

    </div>
  );
}

function Feature({ icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-4 bg-zinc-900/60 border border-white/10 p-4 rounded-xl hover:border-lime-400/40 transition">

      <div className="text-2xl text-lime-400">
        {icon}
      </div>

      <div>
        <p className="font-semibold text-white">
          {title}
        </p>
        <p className="text-xs text-white/50">
          {subtitle}
        </p>
      </div>

    </div>
  );
}

function DetailItem({ label, value }) {
  return (
    <div className="p-5 rounded-xl bg-zinc-900/70 border border-white/10 hover:border-lime-400/30 transition flex flex-col gap-2">
      <span className="text-xs text-white/40 uppercase tracking-widest">
        {label}
      </span>
      <span className="text-lg font-medium">
        {value}
      </span>
    </div>
  );
}
