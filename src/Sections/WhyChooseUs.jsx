import Button from "../Components/Button"
import WCUitem from "../Components/WCUitem"
import whyChoseUs from "../assets/whyChoseUs.png"

const WhyChooseUs = () => {
  return (
    <div className="container">
      <div className="section__padding flex flex-col gap-10 xsm:gap-12 md:gap-16">
            <div className="flex flex-col-reverse gap-5 xsm:gap-6 lg:flex-row lg:gap-x-40 lg:items-center">
                <div className="space-y-4 xsm:space-y-5 md:space-y-7">
                    <p className="text-justify xsm:text-lg md:text-2xl lg:text-xl  lg:text-left">Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</p>
                    <Button title={"Explore"}/>
                </div> 
                <div>
                    <h3 className="font-bold text-3xl xsm:text-4xl md:text-[3rem] md:leading-tight">Why Choose us for best construction experience</h3>
                </div>
            </div>
            <div className="flex flex-col gap-10 xsm:gap-12 md:gap-16 lg:flex-row lg:items-center lg:gap-16">
                <div className="basis-1/2">
                    <img src={whyChoseUs} alt="" className="lg:w-[430px]"/>
                </div>
                <div className="flex flex-col gap-6 xsm:gap-7 md:gap-10 lg:gap-14 basis-1/2">
                    <WCUitem title={"01."} color={"bg-blue"} pera={"And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held."}/>
                    <WCUitem title={"02."} color={"bg-orange"} pera={"Up maids me an ample stood given. Certainty say suffering his him collected intention promotion."}/>
                    <WCUitem title={"03."} color={"bg-green"} pera={"Good draw knew bred ham busy his hour. Ask agreed answer rather joy nature admire wisdom."}/>
                </div>
            </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
