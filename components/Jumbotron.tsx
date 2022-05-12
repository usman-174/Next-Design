import React from 'react'
import Divider from './Divider'

const Jumbotron = () => {
  return (
    <>
    <Divider/>   
    <div className='p-6 flex flex-col md:flex-row justify-center md:justify-around items-center'>
            <div className='md:w-[50%]'>
            <h1 className="lg:text-2xl text-xl font-bold" style={{fontFamily:"Poppins"}}>What's next for the Heritage Club?</h1><br />
        <p className="my-4 text-[#767676]">Be the first to know about our launch. Join our mailing list to hear 
            the latest about the opening date, community e
            vents, and products we will be carrying. Thank you!</p>
            </div>
        
        <button className='rounded-md px-6 py-3 text-white bg-cgreen'>SUBSCRIBE</button>
    </div>
    </>
  )
}

export default Jumbotron