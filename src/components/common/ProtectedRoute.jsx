import { Navigate, Outlet } from "react-router";
import useUserStore from "../../store/userStore";
import useModalStore from "../../store/modalStore";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { useEffect } from "react";

function ProtectedRoute() {
  const { isConnected } = useUserStore();
  const { isSidebarOpen, setIsSidebarOpen } = useModalStore();

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      setIsSidebarOpen(true);
    } else {
      setIsSidebarOpen(false);
    }
  }, []);

  return isConnected ? (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <div className="flex-1 flex relative">
        {isSidebarOpen && <SideBar />}
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to="/signin" replace />
  );
}

export default ProtectedRoute;
