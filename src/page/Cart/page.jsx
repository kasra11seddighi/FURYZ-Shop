import { useLocalStorage } from "../../hooks/useLocalStorage";
import { HiOutlineTrash, HiOutlineMinus, HiOutlinePlus, HiOutlineArrowLeft } from "react-icons/hi";
import { Link, useNavigate } from "react-router";

const CartPage = () => {
  const [cart, setCart] = useLocalStorage("cart", []);
  const navigate = useNavigate();

  const updateQuantity = (id, delta) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 15; // ثابت یا محاسباتی
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6">
        <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-6 animate-pulse">
          {/* <HiOutlineShoppingBag size={48} className="text-white/20" /> */}
        </div>
        <h1 className="text-3xl font-black uppercase tracking-tighter mb-2">Your Bag is Empty</h1>
        <p className="text-white/40 mb-8 text-center max-w-xs">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/shop" className="px-8 py-4 bg-[#a3ff12] text-black font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-transform">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => navigate(-1)} className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
            <HiOutlineArrowLeft size={20} />
          </button>
          <h1 className="text-4xl font-black uppercase tracking-tighter">Shopping Bag <span className="text-[#a3ff12]">({cart.length})</span></h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* List Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-white/[0.02] border border-white/5 rounded-3xl p-4 md:p-6 flex flex-col md:flex-row gap-6 items-center group transition-all hover:bg-white/[0.04]">
                <div className="w-32 h-32 flex-shrink-0 bg-white/5 rounded-2xl overflow-hidden border border-white/10">
                  <img src={Array.isArray(item.image) ? item.image[0] : item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-lg font-bold uppercase tracking-tight mb-1">{item.name}</h3>
                  <p className="text-white/40 text-sm mb-4">Unit Price: ${item.price}</p>
                  
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <div className="flex items-center bg-black rounded-xl border border-white/10 p-1">
                      <button onClick={() => updateQuantity(item.id, -1)} className="p-2 hover:text-[#a3ff12] transition-colors"><HiOutlineMinus size={14}/></button>
                      <span className="w-8 text-center font-black text-sm">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="p-2 hover:text-[#a3ff12] transition-colors"><HiOutlinePlus size={14}/></button>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-white/20 hover:text-red-500 transition-colors flex items-center gap-1 text-xs font-bold uppercase tracking-widest">
                      <HiOutlineTrash size={16} /> Remove
                    </button>
                  </div>
                </div>

                <div className="text-2xl font-black text-[#a3ff12]">${(item.price * item.quantity).toLocaleString()}</div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 sticky top-24 backdrop-blur-md">
              <h2 className="text-xl font-black uppercase tracking-widest mb-6 border-b border-white/10 pb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-white/60 font-medium">
                  <span>Subtotal</span>
                  <span className="text-white">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-white/60 font-medium">
                  <span>Shipping Estimate</span>
                  <span className="text-white">${shipping}</span>
                </div>
                <div className="pt-4 border-t border-white/10 flex justify-between items-end">
                  <span className="text-sm font-black uppercase tracking-widest">Total Amount</span>
                  <span className="text-3xl font-black text-[#a3ff12] tracking-tighter">${total.toLocaleString()}</span>
                </div>
              </div>

              <button 
                onClick={() => navigate("/checkout")}
                className="w-full py-4 bg-[#a3ff12] text-black font-black uppercase tracking-widest rounded-2xl hover:bg-[#b4ff3d] hover:shadow-[0_0_30px_rgba(163,255,18,0.3)] transition-all active:scale-95"
              >
                Proceed to Checkout
              </button>

              <p className="mt-6 text-[10px] text-white/20 text-center uppercase font-bold tracking-[0.2em]">
                Secure checkout guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
