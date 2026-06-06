import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import SectionTitleRow from "../../components/common/SectionTitleRow";
import NewArrivalsCard from "./components/NewArrivalsCard";
import { products } from "../../data/products";

const MAX_VISIBLE = 4;

export default function NewArrivalsSection() {
  const navigate = useNavigate();
  const [start, setStart] = useState(0);

  // ۱. فیلتر کردن محصولات جدید قبل از هر پردازشی
  const newProducts = useMemo(() => {
    return products.filter(product => product.isNew);
  }, []);

  // ۲. استفاده از لیست فیلتر شده برای محاسبات اسلایدر
  const total = newProducts.length;
  const maxStart = Math.max(0, total - MAX_VISIBLE);

  const visibleItems = useMemo(() => {
    return newProducts.slice(start, start + MAX_VISIBLE);
  }, [start, newProducts]);

  const canPrev = start > 0;
  const canNext = start < maxStart;

  const handlePrev = () => {
    if (!canPrev) return;
    setStart((s) => Math.max(0, s - 1));
  };

  const handleNext = () => {
    if (!canNext) return;
    setStart((s) => Math.min(maxStart, s + 1));
  };

  return (
    <section className="w-full mt-8">
      <SectionTitleRow
        title="NEW ARRIVALS"
        actionLabel="View all products"
        // اصلاح مسیر روت بر اساس فایل routes.jsx که قبلاً فرستادی
        onAction={() => navigate("/new")} 
        onPrev={canPrev ? handlePrev : undefined}
        onNext={canNext ? handleNext : undefined}
        className="mb-4"
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {visibleItems.map((item) => (
          <NewArrivalsCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
