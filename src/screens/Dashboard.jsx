import { useEffect } from "react";
import useUserStore from "../store/userStore";
import useConstStore from "../store/constStore";
import useDashboardStore from "../store/dashboardStore";
import axios from "axios";
import Marquee from "../components/Dashboard/Marquee";
import Intro from "../components/Dashboard/Intro";
import Card from "../components/Dashboard/Card";
import { FaWallet } from "react-icons/fa";
import Graph from "../components/Dashboard/Graph";
import DetailedCards from "../components/Dashboard/DetailedCards";
import Link from "../components/Dashboard/Link";
import Img from "../components/Dashboard/Img";
import YouTube from "../components/Dashboard/YouTube";
import Transaction from "../components/Dashboard/Transaction";
import Footer from "../components/common/Footer";

function Dashboard() {
  const { user, isConnected, token } = useUserStore();
  const { baseUrl, setScreenLoading } = useConstStore();
  const { dashboardData, setDashBoardData } = useDashboardStore();

  useEffect(() => {
    setScreenLoading(true);
    const fetchUserData = async () => {
      if (user && isConnected) {
        try {
          const response = await axios.post(
            `${baseUrl}dashboard`,
            {
              user_id: user?.id,
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
        } finally {
          setScreenLoading(false);
        }
      }
    };
    fetchUserData();
  }, [user, isConnected]);

  const Data = [
    {
      title: "WITHDRAW BALANCE",
      balance: dashboardData?.user_wallet?.balance.toFixed(4),
      icon: FaWallet,
    },
    {
      title: "DEPOSIT BALANCE",
      balance: dashboardData?.user_wallet?.deposit_balance.toFixed(4),
      icon: FaWallet,
    },
    {
      title: "DIRECT TEAM",
      balance: dashboardData?.total_direct,
      icon: FaWallet,
    },
    { title: "LEVEL TEAM", balance: dashboardData?.all_team, icon: FaWallet },
  ];

  const Data2 = [
    {
      title: "DELEGATOR REWARD",
      amount: dashboardData?.daily_profit.toFixed(4),
      tag: (
        <div>
          Earn delegator rewards{" "}
          <span className="text-[#1FD022] font-semibold">10.8%</span> per month
        </div>
      ),
      showBtn: true,
    },
    {
      title: "DIRECT BONUS",
      amount: dashboardData?.direct_income.toFixed(4),
      tag: (
        <div>
          Earn direct bonus up to{" "}
          <span className="text-[#1FD022] font-semibold">10%</span> from team
        </div>
      ),
      showBtn: true,
    },
    {
      title: "DELEGATOR LEVEL BONUS",
      amount: dashboardData?.level_profit.toFixed(4),
      tag: (
        <div>
          Earn passive delegator level rewards up to{" "}
          <span className="text-[#1FD022] font-semibold">20</span> level
        </div>
      ),
      showBtn: true,
    },
    {
      title: "RANK & REWARD",
      amount: dashboardData?.rank_income.toFixed(4),
      tag: (
        <div>
          Qualify rank & earn up to{" "}
          <span className="text-[#1FD022] font-semibold">$ 20,00,000</span>
        </div>
      ),
      showBtn: true,
    },
  ];

  return (
    <div className="flex-1 p-4 flex flex-col gap-3">
      <Marquee />
      <Intro />
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-5">
        {Data.map((item, index) => (
          <Card
            key={index}
            icon={item.icon}
            title={item.title}
            balance={item.balance}
          />
        ))}
      </div>
      <Graph />
      <div className="grid lg:grid-cols-2 gap-3 sm:gap-5">
        {Data2.map((item, index) => (
          <DetailedCards key={index} title={item.title} amount={item.amount}>
            {item.tag}
          </DetailedCards>
        ))}
      </div>
      <Link />
      <Img />
      <YouTube />
      <Transaction />
      <Footer />
    </div>
  );
}

export default Dashboard;
