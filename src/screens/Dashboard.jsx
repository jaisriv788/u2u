import { useEffect } from "react";
import useUserStore from "../store/userStore";

function Dashboard() {
  const { user, isConnected } = useUserStore();

  useEffect(() => {
    console.log("Zustand user:", user);
    console.log("Zustand isConnected:", isConnected);
  }, [user, isConnected]);

  return <div className="flex-1 bg-red-400">Dashboard</div>;
}

export default Dashboard;
