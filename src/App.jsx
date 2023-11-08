import './App.css'
import Companies from './Sections/Companies'
import Hero from './Sections/Hero'
import Testimonial from './Sections/Testimonial'
import WhyChooseUs from './Sections/WhyChooseUs'

const App = () => {
  return (
    <div>
      <Hero/>
      <Companies/>
      <WhyChooseUs/>
      <Testimonial/>
    </div>
  )
}

export default App
