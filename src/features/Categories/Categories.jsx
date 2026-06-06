import { useNavigate } from "react-router";
import SectionTitleRow from "../../components/common/SectionTitleRow";
import CategoryCard from "./components/CategoryCard";
import { categoriesData } from "../../data/categoriesData";

export default function CategoriesSection({ max }) {
  const navigate = useNavigate();

  const visibleCategories = categoriesData
    .filter((c) => c.featured)
    .slice(0, max);

  return (
    <section className="w-full mt-8">
      <SectionTitleRow
        title="SHOP BY CATEGORY"
        actionLabel="View all products" // متن را تغییر دادیم چون صفحه کتگوری نداریم
        onAction={() => navigate("/shop")} // مستقیماً به فروشگاه می‌رود
        className="mb-4"
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {visibleCategories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            description={category.description}
            icon={category.icon}
            
            onClick={() => navigate(`/shop?category=${category.slug}`)}
          />
        ))}
      </div>
    </section>
  );
}
