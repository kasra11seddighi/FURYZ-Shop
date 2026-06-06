import { Suspense } from "react";
import { RouterProvider } from "react-router";
import router from "./routes";

import AppToaster from "./components/common/ui/AppToaster";
import LoadingScreen from "./components/common/LoadingScreen";

import { AuthProvider } from "./context/AuthContext";
import { SearchProvider } from "./features/Search/SearchContext";

const App = () => {
  return (
    <AuthProvider>
      <SearchProvider>
        <AppToaster />

        <Suspense fallback={<LoadingScreen />}>
          <RouterProvider router={router} />
        </Suspense>

      </SearchProvider>
    </AuthProvider>
  );
};

export default App;
