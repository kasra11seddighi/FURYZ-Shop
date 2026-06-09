import { useEffect, useRef, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useNavigate } from "react-router";
import { useLocalStorage } from "../../../hooks/useLocalStorage"; 
const ShoppingCart = () => {
  const [open, setOpen] = useState(false);
  const cartRef = useRef(null);
  const navigate = useNavigate();
  
  const [cart] = useLocalStorage("cart", []);

  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleGoToCart = () => {
    setOpen(false);
    navigate("/cart");
  };

  return (
    <div className="relative" ref={cartRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="relative cursor-pointer hover:opacity-80 transition-opacity p-2"
      >
        <HiOutlineShoppingBag size={24} className="text-white" />
        {itemCount > 0 && (
          <span className="absolute top-1 right-1 bg-[#a3ff12] text-black text-[10px] font-black rounded-full min-w-[16px] h-4 flex items-center justify-center shadow-lg px-1">
            {itemCount}
          </span>
        )}
      </button>

      <div
        className={`
          absolute right-0 top-full mt-3 w-80 z-50
          transition-all duration-300 ease-out
          ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}
        `}
      >
        <div className="absolute -top-1.5 right-4 w-3 h-3 rotate-45 bg-[#0f0f0f] border-t border-l border-white/10" />

        <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl">
          <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
            <span className="text-white font-bold uppercase tracking-tighter">My Cart</span>
            <span className="text-[#a3ff12] text-[10px] font-black bg-[#a3ff12]/10 px-2 py-0.5 rounded-md uppercase">
              {itemCount} Items
            </span>
          </div>

          <div className="max-h-80 overflow-y-auto custom-scrollbar">
            {cart.length === 0 ? (
              <div className="px-4 py-10 text-center text-white/40 italic text-sm">
                Empty Cart
              </div>
            ) : (
              <div className="p-2 space-y-1">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/[0.05] transition-colors group">
                    <img
                      src={Array.isArray(item.image) ? item.image[0] : item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover bg-white/5 border border-white/10"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-[13px] font-medium truncate">{item.name}</div>
                      <div className="text-white/40 text-[11px]">Qty: {item.quantity}</div>
                    </div>
                    <div className="text-white text-sm font-bold">${(item.price * item.quantity).toLocaleString()}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="px-4 py-4 border-t border-white/10 bg-white/[0.01]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white/50 text-xs uppercase font-bold">Total Amount</span>
                <span className="text-[#a3ff12] font-black text-xl">${total.toLocaleString()}</span>
              </div>
              <button
                onClick={handleGoToCart}
                className="w-full py-3 rounded-xl bg-[#a3ff12] text-black font-black text-xs hover:bg-[#b4ff3d] transition-all uppercase tracking-widest shadow-lg shadow-[#a3ff12]/10"
              >
                Checkout Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
