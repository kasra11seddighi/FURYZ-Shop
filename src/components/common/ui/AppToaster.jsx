import { Toaster } from "react-hot-toast";

export default function AppToaster() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: "#101010",
          color: "#fff",
          border: "1px solid rgba(163,230,53,0.25)",
        },
      }}
    />
  );
}
