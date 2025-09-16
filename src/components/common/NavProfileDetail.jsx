import { FaUser } from "react-icons/fa";
import { GiBanknote } from "react-icons/gi";
import { VscSignOut } from "react-icons/vsc";
import useUserStore from "../../store/userStore";
import useDashboardStore from "../../store/dashboardStore";

function NavProfileDetail() {
  const { user, setUser, setIsConnected } = useUserStore();
  const { dashboardData, setDashBoardData } = useDashboardStore();

  return (
    <div className="absolute z-50 bg-[#1F2C24] rounded right-6 top-13 sm:min-w-90 p-1 text-xs sm:text-sm">
      <div className="flex items-center gap-3 px-4 rounded py-1 cursor-pointer hover:bg-[#4f5e54] transition ease-in-out duration-300">
        <FaUser className="bg-[#4f5e54] p-1 text-2xl rounded-full" />
        <div className="text-xs font-semibold ">
          <div>{user.username}</div>
          <div>{user.email}</div>
        </div>
      </div>

      <div className="h-[1px] bg-[#4f5e54] my-1"></div>

      <div className="flex items-center gap-3 px-4 rounded py-1 cursor-pointer  hover:bg-[#4f5e54] transition ease-in-out duration-300">
        <GiBanknote className="bg-[#4f5e54] p-1 text-2xl rounded-full" />
        <div className="text-xs font-semibold ">
          <div>
            Delegator Amount ${dashboardData.total_investment} / [Rank: U2
            SILVER]
          </div>
        </div>
      </div>

      <div className="h-[1px] bg-[#4f5e54] my-1"></div>

      <div
        onClick={() => {
          setUser(null);
          setIsConnected(false);
          setDashBoardData(null);
        }}
        className="flex items-center gap-3 px-4 rounded py-1 cursor-pointer  hover:bg-[#4f5e54] transition ease-in-out duration-300"
      >
        <VscSignOut className="bg-[#4f5e54] p-1 text-2xl rounded-full" />
        <div className="text-xs font-semibold ">
          <div>Signout</div>
        </div>
      </div>
    </div>
  );
}

export default NavProfileDetail;
