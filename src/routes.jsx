import { createBrowserRouter } from "react-router";

// Layouts
import DashboardLayout from "./components/layouts/DashboardLayout";

// Guard
import ProtectedRoute from "./components/common/ProtectedRoute";

// Auth Pages
import LoginPage from "./page/Login/page";
import RegisterPage from "./page/Register/page"; 

// General Pages
import Home from "./page/Home/page";
import Shop from "./page/Shop/page";
// import Categories from "./page/Categories/page"; // حذف شد
// import Category from "./page/Category/page"; // حذف شد
import Product from "./page/Product/page";
import Cart from "./page/Cart/page";
import Profile from "./page/Profile/page";
import About from "./page/About/page";
import Blog from "./page/Blog/page";
import NotFound from "./page/NotFound/page";
import BlogDetailsPage from "./page/Blog/BlogDetailsPage";
import SearchResults from "./page/SearchResults/SearchResults"
import Checkout from "./page/Checkout/page.jsx";
import Payment from "./page/Payment/page.jsx";

// Header Menu Pages
import NewArrivals from "./page/NewArrivals/page";
import Deals from "./page/Deals/page";
import Brands from "./page/Brands/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> }, // اصلاح کاما
      { path: "new", element: <NewArrivals /> },
      { path: "sale", element: <Deals /> },
      { path: "brands", element: <Brands /> },
      { path: "about", element: <About /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:slug", element: <BlogDetailsPage /> },
      { path: "payment", element: <Payment /> },

{
  path: "product/:slug",
  element: <Product />,
},
{ path: "search", element: <SearchResults /> }, 
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },


      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },

      { 
        path: "profile", 
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ) 
      },
      // { 
      //   path: "wishlist", 
      //   element: (
      //     <ProtectedRoute>
      //       <Wishlist />
      //     </ProtectedRoute>
      //   ) 
      // },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
