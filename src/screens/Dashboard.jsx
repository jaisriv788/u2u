import { useEffect } from "react";
import useUserStore from "../store/userStore";
import useConstStore from "../store/constStore";
import useDashboardStore from "../store/dashboardStore";
import axios from "axios";
import Marquee from "../components/Dashboard/Marquee";
import Intro from "../components/Dashboard/Intro";
import Card from "../components/Dashboard/Card";
import { FaWallet } from "react-icons/fa";

function Dashboard() {
  const { user, isConnected, token } = useUserStore();
  const { baseUrl } = useConstStore();
  const { dashboardData, setDashBoardData } = useDashboardStore();

  const data = [
    {
      title: "WITHDRAW BALANCE",
      balance: dashboardData.user_wallet.balance,
      icon: FaWallet,
    },
    {
      title: "DEPOSIT BALANCE",
      balance: dashboardData.user_wallet.deposit_balance,
      icon: FaWallet,
    },
    {
      title: "DIRECT TEAM",
      balance: dashboardData.total_direct,
      icon: FaWallet,
    },
    { title: "LEVEL TEAM", balance: dashboardData.all_team, icon: FaWallet },
  ];

  useEffect(() => {
    const fetchUserData = async () => {
      if (user && isConnected) {
        try {
          const response = await axios.post(
            `${baseUrl}dashboard`,
            {
              user_id: user.id,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          // console.log("User data:", response.data);
          if (response.data.status == 200) {
            setDashBoardData(response.data.data);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };
    fetchUserData();
  }, [user, isConnected]);

  return (
    <div className="flex-1 p-4">
      <Marquee />
      <Intro />
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-5">
        {data.map((item, index) => (
          <Card
            key={index}
            icon={item.icon}
            title={item.title}
            balance={item.balance}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
