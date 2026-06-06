"use client";

import { useState, useMemo } from "react";
import { brandsData } from "../../data/brandsData";
import { products } from "../../data/products";
import ProductCard from "../Shop/components/ProductCard";
import { useSearchParams } from "react-router";
import { useEffect } from "react";


export default function BrandsPage() {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [searchParams] = useSearchParams();
  const brandFromUrl = searchParams.get("brand");

  const featuredBrand = brandsData[0];
  const otherBrands = brandsData.slice(1);

  const filteredProducts = useMemo(() => {
    if (!selectedBrand) return [];
    return products.filter(
      (product) => product.brand === selectedBrand
    );
  }, [selectedBrand]);

  const handleBrandClick = (brandName) => {
    setSelectedBrand(brandName);

    setTimeout(() => {
      document
        .getElementById("brand-products")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 120);
  };
  useEffect(() => {
  if (brandFromUrl) {
    setSelectedBrand(brandFromUrl);
  }
}, [brandFromUrl]);

  return (
    <main className="min-h-screen bg-[#02040a] text-white pb-24">

      {/* background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-lime-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-24">

        {/* HEADER */}
        <header className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">
            Our <span className="text-lime-400">Brands</span>
          </h1>

          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Discover premium sports brands trusted by athletes worldwide.
          </p>
        </header>


        {/* FEATURED BRAND HERO */}
        <div className="mb-20 relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-10 md:p-16">

          <div className="grid md:grid-cols-2 items-center gap-12">

            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-lime-400 text-black text-xs font-bold mb-6">
                Featured Brand
              </span>

              <h2 className="text-5xl font-black mb-4">
                {featuredBrand.name}
              </h2>

              <p className="text-white/60 max-w-md mb-8">
                Innovation, performance, and iconic design. Explore the latest collection from {featuredBrand.name}.
              </p>

              <button
                onClick={() => handleBrandClick(featuredBrand.name)}
                className="
                bg-white text-black
                px-8 py-4
                rounded-xl
                font-bold
                hover:bg-lime-400
                transition
                "
              >
                Explore Products
              </button>
            </div>

            <div className="flex justify-center relative">

              <div className="absolute w-72 h-72 bg-lime-400/20 blur-[90px] rounded-full" />

              <img
                src={featuredBrand.logo}
                alt={featuredBrand.name}
                className="relative z-10 w-72 object-contain invert brightness-200"
              />

            </div>

          </div>

        </div>


        {/* OTHER BRANDS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {otherBrands.map((brand) => (
            <div
              key={brand.id}
              onClick={() => handleBrandClick(brand.name)}
              className="
              group cursor-pointer
              relative h-40 rounded-2xl
              border border-white/10
              bg-white/[0.04]
              flex items-center justify-center
              transition-all duration-300
              hover:border-lime-400/40
              hover:bg-white/[0.07]
              hover:scale-[1.03]
              "
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="
                max-h-12 object-contain
                opacity-70
                group-hover:opacity-100
                transition
                "
              />

              <div className="
              absolute inset-0
              opacity-0
              group-hover:opacity-100
              bg-gradient-to-br
              from-lime-400/10
              via-transparent
              to-transparent
              transition
              " />
            </div>
          ))}

        </div>


        {/* PRODUCTS */}
        {selectedBrand && (
         <section
  id="brand-products"
  className="mt-24 scroll-mt-32"
>


            <div className="flex items-center justify-between mb-10">

              <h2 className="text-3xl font-black">
                {selectedBrand} Products
              </h2>

              <button
                onClick={() => setSelectedBrand(null)}
                className="
                px-4 py-2
                text-sm
                rounded-lg
                border border-white/10
                hover:border-lime-400/40
                hover:text-lime-400
                transition
                "
              >
                Clear Filter
              </button>

            </div>

            {filteredProducts.length === 0 ? (
              <p className="text-white/50">
                No products found for this brand.
              </p>
            ) : (

              <div className="
              grid
              grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              gap-6
              ">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>

            )}

          </section>
        )}

      </div>
    </main>
  );
}
