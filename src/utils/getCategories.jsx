import { products } from "../data/products";

export function getAllCategories() {
  const categories = new Map();

  for (const p of products) {
    if (!p.category) continue;

    if (!categories.has(p.category)) {
      categories.set(p.category, {
        title: p.category,
        slug: p.category.toLowerCase(),
      });
    }
  }

  return Array.from(categories.values());
}
