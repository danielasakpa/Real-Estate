import React from 'react'
import footerLogo from "../assets/navlogo.svg";
import { Link } from "react-router-dom"
import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";
import { motion as m } from "framer-motion"

const Footer = () => {
    const navLinks = [
        { id: 1, name: "Properties", link: '/properties' },
        { id: 2, name: "Agents", link: '/agents' },
        { id: 3, name: "About", link: "/about" },
        { id: 4, name: "Contact", link: "/contact" }
    ]
    const logoLinks = [
        { id: 1, logo: <IoLogoFacebook size={25} color="#1F1717" />, link: "#" },
        { id: 2, logo: <IoLogoTwitter size={25} color="#1F1717" />, link: "#" },
        { id: 3, logo: <IoLogoLinkedin size={25} color="#1F1717" />, link: "#" },
        { id: 4, logo: <IoLogoInstagram size={25} color="#1F1717" />, link: "#" },
    ]

    return (
        <div className='xs:mt-[100px] md:mt-[170px] mx-auto'>
            <div className='flex mb-10 xs:flex-col md:flex-row'>
                <div className='md:basis-1/2 lg:basis-2/3 overflow-hidden'>
                    <Link to="/">
                        <img src={footerLogo} alt="footerLogo" />
                    </Link>
                    <nav className='flex mt-6 list-none xs:flex-col md:flex-row'>
                        {navLinks.map((link) =>
                            <m.li
                                initial={{ x: "100px" }}
                                whileInView={{ x: "0" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }}
                                key={link.id}
                                className='py-1 xs:mb-6 md:mb-0 mr-5 xs:text-[15px] lg:text-sm font-Arimo cursor-pointer'
                            >
                                <Link to={link.link} className='text-[#000000] hover:text-[#A3A3A3]'>
                                    {link.name}
                                </Link>
                            </m.li>
                        )}
                    </nav>
                </div>
                <div className='md:basis-1/2 xs:mt-6 md:mt-0 lg:basis-1/3'>
                    <p className='xs:text-[14px] xl:text-[17px] text-[#1F1717] font-Arimo'>Get the latest updates about properties and trends in the real estate market.</p>
                    <div className='flex items-center mt-5 xs:flex-col md:flex-row'>
                        <input type="text" className="form-input rounded bg-[#f5faff] border border-[#1F1717] border-opacity-25 xs:w-[100%] md:w-[65%] md:px-6 lg:px-10 py-2.5 mr-2"
                        />
                        <button className='xs:ml-[65%] md:ml-0 xs:mt-4 md:mt-0 xs:px-3 md:px-3 lg:px-4 xs:py-4 md:py-3 xs:text-[14px] md:text-[15px] font-Arimo bg-[#000000] rounded-md  text-stone-50 hover:bg-[#f5faff} hover:text-stone-900 border border-opacity-0 hover:border-opacity-25 border-[#1e293b]'
                        >
                            Contact us
                        </button>
                    </div>
                </div>
            </div>
            <div className='mt-[50px] py-5 md:border-t border-[#1F1717] border-opacity-50 flex xs:flex-col md:flex-row justify-between items-center'>
                <div className='flex mt-2 list-none'>
                    {logoLinks.map((logo) =>
                        <div
                            key={logo.id}
                            className='py-1 xs:mb-6 md:mb-0 mr-5 text-[#000000] hover:text-[#A3A3A3] xs:text-[15px] lg:text-lg font-Arimo cursor-pointer'
                        >
                            {logo.logo}
                        </div>
                    )}
                </div>
                <div className='flex mt-2'>
                    <p className='xs:text-[14px] xl:text-[15px] mr-5 text-[#1F1717] font-Arimo'>Created by daniel</p>
                    <p className='xs:text-[14px] xl:text-[15px] text-[#1F1717] font-Arimo'>Powered by React </p>
                </div>
            </div>
        </div>
    )
}

export default Footer