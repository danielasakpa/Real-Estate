import React from 'react'
import footerLogo from "../assets/navlogo.svg";
import {IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram} from "react-icons/io5";

const Footer = () => {
    const navLinks = [
        { id: 1, name: "Properties", link: "/properties" },
        { id: 2, name: "Agent", link: "/agent" },
        { id: 3, name: "Blog", link: "/blog" },
        { id: 4, name: "About", link: "/about" },
        { id: 5, name: "Contact", link: "/contact" }
    ]
    const logoLinks = [
        { id: 1, logo: <IoLogoFacebook size={25} color="#A3A3A3" />, link: "#" },
        { id: 2, logo: <IoLogoTwitter size={25} color="#A3A3A3"/>, link: "#" },
        { id: 3, logo: <IoLogoLinkedin size={25} color="#A3A3A3"/>, link: "#" },
        { id: 4, logo: <IoLogoInstagram size={25} color="#A3A3A3"/>, link: "#" },
    ]

    return (
        <div className='xs:mt-[100px] md:mt-[170px] mx-auto'>
            <div className='flex xs:flex-col md:flex-row mb-10'>
                <div className='md:basis-1/2 lg:basis-2/3'>
                    <img src={footerLogo} alt="footerLogo" />
                    <nav className='list-none mt-6 xs:flex-col md:flex-row flex'>
                        {navLinks.map((Link) =>
                            <li
                                key={Link.id}
                                className='
                            py-1
                            xs:mb-6
                            md:mb-0
                            mr-5
                            text-[#171717]
                            xs:text-[15px]
                            lg:text-lg
                            font-Rubik
                            cursor-pointer'
                            >
                                {Link.name}
                            </li>
                        )}
                    </nav>
                </div>
                <div className='md:basis-1/2 xs:mt-6 md:mt-0 lg:basis-1/3'>
                    <p className='xs:text-[14px] xl:text-[15px] text-[#A3A3A3] font-Rubik'>Get the latest updates about properties and trends in the real estate market.</p>
                    <div className='mt-5 flex xs:flex-col md:flex-row items-center'>
                        <input type="text" class="
                        form-input 
                        rounded 
                        focus:border-none
                        focus:outline-none
                        focus:focus:ring 
                        focus:ring-opacity-25
                        focus:ring-[#1e293b]
                        xs:w-[100%]
                        md:w-[65%]
                        md:px-6 
                        lg:px-10
                        py-2.5
                        mr-2"
                        />
                        <button className='
                        xs:ml-[65%]
                        md:ml-0
                        xs:mt-4
                        md:mt-0
                        xs:px-3
                        md:px-3                            
                        lg:px-4
                        xs:py-4
                        md:py-3
                        xs:text-[14px]
                        md:text-[15px]
                        font-Rubik
                        bg-[#171717] 
                        rounded-md 
                        text-stone-50
                        hover:bg-stone-100 
                        hover:text-stone-900
                        hover:border-solid 
                        hover:border
                        hover:border-opacity-25
                        hover:border-[#1e293b]'
                        >
                            Contact us
                        </button>
                    </div>
                </div>
            </div>
            <div className='mt-[50px] py-7 md:border-t-2 border-sky-500k flex xs:flex-col md:flex-row justify-between items-center'>
                <div className='list-none mt-2 flex'>
                {logoLinks.map((logo) =>
                            <div
                                key={logo.id}
                                className='
                            py-1
                            xs:mb-6
                            md:mb-0
                            mr-5
                            xs:text-[15px]
                            lg:text-lg
                            font-Rubik
                            cursor-pointer'
                            >
                             {logo.logo}
                            </div>
                        )}
                </div>
                <div className='mt-2 flex'>
                    <p className='xs:text-[14px] xl:text-[15px] mr-5 text-[#A3A3A3] font-Rubik'>Created by daniel</p>
                    <p className='xs:text-[14px] xl:text-[15px] text-[#A3A3A3] font-Rubik'>Powered by React </p>
                </div>
            </div>
        </div>
    )
}

export default Footer