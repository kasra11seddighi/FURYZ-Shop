import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";
import { loginSchema } from "./loginSchema";

import { useAuth } from "../../context/AuthContext";

import { useNavigate, useLocation, Link } from "react-router";

import { toast } from "react-hot-toast";

/*
 LoginPage
 ---------------------------------
 صفحه ورود کاربر

 ویژگی‌ها:
 - validation با react-hook-form + zod
 - loading state هنگام login
 - ذخیره کاربر در localStorage از طریق AuthContext
 - redirect بعد از login
*/

export default function LoginPage() {
  /*
   گرفتن تابع login از AuthContext
   این تابع کاربر را در localStorage ذخیره می‌کند
  */
  const { login } = useAuth();

  /*
   ابزارهای navigation
  */
  const navigate = useNavigate();
  const location = useLocation();

  /*
   state برای نمایش یا مخفی کردن پسورد
  */
  const [showPassword, setShowPassword] = useState(false);

  /*
   اگر کاربر از صفحه protected آمده باشد
   بعد از login به همان صفحه برگردد
  */
  const from = location.state?.from?.pathname || "/profile";

  /*
   تنظیمات react-hook-form
  */
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  /*
   تابع submit فرم
  */
  const onSubmit = async (data) => {
    try {
      /*
       شبیه‌سازی درخواست سرور
      */
      await new Promise((resolve) => setTimeout(resolve, 1500));

      /*
       ساخت آبجکت کاربر
      */
      const userData = {
        name: data.email.split("@")[0],
        email: data.email,
        role: "developer",
      };

      /*
       login از طریق AuthContext
       → داخل localStorage ذخیره می‌شود
      */
      login(userData);

      /*
       پیام موفقیت
      */
      toast.success(`Welcome back, ${userData.name}!`);

      /*
       redirect به صفحه قبلی
      */
      navigate(from, { replace: true });

    } catch (error) {
      console.error(error);
      toast.error("Authentication failed. Please try again.");
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center p-4">

      {/* Card Container */}
      <div className="w-full max-w-[400px] space-y-8 rounded-3xl border border-white/10 bg-black/40 p-10 backdrop-blur-2xl shadow-2xl">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-black tracking-tighter text-white">
            Sign In
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Enter your credentials to access your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
              Email Address
            </label>

            <div className="relative group">
              <Mail
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-red-500 transition-colors"
              />

              <input
                {...register("email")}
                placeholder="name@company.com"
                className={`w-full rounded-xl border bg-white/5 py-3.5 pl-10 pr-4 text-sm text-white outline-none transition-all focus:ring-2
                ${
                  errors.email
                    ? "border-red-500/50 focus:ring-red-500/20"
                    : "border-white/10 focus:ring-red-500/40"
                }`}
              />
            </div>

            {errors.email && (
              <p className="text-[11px] font-medium text-red-500 ml-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-2">

            <div className="flex justify-between items-center px-1">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Password
              </label>

              <button
                type="button"
                className="text-[11px] text-red-500 hover:underline"
              >
                Forgot?
              </button>
            </div>

            <div className="relative group">

              <Lock
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-red-500 transition-colors"
              />

              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="••••••••"
                className={`w-full rounded-xl border bg-white/5 py-3.5 pl-10 pr-12 text-sm text-white outline-none transition-all focus:ring-2
                ${
                  errors.password
                    ? "border-red-500/50 focus:ring-red-500/20"
                    : "border-white/10 focus:ring-red-500/40"
                }`}
              />

              {/* Toggle password visibility */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {errors.password && (
              <p className="text-[11px] font-medium text-red-500 ml-1">
                {errors.password.message}
              </p>
            )}

          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative w-full overflow-hidden rounded-xl bg-red-600 py-4 font-bold text-white transition-all hover:bg-red-700 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <div className="flex items-center justify-center gap-2">
              {isSubmitting ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                "Sign In to Dashboard"
              )}
            </div>
          </button>

        </form>

        {/* Register Link */}
        <p className="text-center text-xs text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-red-500 hover:underline"
          >
            Create Account
          </Link>
        </p>

      </div>
    </div>
  );
}
