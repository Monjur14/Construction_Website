import bgimg from "../assets/message.png";
import quote1 from "../assets/quote-top.png";
import quote2 from "../assets/quote-bottom.png";

import Heading from "../Components/Heading";

const Message = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center message">
      <div className="container">
        <div className="section__padding my-auto flex flex-col gap-4">
          <div>
            <h1 className="font-bold text-center text-3xl xsm:text-4xl md:text-[3rem] text-white mb-6 md:mt-8 lg:mt-12">Message from CEO</h1>
          </div>
          <div className="w-[25px] md:w-[50px] lg:w-[70px]">
            <img src={quote1} alt="" />
          </div>
          <div className="ml-6 mr-6 md:ml-12 md:mr-12 lg:ml-20 lg:mr-[5rem] text-justify text-sm xsm:text-lg md:text-xl lg:text-2xl text-white">
            <h1>
              Shewing met parties gravity husband six pleased. On to no kind do
              next feel held walk. Last own loud and knew give gay four.
              Sentiments motionless or principles preference excellence am.
              Literature surrounded insensible at indulgence or to admiration
              remarkably. Matter future lovers desire marked boy use. Chamber
              reached do he nothing be. Do in laughter securing smallest
              sensible no mr hastened.  <br /> <br />  As perhaps proceed in in brandon of
              limited unknown greatly. Distrusts fulfilled happiness unwilling
              as explained of difficult. No landlord of peculiar ladyship
              attended if contempt ecstatic. Loud wish made on is am as hard.
              Court so avoid in plate hence. Of received mr breeding concerns
              peculiar securing landlord. Spot to many it four bred soon well
              to. Or am promotion in no departure abilities. Whatever landlord
              yourself at by pleasure of children be.
            </h1>
          </div>
          <div className="self-end w-[25px] md:w-[50px] lg:w-[70px]">
            <img src={quote2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
