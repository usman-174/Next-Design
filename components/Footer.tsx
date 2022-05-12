import React from 'react'
import {FaInstagram,FaFacebook,FaYoutube} from "react-icons/fa"
const Footer = () => {
  return (
    <div className='py-8 px-10 bg-cgreen flex flex-col md:flex-row md:justify-around md:items-center'>
    <div className='p-5   mx-auto md:mx-0 w-[90%] text-center md:text-left md:w-[40%]'
    >
        <h1 className='text-3xl text-[#000]' style={{fontFamily:"Poppins",fontStyle:"normal",
        fontWeight:"800"}}>BeautySaloon</h1>
        <br />
        <small className='text-back my-2'>Copyright The Heritage Club 2022</small>
        <br />
        <small className='text-back my-2'>Theme Corporate Landing Page by ThemeThread</small>

    </div>
    <div className='p-5 my-14 mt-0 md:mt-10 md:my-4 mx-auto w-[70%] md:w-[25%]  md:mx-0 '
    >
       <div className="flex p-3 text-2xl md:text-3xl text-back justify-around ">
            <FaInstagram/>
            <FaFacebook/>
            <FaYoutube/>
       </div>
    </div>

</div>
  )
}

export default Footer