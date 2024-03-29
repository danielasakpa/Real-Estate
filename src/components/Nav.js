import React, { useState } from 'react'
import navLogo from "../assets/navlogo.svg";
import { Link } from "react-router-dom"
import { motion as m } from "framer-motion"

const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

    const navLinks = [
        { id: 1, name: "Properties", link: '/properties' },
        { id: 2, name: "Agents", link: '/agents' },
        { id: 3, name: "About", link: "/about" },
        { id: 4, name: "Contact", link: "/contact" }
    ]
    return (
        <section className='flex justify-between list-none items-center h-[100%] py-8'>
            <Link to="/">
                <img src={navLogo} alt="navLog" />
            </Link>
            <nav>
                <ul className='justify-between xs:hidden lg:flex'>
                    {navLinks.map((link, i) => (
                        <Link key={link.id} to={link.link}>
                            <m.li
                                initial={{ x: "100px" }}
                                whileInView={{ x: "0" }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true }}
                                key={link.id}
                                className='px-4 py-2 mr-5 text-sm font-Arimo text-[#000000] cursor-pointer border-opacity-0 hover:border-opacity-25 border border-[#1e293b] rounded-md'
                            >
                                {link.name.toUpperCase()}
                            </m.li>
                        </Link>
                    ))}
                </ul>
            </nav>
            <Link to='/properties'>
                <button className='px-3 py-2  xs:hidden text-sm lg:block font-Arimo bg-[#000000] rounded-md text-stone-50 hover:bg-[#f5faff] hover:text-stone-900 border border-[#1e293b] border-opacity-0 hover:border-opacity-25'
                >
                    Browse all
                </button>
            </Link>
            <section className="flex MOBILE-MENU lg:hidden">
                <div
                    className="HAMBURGER-ICON space-y-1.5 mt-[9px] animate-pulse cursor-pointer px-2 py-3 border-solid border border-[#1e293b] border-opacity-25 rounded-md"
                    onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                >
                    <span className="block h-0.5 w-6 bg-[#1e293b] border-opacity-25"></span>
                    <span className="block h-0.5 w-6 bg-[#1e293b] border-opacity-25"></span>
                    <span className="block h-0.5 w-6 bg-[#1e293b] border-opacity-25"></span>
                </div>

                <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                    <div
                        className="absolute top-0 right-0 px-8 py-8 CROSS-ICON"
                        onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                    >
                        <svg
                            className="w-8 h-8 text-gray-600"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </div>
                    <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                        <li className="mb-5 uppercase font-Arimo">
                            <Link to="/properties">Properties</Link>
                        </li>
                        <li className="my-5 uppercase font-Arimo">
                            <Link to="/agents">Agents</Link>
                        </li>
                        <li className="my-5 uppercase font-Arimo">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="my-5 uppercase font-Arimo">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <button className='w-[80%] mt-16 py-2 font-Arimo bg-black rounded-md text-stone-50 hover:bg-[#f5faff] hover:text-stone-900 hover:border-solid hover:border hover:border-black'
                    >
                        Browse all
                    </button>
                </div>
            </section>
            <style>{`
                .hideMenuNav {
                    display: none;
                }
                .showMenuNav {
                    display: block;
                    position: absolute;
                    width: 100%;
                    height: 100vh;
                    top: 0;
                    left: 0;
                    background: #f5faff;
                    z-index: 10;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }`
            }</style>
        </section>
    )
}

export default Nav;
