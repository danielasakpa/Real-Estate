import React, { useState } from 'react'
import navLogo from "../assets/navlogo.svg";

const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

    const navLinks = [
        { id: 1, name: "Properties", link: "/properties" },
        { id: 2, name: "Agent", link: "/agent" },
        { id: 3, name: "Blog", link: "/blog" },
        { id: 4, name: "About", link: "/about" },
        { id: 5, name: "Contact", link: "/contact" }
    ]
    return (
        <div className='flex justify-between align-middle h-[100%] py-8'>
            <img src={navLogo} alt="navLog" />
            <nav className='list-none xs:hidden lg:flex'>
                {navLinks.map((Link) => (
                    <li
                        key={Link.id}
                        className='
                    px-5 
                    py-1
                    mr-3
                    text-lg
                    font-Rubik
                    text-[#17171]
                    cursor-pointer
                    hover:border-solid 
                    transition ease-in delay-50
                    hover:shadow-md
                    hover:border-opacity-25
                    hover:border
                    hover:border-[#1e293b]
                    duration-300 
                    hover:rounded-md'
                    >
                        {Link.name}
                    </li>
                ))}
            </nav>
            <button className='
            px-3
            py-2 
            xs:hidden 
            lg:block
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
                Browse all
            </button>
            <section className="MOBILE-MENU flex lg:hidden">
                <div
                    className="HAMBURGER-ICON space-y-1.5 mt-[9px]"
                    onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                >
                    <span className="block h-0.5 w-6 animate-pulse bg-gray-600"></span>
                    <span className="block h-0.5 w-6 animate-pulse bg-gray-600"></span>
                    <span className="block h-0.5 w-6 animate-pulse bg-gray-600"></span>
                </div>

                <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                    <div
                        className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                        onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                    >
                        <svg
                            className="h-8 w-8 text-gray-600"
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
                        <li className="font-Rubik mt-10 mb-5 uppercase">
                            <a href="/properties">Properties</a>
                        </li>
                        <li className="font-Rubik my-5 uppercase">
                            <a href="/agent">Agent</a>
                        </li>
                        <li className="font-Rubik my-5 uppercase">
                            <a href="/blog">Blog</a>
                        </li>
                        <li className="font-Rubik my-5 uppercase">
                            <a href="/about">About</a>
                        </li>
                        <li className="font-Rubik my-5 uppercase">
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                    <button className='
                    w-[80%]
                    py-2 
                    font-Rubik
                    bg-black 
                    rounded-md 
                    text-stone-50
                    hover:bg-stone-100 
                    hover:text-stone-900
                    hover:border-solid 
                    hover:border
                    hover:border-black'
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
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
        </div>
    )
}

export default Nav;
