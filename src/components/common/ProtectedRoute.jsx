import { Navigate, useLocation } from "react-router";
import { useAuth } from "../../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  // اگر هنوز در حال چک کردن وضعیت لاگین هستیم، چیزی نشان نده (یا یک Loading ساده)
  if (loading) return null; 

  if (!isAuthenticated) {
    // کاربر را به لاگین می‌فرستیم و آدرس فعلی را ذخیره می‌کنیم تا بعد از لاگین به همین‌جا برگردد
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
