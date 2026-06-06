import React from "react";

export default function Page() {
  return (
    <section className="min-h-screen bg-black text-white">

      {/* =========================
          Hero Section
      ========================== */}
      <div className="py-20 border-b border-white/10">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold">
            About Our Store
          </h1>
          <p className="mt-6 text-white/60 text-lg">
            We are dedicated to providing premium sportswear and equipment 
            designed for performance, comfort, and style.
          </p>
        </div>
      </div>

      {/* =========================
          Mission Section
      ========================== */}
      <div className="py-20 border-b border-white/10">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Our Mission
            </h2>
            <p className="text-white/60 leading-relaxed">
              Our mission is to empower athletes and fitness enthusiasts 
              with high-quality sports products that enhance performance 
              and inspire confidence. We believe that the right gear 
              can transform your training experience.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-10 border border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-lime-400">
              What We Stand For
            </h3>
            <ul className="space-y-3 text-white/70">
              <li>• Premium Quality Products</li>
              <li>• Performance-Driven Design</li>
              <li>• Trusted Global Brands</li>
              <li>• Customer Satisfaction</li>
            </ul>
          </div>

        </div>
      </div>

      {/* =========================
          Why Choose Us
      ========================== */}
      <div className="py-20 border-b border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-lg font-semibold mb-4 text-lime-400">
                Fast Delivery
              </h3>
              <p className="text-white/60">
                Reliable and fast shipping to ensure your gear arrives on time.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-lg font-semibold mb-4 text-lime-400">
                Secure Payments
              </h3>
              <p className="text-white/60">
                Safe and encrypted transactions for a worry-free checkout.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-lg font-semibold mb-4 text-lime-400">
                Top Sports Brands
              </h3>
              <p className="text-white/60">
                Curated selection of leading global sports brands.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          Stats Section
      ========================== */}
      <div className="py-20 border-b border-white/10">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-lime-400">10K+</h3>
            <p className="text-white/60 mt-2">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-lime-400">50+</h3>
            <p className="text-white/60 mt-2">Premium Brands</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-lime-400">5 Years</h3>
            <p className="text-white/60 mt-2">In Business</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-lime-400">99%</h3>
            <p className="text-white/60 mt-2">Customer Satisfaction</p>
          </div>
        </div>
      </div>

      {/* =========================
          Call To Action
      ========================== */}
      <div className="py-20 text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-semibold mb-6">
            Ready to Elevate Your Game?
          </h2>
          <p className="text-white/60 mb-8">
            Discover the latest sports collections and performance gear today.
          </p>
          <a
            href="/shop"
            className="inline-block px-8 py-3 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-300 transition"
          >
            Shop Now
          </a>
        </div>
      </div>

    </section>
  );
}
