// src/features/Topbar/components/Logo.jsx
import { useNavigate } from "react-router";

export default function Logo() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate("/")}
      className="flex items-center gap-2 select-none"
      aria-label="Go home"
    >
      <img
        src="/image/Logo.png"
        alt="Furyz Logo"
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-white/10"
      />
      <span className="text-white font-black text-lg sm:text-xl tracking-widest">
        FURYZ
      </span>
    </button>
  );
}
