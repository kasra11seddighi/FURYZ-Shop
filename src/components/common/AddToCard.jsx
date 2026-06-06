import { useLocalStorage } from "../../context/hooks/useLocalStorage";
import toast from "react-hot-toast";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router";

export default function AddToCart({ product, variant = "full" }) {
  const [cart, setCart] = useLocalStorage("cart", []);
  const cartItem = cart.find((item) => item.id === product.id);

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const stop = (e) => e.stopPropagation();

  const requireAuth = () => {
    if (!isAuthenticated) {
      toast.error("Please login to continue");

      navigate("/login", {
        state: { from: location },
      });

      return false;
    }
    return true;
  };

  const addToCart = (e) => {
    stop(e);

    if (!requireAuth()) return;

    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);

      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });

    toast.success(`${product.name} added to cart`, {
      id: `cart-${product.id}`,
    });
  };

  const updateQty = (e, delta) => {
    stop(e);

    if (!requireAuth()) return;

    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  if (variant === "icon") {
    return (
      <div
        className="flex items-center justify-center min-w-[40px]"
        onClick={stop}
      >
        {!cartItem ? (
          <button
            onClick={addToCart}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 text-black transition-all hover:bg-lime-300 active:scale-90 shadow-lg shadow-lime-400/20"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        ) : (
          <div className="flex items-center gap-2 bg-[#121212] border border-white/10 rounded-xl p-1.5 shadow-2xl">
            <button
              onClick={(e) => updateQty(e, -1)}
              className="p-1 text-gray-400 hover:text-red-500 transition-colors"
            >
              <Minus className="h-4 w-4" />
            </button>

            <span className="text-sm font-bold text-lime-400 min-w-[16px] text-center">
              {cartItem.quantity}
            </span>

            <button
              onClick={(e) => updateQty(e, 1)}
              className="p-1 text-gray-400 hover:text-lime-400 transition-colors"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="w-full" onClick={stop}>
      {!cartItem ? (
        <button
          onClick={addToCart}
          className="w-full py-4 bg-lime-400 text-black rounded-2xl font-black text-lg hover:bg-lime-300 transition-all active:scale-[0.98] shadow-xl shadow-lime-400/10"
        >
          Add to Shopping Bag
        </button>
      ) : (
        <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-sm">
          <button
            onClick={(e) => updateQty(e, -1)}
            className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl hover:bg-red-500/20 hover:text-red-500 transition-all"
          >
            <Minus />
          </button>

          <span className="text-2xl font-black text-white">
            {cartItem.quantity}
          </span>

          <button
            onClick={(e) => updateQty(e, 1)}
            className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl hover:bg-lime-400/20 hover:text-lime-400 transition-all"
          >
            <Plus />
          </button>
        </div>
      )}
    </div>
  );
}
