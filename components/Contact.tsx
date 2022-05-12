import React from 'react'
import { FaWhatsapp,FaPhoneAlt,FaMapMarkerAlt,FaMailBulk} from "react-icons/fa"
import { useMediaQuery } from '../hooks/useMediaQuery'
import Divider from './Divider'
const Contact = () => {
    let isPageWide = useMediaQuery('(min-width: 767px)')
    
  return (
      <>
        <Divider/>

    <div className='py-20 px-10 bg-back flex flex-col md:flex-row md:justify-around'>
        <div className='p-5   mx-auto md:mx-0 w-[90%] text-center md:text-left md:w-[40%]'
        >
            <h1 className='text-3xl ' style={{fontFamily:"Poppins",fontStyle:"normal",
            fontWeight:"800"}}>Get In Touch</h1>
            <p className='text-lg my-3 text-[#767676]'>Entre em contato 
            Contact Us to get in touch with our{isPageWide && <br/>} team and   learn more about the proposed location. 
             </p>
            <button className='w-3/6 bg-cgreen p-2 rounded-md text-white'><FaWhatsapp className='text-xl inline-block  mx-1 md:mx-2 mb-1'/>WHATSAPP</button>
        </div>
        <div className='p-5 my-14 mt-0 md:mt-10 md:my-4 mx-auto  md:mx-0  '
        >
            <ul style={{
                listStyle:"none"
            }} className='font-sans  text-xl md:text-2xl text-[#767676]'>
                <li> <FaPhoneAlt className='text-cgreen inline-block mx-4'/> Coming Soon</li>
                <li className='my-6'><FaMapMarkerAlt className='text-cgreen 
                inline-block mx-4'/>116 Cambridge Street, Boston, MA 02129</li>
                <li><FaMailBulk className='text-cgreen inline-block mx-4'/>617heritage@gmail.com</li>
            </ul>
        </div>

    </div>
            </>
  )
}

export default Contact