import { Heart } from "lucide-react";
import { useRef } from "react";
import toast from "react-hot-toast";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router";

export default function AddToWishlist({ productId, productName }) {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const isWishlisted = favorites.includes(productId);

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isProcessing = useRef(false);

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

  const toggleWishlist = (e) => {
    stop(e);

    if (!requireAuth()) return;
    if (isProcessing.current) return;

    isProcessing.current = true;

    if (isWishlisted) {
      setFavorites(favorites.filter((id) => id !== productId));
      toast("Removed from favorites", { icon: "🗑️" });
    } else {
      setFavorites([...favorites, productId]);
      toast.success(`${productName} added to favorites`);
    }

    setTimeout(() => {
      isProcessing.current = false;
    }, 150);
  };

  return (
    <button
      onClick={toggleWishlist}
      className={`inline-flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 border backdrop-blur-md ${
        isWishlisted
          ? "border-red-500/40 bg-red-500/20 text-red-400 scale-110"
          : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:bg-white/10 hover:text-white"
      }`}
    >
      <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
    </button>
  );
}
