"use client";

import { useEffect } from "react";
import { useSearchParams } from "react-router";
import FilterPanel from "./components/FilterPanel";
import ProductCard from "./components/ProductCard";
import { useProductFilters } from "../../hooks/useProductFilters";
import { products } from "../../data/products";
import Pagination from "../../components/common/Pagination";


export default function Page() {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  const {
    filters,
    updateFilter,
    resetFilters,
    paginatedProducts,
    filteredProducts,
    currentPage,
    setCurrentPage,
    totalPages
  } = useProductFilters(products, 9);

  // Sync URL category with filters
  useEffect(() => {
    if (categoryFromUrl) {
      const formatted =
        categoryFromUrl.charAt(0).toUpperCase() +
        categoryFromUrl.slice(1).toLowerCase();

      updateFilter("category", formatted);
    }
  }, [categoryFromUrl]);

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* Sidebar */}
        <aside>
          <FilterPanel
            filters={filters}
            updateFilter={updateFilter}
            resetFilters={resetFilters}
          />
        </aside>

        {/* Products Section */}
        <section className="lg:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-center">
              <h2 className="text-2xl font-bold text-white">
                No products found
              </h2>
              <p className="mt-2 text-sm text-white/50">
                There are no products matching your filters.
              </p>

              <button
                onClick={resetFilters}
                className="mt-6 rounded-xl bg-lime-400 px-6 py-3 font-bold text-black transition hover:bg-lime-300"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination */}
                  <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      setCurrentPage={setCurrentPage}
                  />

            </>
          )}
        </section>

      </div>
    </main>
  );
}
