// Footer.jsx

import { Link } from "react-router"
import { useState } from "react";
import { FaInstagram, FaTwitter, FaTelegram } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";

export default function Footer() {
    const [email, setEmail] = useState("");
  const send = ()=>{
      setEmail("")

  }
  return (
    <footer className="bg-black border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-black text-lime-400">SPORTIX</h2>

            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              High‑performance sportswear and gear designed for athletes who push limits.
            </p>

            <div className="flex gap-4 mt-6">
              <a className="p-2 border border-white/10 rounded-lg hover:border-lime-400 transition">
                <FaTelegram className="text-white text-lg" />
              </a>

              <a className="p-2 border border-white/10 rounded-lg hover:border-lime-400 transition">
                <FaInstagram className="text-white text-lg" />
              </a>

              <a className="p-2 border border-white/10 rounded-lg hover:border-lime-400 transition">
                <FaTwitter className="text-white text-lg" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-white font-bold mb-4">Shop</h3>

            <ul className="space-y-3 text-white/60 text-sm">

              <li>
                <Link to="/shop" className="hover:text-lime-400">
                  All Products
                </Link>
              </li>

              <li>
                <Link to="/new" className="hover:text-lime-400">
                  New Arrivals
                </Link>
              </li>

              <li>
                <Link to="/sale" className="hover:text-lime-400">
                  Flash Deals
                </Link>
              </li>

              <li>
                <Link to="/brands" className="hover:text-lime-400">
                  Top Brands
                </Link>
              </li>

            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold mb-4">Support</h3>

            <ul className="space-y-3 text-white/60 text-sm">

              <li>
                <Link to="/about" className="hover:text-lime-400">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-lime-400">
                  Shipping Info
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-lime-400">
                  Returns
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-lime-400">
                  FAQ
                </Link>
              </li>

            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-4">Newsletter</h3>

            <p className="text-sm text-white/60 mb-4">
              Subscribe to get updates about new products and special offers.
            </p>

            <div className="flex border border-white/10 rounded-lg overflow-hidden">

              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent px-3 py-2 text-sm outline-none w-full text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}

              />

              <button className="bg-lime-400 text-black px-4 flex items-center justify-center" onClick={send}>
                <IoMdSend className="text-black text-lg" />
              </button>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-white/40 text-sm">

          <p>© 2026 Sportix. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">

            <Link to="/about" className="hover:text-lime-400">
              Privacy Policy
            </Link>

            <Link to="/about" className="hover:text-lime-400">
              Terms
            </Link>

            <Link to="/blog" className="hover:text-lime-400">
              Blog
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}
