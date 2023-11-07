import heroimg from '../assets/hero image.png'
import {BiMenuAltRight} from "react-icons/bi"
import {AiFillCloseSquare} from 'react-icons/ai'
import { useState } from 'react'
import HeroInfo from '../Components/HeroInfo'

const Hero = () => {
  const[nav, setNav] = useState(true)
  const toggleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="container relative">
      <div className="py-3 smd:py-4 lg:py-5 flex justify-between items-center">
        <div >
            <p className="text-blue font-bold text-lg xsm:text-xl md:text-2xl">CONSTRUCTION</p>
        </div>
        <div className='hidden lg:block'>
          <ul className='flex gap-10 text-lg font-bold'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Service</li>
            <li className='cursor-pointer'>Projects</li>
          </ul>
        </div>
        <div className='block lg:hidden'>
          {nav ? <BiMenuAltRight size={35} className='cursor-pointer' onClick={toggleNav}/> : <div className='fixed top-0 right-full w-full h-screen bg-white transform translate-x-full transition-transform duration-300 ease-in-out z-50'>
              <div className='container'>
                <div className='py-2 smd:py-4 lg:py-5 flex flex-col'>
                    <div className='self-end cursor-pointer'>
                      <AiFillCloseSquare size={35} onClick={toggleNav}/>
                    </div>
                    <div>
                    <ul className='flex flex-col h-screen justify-center items-center gap-10 md:gap-14 text-2xl md:text-4xl font-bold'>
                        <li className='cursor-pointer'>Home</li>
                        <li className='cursor-pointer'>About</li>
                        <li className='cursor-pointer'>Service</li>
                        <li className='cursor-pointer'>Projects</li>
                    </ul>
                    </div>
                </div>
              </div>
           </div>}  
        </div>
      </div>
      <div className='flex flex-col lg:flex-row lg:items-center lg:mt-[-3rem]'>
        <div className='basis-1/2'>
            <h1 className="text-[2.3rem] xsm:text-[3rem] md:text-[4rem] md:pr-16 font-bold mt-6 leading-tight"><span className="text-blue">Masters</span> of Consistency and <span className="text-blue">Quality</span>.</h1>
            <p className='mt-5 text-base xsm:text-lg md:text-xl md:mt-7'>Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</p>
            <div className='flex gap-4 md:gap-8 mt-5 md:mt-7'>
              <button className='bg-blue hover:bg-white hover:text-blue border hover:border duration-300 py-3 px-8 md:py-4 md:px-10 md:text-lg text-white font-bold rounded-tl-[1.8rem] rounded-br-[1.8rem]'>Explore</button>
              <button className='bg-white border py-3 px-8 md:py-4 md:px-10 md:text-lg text-blue font-bold rounded-tl-[1.8rem] rounded-br-[1.8rem] hover:bg-blue hover:text-white duration-300'>Contact Us</button>
            </div>
            <div className='mt-10 md:mt-14'>
                <div className='relative ml-2 flex gap-12 justify-between'>
                  <HeroInfo color={"bg-orange"} tag={"25,256"} title={"Projects Done"}/>
                  <HeroInfo color={"bg-blue"} tag={"15,200"} title={"Buildings Done"}/>
                  <HeroInfo color={"bg-green"} tag={"350+"} title={"Total Employees"}/>
                </div>
            </div>
        </div>
        <div className='mt-12 basis-1/2 mx-auto'>
            <img src={heroimg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
