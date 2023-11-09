import Button from "../Components/Button"
import Heading from "../Components/Heading"
import world from '../assets/world.png'


const ContactUs = () => {
  return (
    <div className="container">
      <div className="section__padding">
            <div>
                <Heading title={"Contact Us"} para={"Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary."}/>
            </div>
            <div className="flex flex-col-reverse mt-8 md:mt-12 lg:flex-row lg:mt-16">
                <div className="basis-1/2 flex flex-col space-y-3">
                    <input type="text" placeholder="Name" className="rounded-lg outline-none bg-offWhite p-2"/>
                    <input type="email" placeholder="Email" className="rounded-lg outline-none bg-offWhite p-2"/>
                    <input type="text" placeholder="Subject" className="rounded-lg outline-none bg-offWhite p-2"/>
                    <textarea className="rounded-lg outline-none h-full bg-offWhite p-2 resize-none"  placeholder="Message"></textarea>
                    <div>
                        <Button title={"Send Message"}/>
                    </div>
                </div>
                <div className="basis-1/2 mx-auto">
                    <img src={world} alt="" />
                </div>
            </div>
      </div>
    </div>
  )
}

export default ContactUs
