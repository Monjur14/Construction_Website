const WCUitem = ({title, color, pera}) => {
  return (
    <div className="flex gap-10">
      <div className={`h-[44px] lg:h-[56px] lg:w-[56px] w-[44px] ${color} rounded-tr-[2rem] rounded-bl-[2rem]`}>
        <h1 className="relative text-4xl lg:text-[3rem] ml-3 font-bold top-[-10px]">{title}</h1>
      </div>
      <div className="text-left">
        <p className="xsm:text-[1.08rem] md:pr-24 lg:pr-14 lg:text-xl">{pera}</p>
      </div>
    </div>
  );
};

export default WCUitem;
