import React from "react";

import Image from 'next/image'
const Hero = () => {
  return (
    <div
      
      className="py-4 md:p-0 bg-back border-t border-y-silver flex flex-col-reverse items-center 
      md:flex-row md:justify-between md:px-12"
    >
      <div className=" text-center md:text-left mt-14 md:mt-0 md:my-2 max-w-[70%]  md:max-w-[40%] ">
        <h1 className="lg:text-3xl text-2xl font-bold" style={{fontFamily:"Poppins"}}>
        Invest in Heritage Club
        </h1>
        <p className="my-4 text-[#767676]">The Heritage club is running a crowd raising campaign</p>
        <button className="py-3 px-10 rounded-md my-2 text-white md:mx-2 bg-cgreen font-sans">
          Read More</button>
      </div>

      <div
        className=" relative bg-lightGreen md:mx-12 md:px-0  w-[80%] h-[46vw]  md:w-[40%] md:h-[25vw] md:my-28   "
     
      >
       
         <div className='absolute -bottom-5 -left-7 w-full h-[90%] '>

<Image src="/hero1.webp" layout='fill'  alt="hero" />
</div>

     
         
        {/* </div> */}
      </div>
    </div>
  );
};

export default Hero;
