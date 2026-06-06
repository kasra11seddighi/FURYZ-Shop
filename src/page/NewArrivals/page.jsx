"use client";

import { products } from "../../data/products";
import ProductCard from "../Shop/components/ProductCard";
import { useProductFilters } from "../../context/hooks/useProductFilters";
import Pagination from "../../components/common/Pagination";

export default function Page() {

  // گرفتن فقط محصولات جدید
  const newProducts = products.filter((product) => product.isNew);

  const {
    paginatedProducts,
    currentPage,
    setCurrentPage,
    totalPages
  } = useProductFilters(newProducts, 8); // اینجا newProducts دادیم

  return (
    <main className="max-w-7xl mx-auto px-4 py-16">

      {newProducts.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-xl font-semibold">
            No new products found
          </h2>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* فقط محصولات صفحه فعلی */}
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}

          </div>

          {/* pagination بیرون grid */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </main>
  );
}
