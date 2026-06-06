// src/pages/Profile/Components/Favorits.jsx

import { products } from "../../../data/products";
import { HiOutlineTrash, HiOutlineShoppingCart } from "react-icons/hi";
import { useLocalStorage } from "../../../context/hooks/useLocalStorage";

export default function Favorits() {

  // گرفتن id های علاقه‌مندی از localStorage
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  // تبدیل id ها به product واقعی
  const favoriteProducts = products.filter((product) =>
    favorites.includes(product.id)
  );

  // حذف از علاقه‌مندی
  const removeFavorite = (id) => {
    setFavorites(favorites.filter((favId) => favId !== id));
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6">

      <h2 className="text-xl font-bold border-b border-white/5 pb-4">
        Favorites List
      </h2>

      {favoriteProducts.length > 0 ? (

        <div className="grid gap-4">

          {favoriteProducts.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-4 bg-black/20 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors"
            >

              {/* تصویر محصول */}
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-cover rounded-lg"
              />

              {/* اطلاعات */}
              <div className="flex-1">
                <h4 className="font-bold text-sm sm:text-base">
                  {product.name}
                </h4>

                <p className="text-lime-400 font-mono mt-1">
                  ${product.price}
                </p>
              </div>

              {/* اکشن ها */}
              <div className="flex gap-2">

                {/* حذف از wishlist */}
                <button
                  onClick={() => removeFavorite(product.id)}
                  className="p-2 bg-white/5 hover:bg-red-500/20 hover:text-red-500 rounded-lg transition-colors"
                >
                  <HiOutlineTrash size={20} />
                </button>

                {/* افزودن به سبد */}
                <button
                  onClick={() => console.log("add to cart", product)}
                  className="p-2 bg-lime-400 text-black hover:bg-lime-300 rounded-lg transition-colors"
                >
                  <HiOutlineShoppingCart size={20} />
                </button>

              </div>

            </div>
          ))}

        </div>

      ) : (
        <div className="py-20 text-center text-white/30">
          Your wishlist is empty.
        </div>
      )}

    </div>
  );
}
