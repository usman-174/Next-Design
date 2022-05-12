import React from 'react'
import {FaAcquisitionsIncorporated} from "react-icons/fa"
const ServiceBox = () => {
  return (
    <div style={{
        boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.08)"
    }} className=' my-6 md:my-0 mx-auto p-6 border-b-4 w-[85%] md:w-[26vw] border-b-tahiti text-center'>
        <FaAcquisitionsIncorporated className='mx-auto text-cgreen text-6xl my-8'/>
        <h1 style={{fontFamily:"Poppins"}} className="text-xl font-bold">November 17, 2021</h1>
        <p className='font-sans my-4 mx-4 text-[#767676]'>The Canna Mom Show with Joyce Gerber: Boston’s Nike John and Dr. Robin Reed Giving Back with T.H.C</p>
    </div>
  )
}

export default ServiceBox