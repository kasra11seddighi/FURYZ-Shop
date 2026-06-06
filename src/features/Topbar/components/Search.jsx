// src/features/Topbar/components/Search.jsx
import { useEffect, useRef, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useSearch } from "../../Search/SearchContext"; // مسیر را بر اساس ساختار فولدربندی چک کن
import { useLocation, useNavigate } from "react-router";
export default function Search() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);
  const { query, setQuery } = useSearch(); 
  const navigate = useNavigate();
  const location = useLocation();


    const handleSearch = (e) => {
      if (e.key === "Enter" && query.trim()) {
      let searchPath = `/search?q=${encodeURIComponent(query)}`;
    
    // اگر کاربر در صفحه Sale بود
    if (location.pathname === "/sale") {
      searchPath += "&filter=sale";
    } 
    // اگر کاربر در صفحه New بود
    else if (location.pathname === "/new") {
      searchPath += "&filter=new";
    }

    navigate(searchPath);
    setOpen(false);
  }
};


  // فوکوس خودکار روی اینپوت هنگام باز شدن
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  return (
    <div className="relative">
      {/* Desktop expanding input */}
      <div className="hidden sm:flex items-center gap-2">
        <div
          className={[
            "overflow-hidden transition-all duration-300 ease-out",
            open ? "w-64 opacity-100" : "w-0 opacity-0",
          ].join(" ")}
        >
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Search products, brands..."
            className="w-64 h-10 rounded-full bg-white/5 border border-white/10 text-white px-4 outline-none
                       focus:border-lime-400/60 transition-all placeholder:text-white/20"
          />
        </div>

        <button
          type="button"
          onClick={() => setOpen((p) => !p)}
          className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all
                     ${open ? 'border-lime-400 bg-lime-400/10' : 'border-white/10 hover:border-white/30'}`}
          aria-label="Toggle search"
        >
          <HiOutlineSearch size={20} className={open ? "text-lime-400" : "text-white"} />
        </button>
      </div>

      {/* Mobile: icon + overlay input */}
      <div className="sm:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="w-10 h-10 rounded-xl border border-white/10 grid place-items-center hover:border-white/25 transition-colors"
          aria-label="Open search"
        >
          <HiOutlineSearch size={20} className="text-white" />
        </button>

        {/* Overlay */}
        <div
          className={[
            "fixed left-0 right-0 top-0 z-[70] p-4 bg-[#0a0a0a] border-b border-white/10",
            "transition-all duration-200",
            open ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible",
          ].join(" ")}
        >
          <div className="mx-auto max-w-7xl flex items-center gap-3">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleSearch}
              placeholder="Search..."
              className="flex-1 h-11 rounded-2xl bg-white/5 border border-white/10 text-white px-4 outline-none
                         focus:border-lime-400/60"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="h-11 px-4 rounded-2xl border border-white/10 text-white/80 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>

        {/* backdrop */}
        {open && (
          <button
            type="button"
            className="fixed inset-0 z-[69] bg-black/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
