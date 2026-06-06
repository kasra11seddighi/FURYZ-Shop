// src/features/Topbar/components/Profile.jsx
import { Link } from "react-router";
import { useAuth } from "../../../context/AuthContext";
import { HiOutlineUser, HiOutlineLogout } from "react-icons/hi";

export default function Profile() {
  const { user, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return (
      <Link
        to="/login"
        className="flex h-10 items-center justify-center rounded-xl border border-white/10 px-4 text-sm font-bold text-white transition-colors hover:bg-white/5 active:scale-95"
      >
        Login
      </Link>
    );
  }

  return (
    <div className="group relative flex items-center gap-3">
      {/* دکمه پروفایل */}
      <Link
        to="/profile"
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white transition-colors hover:border-red-500/50 hover:bg-red-500/10"
        title={user.name}
      >
        <HiOutlineUser size={20} />
      </Link>

      {/* دکمه خروج سریع - می‌توانی این را داخل یک دراپ‌داون هم بگذاری */}
      <button
        onClick={logout}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/40 transition-colors hover:text-red-500"
        title="خروج"
      >
        <HiOutlineLogout size={20} />
      </button>
      
      {/* نمایش نام در دسکتاپ (اختیاری) */}
      {/* <span className="hidden xl:block text-xs font-medium text-white/60">
        {user.name}
      </span> */}
    </div>
  );
}
