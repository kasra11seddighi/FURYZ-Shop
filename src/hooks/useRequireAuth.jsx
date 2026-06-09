// hooks/useRequireAuth.js
import { useAuth } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router";
import { toast } from "react-hot-toast";

export const useRequireAuth = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  return () => {
    if (!isAuthenticated) {
      toast.error("Please login first");

      navigate("/login", {
        state: { from: location },
      });

      return false;
    }

    return true;
  };
};
