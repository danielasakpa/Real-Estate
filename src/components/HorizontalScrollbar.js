import { useContext } from 'react';
import agentsData from "../data/agentsData"
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';


const HorizontalScrollbar = () => {

    const logoLinks = [
        { id: 1, logo: <IoLogoFacebook size={19} color="#737373" />, link: "#" },
        { id: 2, logo: <IoLogoTwitter size={19} color="#737373" />, link: "#" },
        { id: 3, logo: <IoLogoLinkedin size={19} color="#737373" />, link: "#" },
        { id: 4, logo: <IoLogoInstagram size={19} color="#737373" />, link: "#" },
    ]

    const LeftArrow = () => {
        const { scrollPrev } = useContext(VisibilityContext);

        return (
            <div onClick={() => scrollPrev()} className="absolute cursor-pointer h-[30px] w-[100px] -bottom-4 left-1">
                <img src={LeftArrowIcon} alt="left-arrow" />
            </div>
        );
    };
    const RightArrow = () => {
        const { scrollNext } = useContext(VisibilityContext);

        return (
            <div onClick={() => scrollNext()} className="absolute cursor-pointer h-[30px] w-[100px] -bottom-4 left-14">
                <img src={RightArrowIcon} alt="right-arrow" />
            </div>
        );
    };

    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {agentsData.map(agent =>
                <div
                    itemID={agent.name}
                    title={agent.name}
                    key={agent.name}
                    className='h-[350px] m-auto mr-4 w-[270px] cursor-pointer bg-[#f5faff] rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'
                >
                    <div className="max-w-sm">
                        <div className='w-full h-[250px] overflow-hidden rounded-md'>
                            <img loading="lazy" className="w-full h-[250px] object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer duration-300" src={agent.img} alt="Sunset in the mountains" />
                        </div>
                        <div className='px-2 mt-2'>
                            <p className='text-[16px] text-[#404040] mt-3 leading-[24px] font-[500] font-Questrial'>{agent.name}</p>
                            <p className='text-[14px] text-[#525252] leading-[20px] font-[500] font-Arimo'>{agent.position}</p>
                            <div className='flex mt-2 list-none'>
                                {logoLinks.map((logo) =>
                                    <div
                                        key={logo.id}
                                        style={{ color: "red" }}
                                        className='py-1 xs:mb-6 md:mb-0 mr-5 text-[10px] font-Arimo cursor-pointer'
                                    >
                                        {logo.logo}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </ScrollMenu>
    )
}

export default HorizontalScrollbar;