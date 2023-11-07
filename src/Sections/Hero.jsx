import heroimg from '../assets/hero image.png'
const Hero = () => {
  return (
    <div className="container">
      <div className="py-2">
        <div>
            <p className="text-blue font-bold text-base xsm:text-lg">CONSTRUCTION</p>
        </div>

      </div>
      <div>
        <div>
            <h1 className="text-[2.3rem] xsm:text-[3rem] font-bold mt-6"><span className="text-blue">Masters</span> of Consistency and <span className="text-blue">Quality</span>.</h1>
        </div>
        <div className='mt-12'>
            <img src={heroimg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
