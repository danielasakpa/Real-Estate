import React from 'react'
import footerLogo from "../assets/navlogo.svg";
import { Link } from "react-router-dom"
import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";
import { motion as m } from "framer-motion"

const Footer = () => {
    const navLinks = [
        { id: 1, name: "Properties", link: '/properties' },
        { id: 2, name: "Agents", link: '/agents' },
        { id: 3, name: "Blog", link: "/blog" },
        { id: 4, name: "About", link: "/about" },
        { id: 5, name: "Contact", link: "/contact" }
    ]
    const logoLinks = [
        { id: 1, logo: <IoLogoFacebook size={25} color="#A3A3A3" />, link: "#" },
        { id: 2, logo: <IoLogoTwitter size={25} color="#A3A3A3" />, link: "#" },
        { id: 3, logo: <IoLogoLinkedin size={25} color="#A3A3A3" />, link: "#" },
        { id: 4, logo: <IoLogoInstagram size={25} color="#A3A3A3" />, link: "#" },
    ]

    return (
        <div className='xs:mt-[100px] md:mt-[170px] mx-auto'>
            <div className='flex mb-10 xs:flex-col md:flex-row'>
                <div className='md:basis-1/2 lg:basis-2/3'>
                    <Link to="/">
                        <img src={footerLogo} alt="footerLogo" />
                    </Link>
                    <nav className='flex mt-6 list-none xs:flex-col md:flex-row'>
                        {navLinks.map((link) =>
                            <m.li
                                initial={{ x: "100px" }}
                                whileInView={{ x: "0" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                key={link.id}
                                className='py-1 xs:mb-6 md:mb-0 mr-5 text-[#171717] hover:text-[#A3A3A3] xs:text-[15px] lg:text-sm font-Roboto cursor-pointer'
                            >
                                <Link to={link.link}>
                                    {link.name}
                                </Link>
                            </m.li>
                        )}
                    </nav>
                </div>
                <div className='md:basis-1/2 xs:mt-6 md:mt-0 lg:basis-1/3'>
                    <p className='xs:text-[14px] xl:text-[17px] text-[#171717] font-Roboto'>Get the latest updates about properties and trends in the real estate market.</p>
                    <div className='flex items-center mt-5 xs:flex-col md:flex-row'>
                        <input type="text" className="form-input  rounded  border border-[#171717] border-opacity-25 focus:border-none focus:outline-none focus:focus:ring  focus:ring-opacity-25 focus:ring-[#1e293b] xs:w-[100%] md:w-[65%] md:px-6  lg:px-10 py-2.5 mr-2"
                        />
                        <button className='xs:ml-[65%] md:ml-0 xs:mt-4 md:mt-0 xs:px-3 md:px-3 lg:px-4 xs:py-4 md:py-3 xs:text-[14px] md:text-[15px] font-Roboto bg-[#171717]  rounded-md  text-stone-50 hover:bg-stone-100  hover:text-stone-900 border border-opacity-0 hover:border-opacity-25 border-[#1e293b]'
                        >
                            Contact us
                        </button>
                    </div>
                </div>
            </div>
            <div className='mt-[50px] py-5 md:border-t border-[#A3A3A3] border-opacity-50 flex xs:flex-col md:flex-row justify-between items-center'>
                <div className='flex mt-2 list-none'>
                    {logoLinks.map((logo) =>
                        <div
                            key={logo.id}
                            className='py-1 xs:mb-6 md:mb-0 mr-5 xs:text-[15px] lg:text-lg font-Roboto cursor-pointer'
                        >
                            {logo.logo}
                        </div>
                    )}
                </div>
                <div className='flex mt-2'>
                    <p className='xs:text-[14px] xl:text-[15px] mr-5 text-[#A3A3A3] font-Roboto'>Created by daniel</p>
                    <p className='xs:text-[14px] xl:text-[15px] text-[#A3A3A3] font-Roboto'>Powered by React </p>
                </div>
            </div>
        </div>
    )
}

export default Footer