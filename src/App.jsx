//normal imports
import { Route, Routes } from "react-router";

//----------------------------------------------------------------------

//screens imports
//main screens
import Landing from "./screens/Landing";
import Signin from "./screens/Signin";
import Signup from "./screens/Signup";
import Dashboard from "./screens/Dashboard";

//authentication screens
import Profile from "./screens/Authentication/Profile";
import LoginPassword from "./screens/Authentication/LoginPassword";

//network screens
import MyDirect from "./screens/Network/MyDirect";
import TeamNetwork from "./screens/Network/TeamNetwork";
import LevelVolume from "./screens/Network/LevelVolume";
import RankVolume from "./screens/Network/RankVolume";

//income screens
import DailyDelegatorReward from "./screens/Income/DailyDelegatorReward";
import DirectBonus from "./screens/Income/DirectBonus";
import DelegatorLevelBonus from "./screens/Income/DelegatorLevelBonus";
import RankAndRewards from "./screens/Income/RankAndRewards";

//delegator screens
import DelegatorPPActivation from "./screens/Delegator/DelegatorPPActivation";
import PromoPackHistory from "./screens/Delegator/PromoPackHistory";
import VerificationofNode from "./screens/Delegator/VerificationofNode";

// deposit & withdraw screens
import Delegate from "./screens/WalletAndDelegator/Delegate";
import DelegatorReport from "./screens/WalletAndDelegator/DelegatorReport";
import DepositeFund from "./screens/WalletAndDelegator/DepositeFund";
import DepositeReport from "./screens/WalletAndDelegator/DepositeReport";
import Withdraw from "./screens/WalletAndDelegator/Withdraw";
import WithdrawReport from "./screens/WalletAndDelegator/WithdrawReport";

//----------------------------------------------------------------------
//Component imports
import ProtectedRoute from "./components/common/ProtectedRoute";
import PublicRoute from "./components/common/PublicRoute";

//----------------------------------------------------------------------

function App() {
  return (
    <>
      <Routes>
        {/*public route*/}
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/*private route*/}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />

          {/*authentication route*/}
          <Route path="/profile" element={<Profile />} />
          <Route path="/loginpassword" element={<LoginPassword />} />

          {/*network route*/}
          <Route path="/mydirect" element={<MyDirect />} />
          <Route path="/teamnetwork" element={<TeamNetwork />} />
          <Route path="/levelvolume" element={<LevelVolume />} />
          <Route path="/rankvolume" element={<RankVolume />} />

          {/*income route*/}
          <Route
            path="/dailydelegatorreward"
            element={<DailyDelegatorReward />}
          />
          <Route path="/directbonus" element={<DirectBonus />} />
          <Route
            path="/delegatorlevelbonus"
            element={<DelegatorLevelBonus />}
          />
          <Route path="/rank&reward" element={<RankAndRewards />} />

          {/*delegator route*/}
          <Route
            path="/delegatorppactivation"
            element={<DelegatorPPActivation />}
          />
          <Route path="/promopackhistory" element={<PromoPackHistory />} />
          <Route path="/verificationofnode" element={<VerificationofNode />} />

          {/*wallet & delegator route*/}
          <Route path="/delegateusdtbep20" element={<Delegate />} />
          <Route path="/delegatorreport" element={<DelegatorReport />} />
          <Route path="/depositefund" element={<DepositeFund />} />
          <Route path="/depositerport" element={<DepositeReport />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/withdrawreport" element={<WithdrawReport />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
