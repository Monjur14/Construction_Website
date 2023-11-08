import chase from "../assets/LOGO.png"
import asana from "../assets/LOGO-1.png"
import buzzfeed from "../assets/LOGO-2.png"
import toggl from "../assets/LOGO-3.png"
import walmart from "../assets/LOGO-4.png"


const Companies = () => {
  return (
    <div className="container">
      <div className="section__padding flex flex-wrap gap-7 xsm:gap-9 md:gap-14 lg:gap-16 justify-center items-center">
        <img src={chase} alt="" />
        <img src={asana} alt="" />
        <img src={buzzfeed} alt="" />
        <img src={toggl} alt="" />
        <img src={walmart} alt="" />
      </div>
    </div>
  )
}

export default Companies
