// src/features/Topbar/Topbar.jsx
import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

import Logo from "./components/Logo";
import Menu from "./components/Menu";
import Profile from "./components/Profile";
import ShoppingCart from "./components/ShoppingCart";
import Search from "./components/Search";
import { useAuth } from "../../context/AuthContext";

export default function Topbar() {


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  // جلوگیری از اسکرول پشت دراور
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a] border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 lg:h-[76px] flex items-center justify-between gap-4">
          
          {/* Logo */}
          <div className="shrink-0">
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block flex-1">
            <Menu />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-4 text-white shrink-0">
            
            {/* Search */}
            <Search />

            {/* Profile */}
            <Profile />

            {/* Cart */}
            {isAuthenticated && <ShoppingCart count={2} />}

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden w-10 h-10 rounded-xl border border-white/10 grid place-items-center hover:border-white/25 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <HiOutlineMenu size={22} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] transition-opacity duration-200 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-[84%] max-w-xs bg-[#0f0f0f] border-l border-white/10
          transform transition-transform duration-200
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Drawer Header */}
          <div className="h-16 px-4 flex items-center justify-between border-b border-white/10">
            <span className="text-white font-bold tracking-widest">Menu</span>

            <button
              type="button"
              className="w-10 h-10 rounded-xl border border-white/10 grid place-items-center hover:border-white/25 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <HiOutlineX size={22} className="text-white" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="p-4">
            <Menu
              variant="mobile"
              onNavigate={() => setMobileMenuOpen(false)}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
