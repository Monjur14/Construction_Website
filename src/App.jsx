import './App.css'
import Companies from './Sections/Companies'
import Hero from './Sections/Hero'
import Message from './Sections/Message'
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
    </div>
  )
}

export default App
