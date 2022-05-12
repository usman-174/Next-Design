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
            fontWeight:"800"}}>Entre em contato {isPageWide && <br/>} com a gente!</h1>
            <p className='text-lg my-3 text-[#767676]'>Entre em contato 
             com a Beautysalon {isPageWide && <br/>} 
             queremos tirar suas dúvidas, ouvir suas  {isPageWide && <br/>} críticas e
              sugestões.</p>
            <button className='w-3/6 bg-cgreen p-2 rounded-md text-white'><FaWhatsapp className='text-xl inline-block  mx-1 md:mx-2 mb-1'/>WHATSAPP</button>
        </div>
        <div className='p-5 my-14 mt-0 md:mt-10 md:my-4 mx-auto  md:mx-0  '
        >
            <ul style={{
                listStyle:"none"
            }} className='font-sans  text-xl md:text-2xl text-[#767676]'>
                <li> <FaPhoneAlt className='text-cgreen inline-block mx-4'/> 123184-541-4</li>
                <li className='my-6'><FaMapMarkerAlt className='text-cgreen inline-block mx-4'/>New York 043</li>
                <li><FaMailBulk className='text-cgreen inline-block mx-4'/>Email@Email.com</li>
            </ul>
        </div>

    </div>
            </>
  )
}

export default Contact