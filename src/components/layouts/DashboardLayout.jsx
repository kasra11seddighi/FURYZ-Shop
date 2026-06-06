import { Outlet } from "react-router";
import Topbar from "../../features/Topbar/Topbar";
import AppBackground from "../common/ui/AppBackground";
import { ScrollRestoration } from "react-router";
    import Footer from "../../features/Footer/Footer";
    import {useEffect} from "react"



const DashboardLayout = () => {


  return (
    <AppBackground> 
      <ScrollRestoration />  
      {/* 
          h-screen یا min-h-screen را اینجا حتما داشته باشیم.
          اضافه کردن w-full برای اطمینان از عرض کامل.
      */}
      <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
        <Topbar />
        
        {/* 
            این بخش باید تمام فضای خالی را "غصب" کند تا فوتر به پایین هل داده شود.
        */}
        <main className="flex-grow w-full">
          <Outlet />
        </main>

        <Footer />  
      </div>
    </AppBackground>
  );
};



export default DashboardLayout;
