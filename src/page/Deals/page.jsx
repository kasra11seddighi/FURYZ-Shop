"use client";

import { products } from "../../data/products";
import ProductCard from "../Shop/components/ProductCard";
import { useProductFilters } from "../../hooks/useProductFilters";
import Pagination from "../../components/common/Pagination";

export default function Page() {

  // فقط محصولات دارای تخفیف
  const saleProducts = products.filter(
    (product) => product.discountPercentage > 0
  );

  const {
    paginatedProducts,
    currentPage,
    setCurrentPage,
    totalPages
  } = useProductFilters(saleProducts, 8);

  return (
    <main className="max-w-7xl mx-auto px-4 py-16">

      {saleProducts.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-xl font-semibold">
            No discounted products found
          </h2>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}

          </div>

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
