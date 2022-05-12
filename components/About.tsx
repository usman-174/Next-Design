import React from 'react'
import Divider from './Divider'
import Image from 'next/image'


const About = () => {
  return (
    <>
        <Divider/>
    <div className=' py-2 bg-white '>
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            
            
            <div className="relative bg-lightGreen w-5/6 h-52 md:w-[45%] md:h-96">
              <div className='absolute -bottom-5 left-5 w-full h-[90%] '>

                <Image src="/hero.jpg" layout='fill'  alt="hero" />
              </div>
            </div>
            <div className='text-xl max-w-lg  text-center mt-4 mx-2'>
            <h1 className="my-4 lg:text-3xl text-2xl font-bold" style={{fontFamily:"Poppins"}}>
        About Us
        </h1>
        <p className='text-md md:text-xl my-2 text-[#767676]  md:my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum veniam magnam quam minus recusandae. Sapiente pariatur aut qui beatae fugiat?</p>
        <p className='text-md md:text-xl  mt-2  text-[#767676]  md:my-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum veniam magnam quam minus recusandae. Sapiente pariatur aut qui beatae fugiat?</p>
        <p className='text-md md:text-xl  mt-3  text-[#767676]  md:my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum veniam magnam quam minus recusandae. Sapiente pariatur aut qui beatae fugiat?</p>
            </div>
        </div>

      
    </div>
    </>

  )
}

export default About