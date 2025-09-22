import Message from "../components/Support/Message";

function Supprot() {
  return (
    <div className="p-4 flex-1 overflow-x-hidden flex flex-col">
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">Support</div>
        <div className="text-xs">
          <span className="text-green-300">Support</span> {">>"} Support
        </div>
      </div>

      <Message />
    </div>
  );
}

export default Supprot;
