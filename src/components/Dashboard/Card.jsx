function Card({ title, balance, icon }) {
  const Icon = icon;
  return (
    <div className="rounded-lg overflow-hidden flex flex-col">
      <div className="flex gap-3 text-nowrap items-center p-3 bg-gradient-to-br from-[#0F0F1D] via-[#102031] to-[#24BB79]">
        <Icon /> {title}
      </div>
      <div className="bg-gradient-to-br py-6 px-8 font-bold text-2xl from-[#0F0F1D] via-[#102031] to-[#24BB79]">
        $ {balance}
      </div>
    </div>
  );
}

export default Card;
