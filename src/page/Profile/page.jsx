import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";

// Components
import Addresses from "./Components/Addresses";
import Favorits from "./Components/Favorits";
import Orders from "./Components/Orders";
import Security from "./Components/Security";
import GetFromLocal from "./Components/GetFromLocal";

import { User, Package, MapPin, Heart, Shield, LogOut } from "lucide-react";

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile Info", icon: <User size={18} />, component: <GetFromLocal /> },
    { id: "orders", label: "My Orders", icon: <Package size={18} />, component: <Orders /> },
    { id: "favorites", label: "Wishlist", icon: <Heart size={18} />, component: <Favorits /> },
    { id: "addresses", label: "Addresses", icon: <MapPin size={18} />, component: <Addresses /> },
    { id: "security", label: "Security", icon: <Shield size={18} />, component: <Security /> },
  ];

  if (!user) return <div className="text-white p-20 text-center">Please login to view profile.</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-white">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 space-y-2">
          <div className="p-4 mb-6 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Logged in as</p>
            <p className="text-lg font-black text-lime-400 truncate">{user.name}</p>
          </div>

          <nav className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all
                ${activeTab === tab.id 
                  ? "bg-lime-400 text-black shadow-lg shadow-lime-400/20" 
                  : "hover:bg-white/5 text-gray-400 hover:text-white"}`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
            
            <button 
              onClick={logout}
              className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-500/10 transition-all mt-8"
            >
              <LogOut size={18} />
              Sign Out
            </button>
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {tabs.find(t => t.id === activeTab)?.component}
          </div>
        </main>

      </div>
    </div>
  );
}
