import { useSearchParams } from "react-router";
import { products } from "../../data/products";
import ProductCard from "../Shop/components/ProductCard"; 

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.brand.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-white min-h-screen">
      
      {/* Title */}
      <div className="mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
          Results for:{" "}
          <span className="text-lime-400 break-words">
            "{query}"
          </span>
        </h2>

        <p className="mt-3 text-sm sm:text-base text-white/50">
          {filteredProducts.length} product
          {filteredProducts.length !== 1 && "s"} found
        </p>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="
          grid
          grid-cols-1
          sm:grid-cols2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          gap-4
          sm:gap-6
        ">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <p className="text-white/40 text-lg sm:text-xl">
            No products found matching your search.
          </p>
        </div>
      )}
    </div>
  );
}
