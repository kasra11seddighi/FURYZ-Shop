import { useState } from "react";

const Payment = () => {
  const [form, setForm] = useState({
    cardNumber: "",
    cvv2: "",
    expiry: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("پرداخت در حال حاضر غیرفعال است");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-28 px-4">
      <div className="max-w-xl mx-auto">

        {/* warning */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 p-4 rounded-xl mb-6 text-center">
         This section is temporarily inactive.
        </div>

        <h1 className="text-3xl font-bold mb-8 text-center">
          Payment Gateway
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5"
        >

          {/* card number */}
          <div>
            <label className="text-sm text-white/60">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={form.cardNumber}
              onChange={handleChange}
              placeholder="---- ---- ---- ----"
              className="w-full mt-2 bg-black/40 border border-white/10 rounded-lg p-3 outline-none"
            />
          </div>

          {/* expiry */}
          <div>
            <label className="text-sm text-white/60">Expiration Date</label>
            <input
              type="text"
              name="expiry"
              value={form.expiry}
              onChange={handleChange}
              placeholder="MM/YY"
              className="w-full mt-2 bg-black/40 border border-white/10 rounded-lg p-3 outline-none"
            />
          </div>

          {/* cvv */}
          <div>
            <label className="text-sm text-white/60">CVV2</label>
            <input
              type="text"
              name="cvv2"
              value={form.cvv2}
              onChange={handleChange}
              placeholder="123"
              className="w-full mt-2 bg-black/40 border border-white/10 rounded-lg p-3 outline-none"
            />
          </div>

          {/* password */}
          <div>
            <label className="text-sm text-white/60">Second Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full mt-2 bg-black/40 border border-white/10 rounded-lg p-3 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-3 bg-white text-black rounded-xl font-bold"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
