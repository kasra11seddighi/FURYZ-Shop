import { useMemo, useState, useEffect } from "react";
import { calculateDiscount } from "../utils/calculateDiscount";

export function useProductFilters(products, itemsPerPage = 6) {

  // وضعیت صفحه فعلی برای pagination
  const [currentPage, setCurrentPage] = useState(1);

  // وضعیت فیلترها
  const [filters, setFilters] = useState({
    category: "All",   // فیلتر دسته‌بندی
    brand: "All",      // فیلتر برند
    maxPrice: 300,     // سقف قیمت
    sortBy: "featured" // نوع مرتب سازی
  });

  // هر وقت فیلترها تغییر کنند
  // صفحه به 1 برمی‌گردد تا کاربر وسط pagination نماند
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const { filteredProducts, totalPages, paginatedProducts } = useMemo(() => {

    // کپی از محصولات برای اینکه array اصلی تغییر نکند
    let result = [...products];

    // ------------------------
    // 1️⃣ فیلتر دسته‌بندی
    // ------------------------
    if (filters.category !== "All") {
      result = result.filter((p) => p.category === filters.category);
    }

    // ------------------------
    // 2️⃣ فیلتر برند
    // ------------------------
    if (filters.brand !== "All") {
      result = result.filter((p) => p.brand === filters.brand);
    }

    // ------------------------
    // 3️⃣ فیلتر قیمت
    // ------------------------
    result = result.filter((p) => {
      const finalPrice = calculateDiscount(
        p.price,
        p.discountPercentage
      );

      return finalPrice <= filters.maxPrice;
    });

    // ------------------------
    // 4️⃣ مرتب سازی
    // ------------------------

    // ارزان‌ترین به گران‌ترین
    if (filters.sortBy === "priceLow") {
      result.sort((a, b) =>
        calculateDiscount(a.price, a.discountPercentage) -
        calculateDiscount(b.price, b.discountPercentage)
      );
    }

    // گران‌ترین به ارزان‌ترین
    if (filters.sortBy === "priceHigh") {
      result.sort((a, b) =>
        calculateDiscount(b.price, b.discountPercentage) -
        calculateDiscount(a.price, a.discountPercentage)
      );
    }

    // ------------------------
    // 5️⃣ محاسبه تعداد صفحات
    // ------------------------
    const total = Math.ceil(result.length / itemsPerPage);

    // ------------------------
    // 6️⃣ pagination
    // ------------------------
    // محاسبه نقطه شروع
    const start = (currentPage - 1) * itemsPerPage;

    // برش محصولات فقط برای صفحه فعلی
    const sliced = result.slice(start, start + itemsPerPage);

    return {
      filteredProducts: result,   // همه نتایج بعد از فیلتر
      totalPages: total,          // تعداد کل صفحات
      paginatedProducts: sliced   // محصولات صفحه فعلی
    };

  }, [filters, products, currentPage, itemsPerPage]);

  // تغییر یک فیلتر خاص
  const updateFilter = (key, value) =>
    setFilters((prev) => ({
      ...prev,
      [key]: value
    }));

  // ریست همه فیلترها
  const resetFilters = () =>
    setFilters({
      category: "All",
      brand: "All",
      maxPrice: 300,
      sortBy: "featured"
    });

  return {
    filters,
    updateFilter,
    resetFilters,
    filteredProducts,     // کل نتایج
    paginatedProducts,    // محصولات صفحه فعلی
    currentPage,
    setCurrentPage,
    totalPages
  };
}
