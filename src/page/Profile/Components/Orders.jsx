import React, { useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";

// حتما باید export default داشته باشد تا ارور page.jsx رفع شود
export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // گرفتن اطلاعات از لوکال استوریج
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  if (orders.length === 0) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[400px] text-center">
        <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-4">
          <HiOutlineShoppingBag size={40} className="text-white/20" />
        </div>
        <h3 className="text-lg font-bold text-white/80">You have no orders yet</h3>
        <p className="text-sm text-white/40 mt-2">After you make a purchase, your orders will appear here.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <div
          key={order.id}
          className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md"
        >
          {/* Header */}
          <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
            <div>
              <span className="text-[10px] text-white/40 uppercase block">Order ID</span>
              <span className="text-sm font-mono text-lime-400">{order.id}</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-white/40 uppercase block">Date</span>
              <span className="text-xs text-white/70">{order.date || "June 06, 2026"}</span>
            </div>
          </div>

          {/* Items */}
          <div className="p-4 space-y-4">
            {order.items.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black rounded-lg p-1 border border-white/5">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{item.name}</p>
                    <p className="text-[10px] text-white/40">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-white">${item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 bg-white/5 border-t border-white/10 flex justify-between items-center">
            <span className="text-[10px] px-2 py-1 rounded-full bg-lime-400 text-black font-bold uppercase">
              {order.status || "Processing"}
            </span>
            <div className="text-right">
              <span className="text-lg font-bold text-white">${order.total}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
