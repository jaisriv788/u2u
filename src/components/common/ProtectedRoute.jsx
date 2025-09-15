import { Navigate, Outlet } from "react-router";
import useUserStore from "../../store/userStore";
import Navbar from "./Navbar";

function ProtectedRoute() {
  const { isConnected } = useUserStore();

  return isConnected ? (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/signin" replace />
  );
}

export default ProtectedRoute;
