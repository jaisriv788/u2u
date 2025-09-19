import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { FaCaretUp } from "react-icons/fa";

function DetailedCards({ amount, title, children }) {
  return (
    <div className="bg-gradient-to-br from-[#0F0F1D] via-[#102031] to-[#24BB79] rounded-lg px-4 py-6 flex flex-col gap-3">
      <div className="flex items-center gap-5">
        <div className="p-3 bg-[#19203C] rounded-lg">
          <RiMoneyDollarBoxFill size={28} />
        </div>
        <div>
          <div className="text-md">{title}</div>
          <div className="text-xl font-bold">
            <span className="font-semibold text-[#1FD022] text-xl">$</span>{" "}
            {amount && amount}
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <FaCaretUp />
        {children}
      </div>
    </div>
  );
}

export default DetailedCards;
