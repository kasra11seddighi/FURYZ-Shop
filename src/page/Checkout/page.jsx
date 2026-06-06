import { useLocalStorage } from "../../context/hooks/useLocalStorage";
import { useNavigate } from "react-router";
const Cart = () => {
    const navigate = useNavigate();

  const [cart] = useLocalStorage("cart", []);

  const subtotal = cart.reduce(
    (acc, item) => acc + Number(item.price) * Number(item.quantity),
    0
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-28 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-black mb-10">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Products */}
          <div className="lg:col-span-2 space-y-4">
            {cart.length === 0 ? (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                Cart is empty
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 flex gap-4 items-center"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <h2 className="font-bold text-lg">{item.title}</h2>
                    <p className="text-white/60">${item.price}</p>
                    <p className="text-white/60">Qty: {item.quantity}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right: Summary + Address */}
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>

              <div className="flex justify-between mb-2 text-white/70">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between mb-2 text-white/70">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <hr className="border-white/10 my-4" />

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

            <button
  onClick={() => navigate("/payment")}
  className="w-full mt-6 py-3 rounded-xl bg-white text-black font-bold"
>
  Proceed to Checkout
</button>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4">Shipping Address</h2>

              <div className="text-white/70 leading-7">
                <p>Kasra Rahimi</p>
                <p>Tehran, Iran</p>
                <p>Azadi Street, No. 42</p>
                <p>Postal Code: 1234567890</p>
                <p>Phone: +98 912 000 0000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
