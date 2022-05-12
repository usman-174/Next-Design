import Image from 'next/image'
import React, { useState } from 'react'

const Navbar = () => {
                const [toggle, settoggle] = useState(false)
  return (
    <nav className="bg-back shadow-lg ">
			<div className="max-w-7xl  px-4">
				<div className="flex justify-between items-center">
					<div className="flex">
						<div>
							{/* <!-- Website Logo --> */}
							<a href="/" className="flex items-center py-4 px-2">
								{/* <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2"/> */}
								{/* <span className="font-semibold text-gray-500 text-lg">BeautyoSaloon.</span> */}
								<Image src="/logo.webp" width={100} height={100} />
							</a>
						</div>
				
					</div>
                
                    <div className="flex ">
						
						{/* <!-- Primary Navbar items --> */}
						<div className="hidden md:flex">
							<a href="" className="py-4 px-2  border-b-4 hover:text-cgreen border-cgree font-semibold ">Home</a>
							<a href="" className="py-4 px-2  font-semibold hover:text-cgreen transition duration-300">Services</a>
							<a href="" className="py-4 px-2  font-semibold hover:text-cgreen transition duration-300">About</a>
							<a href="" className="py-4 px-2  font-semibold hover:text-cgreen transition duration-300">Contact Us</a>
						</div>
					</div>
					
					{/* <!-- Mobile menu button --> */}
					<div className="md:hidden flex items-center">
						<button onClick={()=>settoggle(e=>!e)} className="outline-none mobile-menu-button">
                        <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
							x-show="!showMenu"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>
			{/* <!-- mobile menu --> */}
			<div className={toggle ? "mobile-menu h-screen bg-red-300" : "hidden   mobile-menu"}>
				<ul className="">
					<li className="active"><a href="#" className="  block text-sm px-2 py-8 text-white bg-cgreen font-semibold">Home</a></li>
					<li><a href="#services" className="block text-sm px-2 py-8 hover:bg-cgreen transition duration-300">Services</a></li>
					<li><a href="#about" className="block text-sm px-2 py-8 hover:bg-cgreen transition duration-300">About</a></li>
					<li><a href="#contact" className="block text-sm px-2 py-8 hover:bg-cgreen transition duration-300 shadow-sm">Contact Us</a></li>
				</ul>
			</div>
            </nav>
  )
}

export default Navbar