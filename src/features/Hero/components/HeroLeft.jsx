import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router"; // ایمپورت هوک ناوبری

export default function HeroLeft() {
  const navigate = useNavigate(); // تعریف تابع هدایت‌گر

  const handleShopRedirect = () => {
    navigate("/shop"); // انتقال به مسیری که در routes.jsx تعریف کردی
  };
  const handleDealsRedirect = () => {
    navigate("/sale"); // انتقال به مسیری که در routes.jsx تعریف کردی
  };
  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left pt-10 lg:pt-0">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 mb-6">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400"></span>
        </span>
        <p className="text-lime-400 font-bold tracking-[0.2em] text-[10px] uppercase">
          New Season Collection
        </p>
      </div>

      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight uppercase italic">
        Gear Up <br />
        <span className="text-lime-400 shadow-lime-400/20 drop-shadow-2xl">Play Hard</span>
      </h1>

      <p className="mt-6 text-white/60 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md lg:max-w-lg">
        Push your limits with our high-performance gear. Designed for those who never stop moving.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        {/* دکمه اصلی با قابلیت کلیک */}
        <button 
          onClick={handleShopRedirect}
          className="group w-full sm:w-auto px-10 py-4 rounded-full bg-lime-400 text-black font-black hover:bg-white transition-all duration-300 flex items-center justify-center gap-3"
        >
          SHOP NOW 
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
        
        {/* دکمه ثانویه - این هم می‌تواند به بخش تخفیف‌ها یا همان فروشگاه برود */}
        <button 
          onClick={handleDealsRedirect}
          className="w-full sm:w-auto px-10 py-4 rounded-full border border-white/10 text-white font-bold hover:bg-white/5 transition-all flex items-center justify-center gap-2"
        >
          EXPLORE DEALS
        </button>
      </div>

    </div>
  );
}
