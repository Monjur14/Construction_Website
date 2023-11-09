import Button from "../Components/Button"
import Heading from "../Components/Heading"

const Subscribe = () => {
  return (
    <div className="container">
        <div className="section__padding">
            <Heading title={"Subscribe to our Newsletter"} para={"Age sold some full like rich new. Amounted repeated as believed in confined juvenile."}/>
            <div className="w-full flex justify-center mt-10 md:mt-14">
                <Button title={"Subscribe"}/>
            </div>
        </div>
    </div>
  )
}

export default Subscribe
