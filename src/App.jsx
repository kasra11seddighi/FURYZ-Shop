import { RouterProvider } from "react-router";
import router from "./routes";
import AppToaster from "./components/common/ui/AppToaster";
import { AuthProvider } from "./context/AuthContext";
// این را اضافه کن (مسیر را با توجه به فولدربندی‌ات چک کن)
import { SearchProvider } from "./features/Search/SearchContext"; 

const App = () => {
  return (
    <AuthProvider>
      {/* SearchProvider باید اینجا اضافه شود تا کامپوننت Search به آن دسترسی داشته باشد */}
      <SearchProvider>
        <AppToaster />
        <RouterProvider router={router} />
      </SearchProvider>
    </AuthProvider>
  );
};

export default App;
