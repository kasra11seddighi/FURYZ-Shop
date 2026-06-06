// src/features/flashDeals/components/FlashDealsBar.jsx
import { Link } from "react-router";
import Countdown from "./Countdown";

// src/features/flashDeals/components/FlashDealsBar.jsx

export default function FlashDealsBar({ data }) {
  return (

    <div className="mx-auto max-w-7xl px-4 py-2 mt-8"> 
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 rounded-xl border border-[#86ff2a]/20 bg-[#080c08] p-4 lg:px-8">
        
       
        
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#86ff2a]/10">
            <span className="text-[#86ff2a] text-lg">⚡</span>
          </div>
          <div>
            <h3 className="text-sm font-black tracking-wider text-white sm:text-base">
              {data.title}
            </h3>
            <p className="text-[11px] text-white/40 sm:text-xs">
              {data.subtitle}
            </p>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <Countdown endsAt={data.endsAt} />
        </div>

        <div className="shrink-0">
          <Link
            to={data.cta.href}
            className="inline-flex h-10 items-center justify-center rounded-lg bg-[#86ff2a] px-6 text-[11px] font-[900] tracking-tighter text-black transition-all hover:scale-[1.02] hover:brightness-110 active:scale-95"
          >
            {data.cta.label}
          </Link>
        </div>

      </div>
    </div>
  );
}

