import React from "react";
import { useAuth } from "../../../context/AuthContext"; // استفاده از Context به جای خواندن مستقیم
import { User, Mail, Shield , Check } from "lucide-react";

export default function GetFromLocal() {
  const { user } = useAuth(); // مستقیم اطلاعات را از AuthContext بگیر

  if (!user) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
        <p className="text-gray-400">No user data available.</p>
      </div>
    );
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <h2 className="text-2xl font-black mb-8 border-b border-white/5 pb-4">
        Account Information
      </h2>

      <div className="grid gap-6">
        {/* Name Field */}
        <div className="flex items-center gap-4 p-4 bg-black/40 border border-white/5 rounded-2xl">
          <div className="w-12 h-12 bg-lime-400/10 rounded-xl flex items-center justify-center text-lime-400">
            <User size={24} />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-tighter">Full Name</p>
            <p className="text-lg font-medium text-white">{user.name}</p>
          </div>
        </div>

        {/* Email Field */}
        <div className="flex items-center gap-4 p-4 bg-black/40 border border-white/5 rounded-2xl">
          <div className="w-12 h-12 bg-blue-400/10 rounded-xl flex items-center justify-center text-blue-400">
            <Mail size={24} />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-tighter">Email Address</p>
            <p className="text-lg font-medium text-white">{user.email}</p>
          </div>
        </div>

        {/* Role Field */}
        <div className="flex items-center gap-4 p-4 bg-black/40 border border-white/5 rounded-2xl">
          <div className="w-12 h-12 bg-purple-400/10 rounded-xl flex items-center justify-center text-purple-400">
            <Shield size={24} />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-tighter">Account Status</p>
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium text-white capitalize">{user.role || "Member"}</span>
              <span className="px-2 py-0.5 bg-lime-400 text-black text-[10px] font-black rounded-full uppercase">Verified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
