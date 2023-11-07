const HeroInfo = ({color, tag, title}) => {
  return (
    <div>
      <div className={`w-10 md:w-14 md:h-[4.4rem] h-16 ${color} rounded-t-full -rotate-45 absolute mt-[-6px] ml-[2px]`}>
        <div className="w-[3.1rem] h-[3.4rem] md:w-[4rem] bg-white absolute left-[-5px] bottom-[-10px]"></div>
      </div>
      <div className="relative">
        <p className="text-2xl font-bold xsm:text-3xl xsm:mb-1 md:text-4xl">{tag}</p>
        <p className="text-gray md:text-lg">{title}</p>
      </div>
    </div>
  );
};

export default HeroInfo;
