// src/features/flashDeals/components/Countdown.jsx
import { useEffect, useMemo, useState } from "react";

const diffParts = (ms) => {
  const clamped = Math.max(0, ms);
  const totalSeconds = Math.floor(clamped / 1000);
  return {
    days: Math.floor(totalSeconds / (3600 * 24)),
    hours: Math.floor((totalSeconds % (3600 * 24)) / 3600),
    mins: Math.floor((totalSeconds % 3600) / 60),
    secs: totalSeconds % 60,
  };
};

export default function Countdown({ endsAt }) {
  const endMs = useMemo(() => new Date(endsAt).getTime(), [endsAt]);
  const [nowMs, setNowMs] = useState(Date.now());

  useEffect(() => {
    const t = setInterval(() => setNowMs(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const { days, hours, mins, secs } = diffParts(endMs - nowMs);

  const Slot = ({ val, label }) => (
    <div className="flex items-baseline gap-1">
      <span className="text-[#86ff2a] text-xl font-black tabular-nums">
        {String(val).padStart(2, '0')}
      </span>
      <span className="text-white/40 text-[10px] font-bold uppercase tracking-tighter">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex items-center gap-4 sm:gap-6">
      <Slot val={days} label="days" />
      <Slot val={hours} label="hrs" />
      <Slot val={mins} label="mins" />
      <Slot val={secs} label="secs" />
    </div>
  );
}
