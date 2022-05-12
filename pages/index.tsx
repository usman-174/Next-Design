import type { NextPage } from 'next'
import About from '../components/About'
import Contact from '../components/Contact'
import Divider from '../components/Divider'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import ServiceSection from '../components/service/ServiceSection'
import TestimonialSection from '../components/Testimonial/TestimonialSection'


const Home: NextPage = () => {
  return (
    <Layout>
      <Hero/>
      <About/>
      {/* <Divider/> */}
      <ServiceSection/>
      <TestimonialSection/>
      <Contact/>
      <Footer/>
    </Layout>
  )
}

export default Home
