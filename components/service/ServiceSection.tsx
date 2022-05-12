import React from 'react'
import Divider from '../Divider'
import ServiceBox from './ServiceBox'

const ServiceSection = () => {
  return (
      <>
      
    <div  className='mt-12 bg-back'>
    <Divider/>
        <h1 className=" text-center my-4 lg:text-3xl text-2xl font-bold" style={{fontFamily:"Poppins"}}>
        Recent Press 
        </h1>
       
        <p className=' mt-2 text-center mx-auto w-3/4 md:w-1/2 text-xl font-sans md:my-2'>Com mais de 10 anos no mercado, o Beautysalon já conquistou clientes de inúmeros países com
         seus tratamentos exclusivos e totalmente naturais</p>

        <div className='flex flex-col mx-auto justify-center md:mx-0 md:flex-row  md:justify-evenly md:items-center my-10'>
       
               
            <ServiceBox/>
            <ServiceBox/>

            <ServiceBox/>
          

        </div>
    </div>
    </>

  )
}

export default ServiceSection