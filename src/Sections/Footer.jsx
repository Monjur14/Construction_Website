import {AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin} from 'react-icons/ai'
import {BsArrowRightCircle} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="container">
      <div className="section__padding">
        <div className='grid lg:grid-cols-4 lg:gap-20 grid-cols-1 md:grid-cols-2 md:gap-16 text-center lg:text-left gap-8'>
            <div className='lg:space-y-7 space-y-4'>
                <h1 className='text-xl xsm:text-2xl font-bold text-blue'>CONSTRACTION</h1>
                <p className='xsm:text-lg '>You’ll find your next Home loan valu you prefer.</p>
                <div className='flex gap-2 w-full justify-center lg:justify-start'>
                    <AiFillFacebook size={40} color='#18A7B9'/>
                    <AiFillTwitterSquare size={40} color='#18A7B9'/>
                    <AiFillLinkedin size={40} color='#18A7B9'/>
                </div>
            </div>
            <div className='lg:space-y-7 space-y-4'>
                <h3 className='font-bold text-xl'>Resources</h3>
                <ul className='lg:space-y-3 space-y-2 xsm:text-lg'>
                    <li className='cursor-pointer'><a href="">Our Agents</a></li>
                    <li className='cursor-pointer'><a href=""></a>Member Stories</li>
                    <li className='cursor-pointer'><a href=""></a>Video</li>
                    <li className='cursor-pointer'><a href=""></a>Free trial</li>
                </ul>
            </div>
            <div className='lg:space-y-7 space-y-4'>
                <h3 className='font-bold text-xl'>Company</h3>
                <ul className='lg:space-y-3 space-y-2 xsm:text-lg'>
                    <li className='cursor-pointer'><a href="">Patnerships</a></li>
                    <li className='cursor-pointer'><a href=""></a>Terms of use</li>
                    <li className='cursor-pointer'><a href=""></a>Privacy</li>
                    <li className='cursor-pointer'><a href=""></a>Sitemap</li>
                </ul>
            </div>
            <div className='lg:space-y-7 space-y-4'>
                <h3 className='font-bold text-xl'>Get in touch</h3>
                <div className='flex justify-between items-center p-3 bg-offWhite rounded-lg'>
                    <input type="email" placeholder='Enter your email' className='bg-offWhite outline-none'/>
                    <BsArrowRightCircle size={30} color='#18A7B9' className='cursor-pointer'/>
                </div>
            </div>
        </div>
        <div className='mt-14 md:mt-20 text-center'>
            <h1 className='font-bold text-base xsm:text-lg'>© 2023  CONSTRACTION  |  Developed By Monjur Hossen</h1>
        </div>
      </div>
    </div>
  )
}

export default Footer
