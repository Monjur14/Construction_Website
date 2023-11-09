import Heading from "../Components/Heading"
import {BsArrowLeft, BsArrowRight} from "react-icons/bs"
import man1 from '../assets/man-1.png'
import man2 from '../assets/man-2.png'
import women from '../assets/women-1.png'
import EngineerItem from "../Components/EngineerItem"
import { useRef } from "react"

const Testimonial = () => {
  let box = useRef(null)
  
  const prevBtn = () => {
    let width = box.current.clientWidth
    if(width < 370){
      box.current.scrollLeft = box.current.scrollLeft - 360
    }else if (width < 450){
      box.current.scrollLeft = box.current.scrollLeft - 360
    }else if (width > 451){
      box.current.scrollLeft = box.current.scrollLeft - width
    }
  }
  const nextBtn = () => {
    let width = box.current.clientWidth
    if(width < 370){
      box.current.scrollLeft = box.current.scrollLeft + 360
    }else if (width < 450){
      box.current.scrollLeft = box.current.scrollLeft + 360
    }else if (width > 451){
      box.current.scrollLeft = box.current.scrollLeft + width
    }
    
  }

  return (
    <div className="container">
      <div className="section__padding">
            <div>
                <Heading title={"Our Best Engineers"}/>
                <p className="text-center mt-4 xsm:mt-5 xsm:text-lg md:text-xl md:mt-7">Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</p>
            </div>
            <div className="mt-16">
              <div ref={box} className="flex pl-0 xsm:pl-6 max-w-[1200px] gap-12 lg:gap-16 overflow-x-scroll scrollbar-hidden">
                <EngineerItem img={man1} name={"Chris Evans"} address={"Michigan, TX"} num={"989-653-2986"} email={"ChrisEvans@const.com"}/>
                <EngineerItem img={man2} name={"Alison Kiara"} address={"Michigan, TX"} num={"989-653-2986"} email={"alisonkiara@const.com"}/>
                <EngineerItem img={women} name={"Adam Gates"} address={"Michigan, TX"} num={"989-653-2986"} email={"adamgates@const.com"}/>
                <EngineerItem img={man1} name={"Chris Evans"} address={"Michigan, TX"} num={"989-653-2986"} email={"ChrisEvans@const.com"}/>
                <EngineerItem img={man2} name={"Alison Kiara"} address={"Michigan, TX"} num={"989-653-2986"} email={"alisonkiara@const.com"}/>
                <EngineerItem img={women} name={"Adam Gates"} address={"Michigan, TX"} num={"989-653-2986"} email={"adamgates@const.com"}/>
                <EngineerItem img={man1} name={"Chris Evans"} address={"Michigan, TX"} num={"989-653-2986"} email={"ChrisEvans@const.com"}/>
                <EngineerItem img={man2} name={"Alison Kiara"} address={"Michigan, TX"} num={"989-653-2986"} email={"alisonkiara@const.com"}/>
                <EngineerItem img={women} name={"Adam Gates"} address={"Michigan, TX"} num={"989-653-2986"} email={"adamgates@const.com"}/>
              </div>
              <div className="w-full flex justify-center gap-5 mt-4 mb-5">
                <button className="w-14 h-14 rounded-full flex justify-center items-center btn_shadow" onClick={prevBtn}><BsArrowLeft/></button>
                <button className="w-14 h-14 rounded-full flex justify-center items-center btn_shadow" onClick={nextBtn}><BsArrowRight/></button>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Testimonial
