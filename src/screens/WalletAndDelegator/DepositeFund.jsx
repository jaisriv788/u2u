import { useState } from "react";
// import axios from "axios";
// import useConstStore from "../../store/constStore";
// import useUserStore from "../../store/userStore";
// import useDashboardStore from "../../store/dashboardStore";

function DepositeFund() {
  // const { baseUrl } = useConstStore();
  // const { user, token } = useUserStore();
  // const { dashboardData } = useDashboardStore();

  const options = ["USDT"];

  const [option, setOption] = useState("USDT");
  const [amount, setAmount] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(false);

  async function handleSubmit() {
    try {
      setDisableSubmit(true);
      console.log({ option, amount });
    } catch (error) {
      console.log(error);
    } finally {
      setDisableSubmit(false);
    }
  }

  return (
    <div className="flex-1 flex justify-center p-4">
      <div className="bg-[#1F2C24] mt-5 rounded-lg w-full sm:w-10/12 md:w-9/12 h-fit">
        <div className="text-lg font-semibold border-b py-3 px-5 border-[#35443b]">
          Deposite{" "}
        </div>
        <div className="py-5 px-5 flex flex-col gap-3 text-sm">
          <div className="flex flex-col relative">
            <span>Enter Amount</span>
            <input
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              type="number"
              placeholder="Enter Amount"
              className="bg-[#26362C] rounded px-3 py-0.5 pr-10"
            />
          </div>

          <div className="flex flex-col">
            <span className="">Country</span>
            <select
              value={option}
              onChange={(e) => setOption(e.target.value)}
              required
              className="rounded bg-[#26362C] px-3 py-0.5"
            >
              {options?.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-5 mt-5">
            <button
              onClick={handleSubmit}
              disabled={disableSubmit}
              className="bg-[#22b357] disabled:cursor-not-allowed hover:bg-[#56CF82] transition ease-in-out duration-300 cursor-pointer px-3 py-0.5 rounded w-fit mt-3"
            >
              {disableSubmit ? "Withdrawing..." : "Submit"}
            </button>
            <button
              onClick={() => {}}
              className="bg-gray-500 hover:bg-gray-400 transition ease-in-out duration-300 cursor-pointer px-3 py-0.5 rounded w-fit mt-3"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepositeFund;
