"use client";

const categories = ["All", "Shoes", "Apparel", "Equipment", "Supplements"];
const brands = ["All", "Nike", "Adidas", "Puma", "Under Armour", "Spalding"];
const sports = ["All", "Running", "Training", "Basketball", "Gym"];

const selectClasses = 
  "w-full cursor-pointer rounded-xl border border-white/10 bg-[#0f111a] px-4 py-3 text-white outline-none transition-all focus:border-lime-400/50 focus:ring-1 focus:ring-lime-400/20 appearance-none";

const optionClasses = "bg-[#0f111a] text-white py-2";

export default function FilterPanel({ filters, updateFilter, resetFilters }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-md">
      <h2 className="mb-6 text-xl font-black text-white tracking-tight">Filters</h2>

      <div className="space-y-6">
        {/* Category */}
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/40">
            Category
          </label>
          <div className="relative">
            <select
              className={selectClasses}
              value={filters.category}
              onChange={(e) => updateFilter("category", e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} className={optionClasses}>
                  {cat}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30">
              ▼
            </span>
          </div>
        </div>

        {/* Brand */}
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/40">
            Brand
          </label>
          <div className="relative">
            <select
              className={selectClasses}
              value={filters.brand}
              onChange={(e) => updateFilter("brand", e.target.value)}
            >
              {brands.map((brand) => (
                <option key={brand} value={brand} className={optionClasses}>
                  {brand}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30">
              ▼
            </span>
          </div>
        </div>

        {/* Price Range */}
        <div>
          <div className="mb-3 flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-wider text-white/40">
              Max Price
            </label>
            <span className="text-sm font-black text-lime-400">${filters.maxPrice}</span>
          </div>
          <input
            type="range"
            min="0"
            max="300"
            step="10"
            value={filters.maxPrice}
            onChange={(e) => updateFilter("maxPrice", Number(e.target.value))}
            className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-white/10 accent-lime-400"
          />
        </div>

        {/* Reset Button */}
        <button
          onClick={resetFilters}
          className="group relative mt-4 w-full overflow-hidden rounded-xl bg-lime-400 py-4 font-black text-black transition-all hover:bg-lime-300 active:scale-[0.98]"
        >
          <span className="relative z-10">Reset Filters</span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
        </button>
      </div>
    </div>
  );
}
