import HeroLeft from "./components/HeroLeft";

const heroBg = "image/backT.png";

export default function Hero() {
  return (
    <section
      className="relative min-h-[600px] lg:min-h-[750px] w-full flex items-center overflow-hidden"
    >
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat z-0 transition-all duration-700"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: 'center right' // در موبایل فوکوس روی سمت راست تصویر (جایی که سوژه هست) باشد
        }}
      />

      {/* Overlay: برای خوانایی متن روی عکس (بسیار مهم) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="w-full lg:w-1/2">
             <HeroLeft />
          </div>
        </div>
      </div>

      {/* Decorative Neon Element (Optional) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20" />
    </section>
  );
}
