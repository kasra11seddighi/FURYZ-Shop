import { createHashRouter } from "react-router";
import { lazy } from "react";

// Layouts
import DashboardLayout from "./components/layouts/DashboardLayout";

// Guard
import ProtectedRoute from "./components/common/ProtectedRoute";

// Lazy Pages
const LoginPage = lazy(() => import("./page/Login/page"));
const RegisterPage = lazy(() => import("./page/Register/page"));

const Home = lazy(() => import("./page/Home/page"));
const Shop = lazy(() => import("./page/Shop/page"));
const Product = lazy(() => import("./page/Product/page"));
const Cart = lazy(() => import("./page/Cart/page"));
const Profile = lazy(() => import("./page/Profile/page"));
const About = lazy(() => import("./page/About/page"));
const Blog = lazy(() => import("./page/Blog/page"));
const BlogDetailsPage = lazy(() => import("./page/Blog/BlogDetailsPage"));
const SearchResults = lazy(() => import("./page/SearchResults/SearchResults"));
const Checkout = lazy(() => import("./page/Checkout/page.jsx"));
const Payment = lazy(() => import("./page/Payment/page.jsx"));

const NewArrivals = lazy(() => import("./page/NewArrivals/page"));
const Deals = lazy(() => import("./page/Deals/page"));
const Brands = lazy(() => import("./page/Brands/page"));

const NotFound = lazy(() => import("./page/NotFound/page"));

const router = createHashRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "new", element: <NewArrivals /> },
      { path: "sale", element: <Deals /> },
      { path: "brands", element: <Brands /> },
      { path: "about", element: <About /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:slug", element: <BlogDetailsPage /> },
      { path: "payment", element: <Payment /> },
      { path: "product/:slug", element: <Product /> },
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
        ),
      },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
