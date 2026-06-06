import { useState } from "react";
import toast from "react-hot-toast";

export default function Security() {
  const [loading, setLoading] = useState(false);
  const [is2FA, setIs2FA] = useState(false);
  
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleUpdatePassword = () => {
    const { currentPassword, newPassword, confirmPassword } = passwords;

    // 1. فیلدهای خالی را چک می‌کنیم
    if (!currentPassword || !newPassword || !confirmPassword) {
      return toast.error("Please fill all password fields");
    }

    // 2. تطابق پسورد جدید و تاییدیه
    if (newPassword !== confirmPassword) {
      return toast.error("New passwords do not match");
    }

    // 3. دریافت اطلاعات کاربر فعلی و لیست کل کاربران
    const currentUser = JSON.parse(localStorage.getItem("furyz_user"));
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (!currentUser) return toast.error("User not found. Please login again.");

    // 4. تایید پسورد فعلی
    if (currentPassword !== currentUser.password) {
      return toast.error("Current password is incorrect");
    }

    setLoading(true);

    // شبیه‌سازی پروسه شبکه
    setTimeout(() => {
      // 5. آپدیت کردن پسورد در هر دو محل ذخیره‌سازی
      const updatedUser = { ...currentUser, password: newPassword };
      
      // آپدیت در لیست کل کاربران (برای لاگین‌های بعدی)
      const updatedAllUsers = allUsers.map((u) =>
        u.email === currentUser.email ? { ...u, password: newPassword } : u
      );

      localStorage.setItem("furyz_user", JSON.stringify(updatedUser));
      localStorage.setItem("users", JSON.stringify(updatedAllUsers));

      toast.success("Security settings updated successfully!");
      
      // ریست کردن فرم
      setPasswords({ currentPassword: "", newPassword: "", confirmPassword: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-8">
      <h2 className="text-xl font-bold border-b border-white/5 pb-4">Account Security</h2>
      
      <div className="max-w-md space-y-6">
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-white/60">Change Password</h3>
          
          <input 
            type="password" 
            placeholder="Current Password" 
            value={passwords.currentPassword}
            onChange={(e) => setPasswords({...passwords, currentPassword: e.target.value})}
            className="w-full h-12 bg-black/40 border border-white/10 rounded-xl px-4 focus:border-lime-400 outline-none transition-colors" 
          />
          
          <input 
            type="password" 
            placeholder="New Password" 
            value={passwords.newPassword}
            onChange={(e) => setPasswords({...passwords, newPassword: e.target.value})}
            className="w-full h-12 bg-black/40 border border-white/10 rounded-xl px-4 focus:border-lime-400 outline-none transition-colors" 
          />

          <input 
            type="password" 
            placeholder="Confirm New Password" 
            value={passwords.confirmPassword}
            onChange={(e) => setPasswords({...passwords, confirmPassword: e.target.value})}
            className="w-full h-12 bg-black/40 border border-white/10 rounded-xl px-4 focus:border-lime-400 outline-none transition-colors" 
          />
        </div>

        {/* 2FA Toggle */}
        <div className="flex items-center justify-between p-4 bg-lime-400/5 border border-lime-400/20 rounded-xl">
          <div>
            <p className="text-sm font-bold">Two-Factor Authentication</p>
            <p className="text-xs text-white/40">Add an extra layer of security</p>
          </div>
          <div 
            onClick={() => setIs2FA(!is2FA)}
            className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors duration-300 ${is2FA ? 'bg-lime-400' : 'bg-white/10'}`}
          >
             <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${is2FA ? 'left-7' : 'left-1'}`}></div>
          </div>
        </div>

        <button 
          onClick={handleUpdatePassword}
          disabled={loading}
          className={`w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-all ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? "Updating..." : "Update Security Settings"}
        </button>
      </div>
    </div>
  );
}
