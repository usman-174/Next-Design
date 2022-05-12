import type { NextPage } from 'next'
import About from '../components/About'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Jumbotron from '../components/Jumbotron'
import Layout from '../components/Layout'
import ServiceSection from '../components/service/ServiceSection'
import TestimonialSection from '../components/Testimonial/TestimonialSection'


const Home: NextPage = () => {
  return (
    <Layout>
      <Hero/>
      {/* <iframe src="https://api.iheartjane.com/v1/stores/3388/embed.js" width={300 }height={300} ></iframe> */}
      <About/>
      <Jumbotron/>
     
      <ServiceSection/>
      <TestimonialSection/>
      <Contact/>
    </Layout>
  )
}

export default Home
