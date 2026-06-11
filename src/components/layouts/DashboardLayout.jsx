import { Outlet } from "react-router";
import Topbar from "../../features/Topbar/Topbar";
import AppBackground from "../common/ui/AppBackground";
import { ScrollRestoration } from "react-router";
import Footer from "../../features/Footer/Footer";
import { useEffect } from "react";
// ایمپورت کردن چت‌بات
import ChatSupport from "../common/ui/ChatSupport"; 

const DashboardLayout = () => {
  return (
    <AppBackground> 
      <ScrollRestoration />  
      <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
        <Topbar />
        
        <main className="flex-grow w-full">
          <Outlet />
        </main>

        <Footer />

        {/* 
            چت‌بات را اینجا قرار می‌دهیم. 
            چون Fixed است، فرقی نمی‌کند کجای DOM باشد، 
            اما اینجا بهترین جا برای مدیریت لایه‌هاست.
        */}
        <ChatSupport />
      </div>
    </AppBackground>
  );
};

export default DashboardLayout;
