import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Loader2, Mail, User, Lock, MapPin } from "lucide-react";
import { registerSchema } from "./registerSchema";

import { useAuth } from "../../context/AuthContext";
import { useLocalStorage } from "../../context/hooks/useLocalStorage";

import { useNavigate, Link } from "react-router";
import { toast } from "react-hot-toast";

/*
 RegisterPage
 ---------------------------------
 صفحه ثبت نام کاربر

 ویژگی‌ها:
 - validation با react-hook-form + zod
 - ذخیره کاربران در localStorage
 - جلوگیری از ثبت ایمیل تکراری
 - auto login بعد از ثبت نام
 - ذخیره موقت آدرس (تا زمان اتصال به backend)
*/

export default function RegisterPage() {

  const { login } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // لیست کاربران ذخیره شده
  const [users, setUsers] = useLocalStorage("users", []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {

      await new Promise((resolve) => setTimeout(resolve, 1200));

      // بررسی تکراری نبودن ایمیل
      const userExists = users.find(
        (u) => u.email === data.email
      );

      if (userExists) {
        toast.error("Email already registered");
        return;
      }

      /*
        ساخت کاربر جدید
        ✅ آدرس موقتاً در localStorage ذخیره می‌شود
        ⛔ در نسخه production باید از backend ذخیره شود
      */
      const newUser = {
        name: data.name,
        email: data.email,
        password: data.password,

        // موقت تا زمانی که backend نداریم
        address: data.address || "",

        role: "user",
      };

      // ذخیره در localStorage
      setUsers([...users, newUser]);

      // login خودکار
      login(newUser);

      toast.success("Account created successfully!");
      navigate("/profile");

    } catch (error) {
      console.error(error);
      toast.error("Registration failed. Try again.");
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center p-4">

      <div className="w-full max-w-[450px] space-y-8 rounded-3xl border border-white/10 bg-black/40 p-10 backdrop-blur-2xl shadow-2xl">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-black tracking-tighter text-white">
            Create Account
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Join us to get the best experience
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Name */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
              Full Name
            </label>

            <div className="relative group">
              <User
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-red-500"
              />
              <input
                {...register("name")}
                placeholder="John Doe"
                className={`w-full rounded-xl border bg-white/5 py-3.5 pl-10 pr-4 text-sm text-white outline-none focus:ring-2
                ${
                  errors.name
                    ? "border-red-500/50 focus:ring-red-500/20"
                    : "border-white/10 focus:ring-red-500/40"
                }`}
              />
            </div>
            {errors.name && (
              <p className="text-[11px] text-red-500 ml-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
              Email
            </label>

            <div className="relative group">
              <Mail
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-red-500"
              />
              <input
                {...register("email")}
                placeholder="name@example.com"
                className={`w-full rounded-xl border bg-white/5 py-3.5 pl-10 pr-4 text-sm text-white outline-none focus:ring-2
                ${
                  errors.email
                    ? "border-red-500/50 focus:ring-red-500/20"
                    : "border-white/10 focus:ring-red-500/40"
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-[11px] text-red-500 ml-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Address */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
              Address
            </label>

            <div className="relative group">
              <MapPin
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-red-500"
              />
              <input
                {...register("address")}
                placeholder="Your address"
                className="w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-10 pr-4 text-sm text-white outline-none focus:ring-2 focus:ring-red-500/40"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
              Password
            </label>

            <div className="relative group">
              <Lock
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-red-500"
              />

              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="••••••••"
                className={`w-full rounded-xl border bg-white/5 py-3.5 pl-10 pr-12 text-sm text-white outline-none focus:ring-2
                ${
                  errors.password
                    ? "border-red-500/50 focus:ring-red-500/20"
                    : "border-white/10 focus:ring-red-500/40"
                }`}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
              >
                {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
              </button>
            </div>

            {errors.password && (
              <p className="text-[11px] text-red-500 ml-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
              Confirm Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              {...register("confirmPassword")}
              placeholder="••••••••"
              className={`w-full rounded-xl border bg-white/5 py-3.5 px-4 text-sm text-white outline-none focus:ring-2
              ${
                errors.confirmPassword
                  ? "border-red-500/50 focus:ring-red-500/20"
                  : "border-white/10 focus:ring-red-500/40"
              }`}
            />

            {errors.confirmPassword && (
              <p className="text-[11px] text-red-500 ml-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-red-600 py-4 font-bold text-white hover:bg-red-700 transition disabled:opacity-70"
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin mx-auto" size={20}/>
            ) : (
              "Create Free Account"
            )}
          </button>

        </form>

        <p className="text-center text-xs text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-red-500 hover:underline font-bold"
          >
            Sign In
          </Link>
        </p>

      </div>
    </div>
  );
}
