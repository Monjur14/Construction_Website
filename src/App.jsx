import './App.css'
import Blog from './Sections/Blog'
import Companies from './Sections/Companies'
import ContactUs from './Sections/ContactUs'
import Credit from './Sections/Credit'
import Footer from './Sections/Footer'
import Hero from './Sections/Hero'
import Message from './Sections/Message'
import Subscribe from './Sections/Subscribe'
import Testimonial from './Sections/Testimonial'
import WhyChooseUs from './Sections/WhyChooseUs'

const App = () => {
  return (
    <div>
      <Hero/>
      <Companies/>
      <WhyChooseUs/>
      <Testimonial/>
      <Message/>
      <ContactUs/>
      <Blog/>
      <Subscribe/>
      <Footer/>
      {/* <Credit/> */}
    </div>
  )
}

export default App
