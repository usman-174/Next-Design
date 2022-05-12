import React from 'react'
import {FaAcquisitionsIncorporated} from "react-icons/fa"
const ServiceBox = () => {
  return (
    <div style={{
        boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.08)"
    }} className=' my-6 md:my-0 mx-auto p-6 border-b-4 w-[85%] md:w-[26vw] border-b-tahiti text-center'>
        <FaAcquisitionsIncorporated className='mx-auto text-cgreen text-6xl my-8'/>
        <h1 style={{fontFamily:"Poppins"}} className="text-xl font-bold">Terapia capilar</h1>
        <p className='font-sans my-4 mx-4 text-[#767676]'>Terapia completa para couro cabeludo e fios, protegendo todos os tipos de cabelos, inclusive os longos e finos.</p>
    </div>
  )
}

export default ServiceBox