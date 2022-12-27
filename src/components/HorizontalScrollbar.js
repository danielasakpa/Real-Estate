import { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import agentImg from "../assets/agents.webp";


const HorizontalScrollbar = () => {

    const LeftArrow = () => {
        const { scrollPrev } = useContext(VisibilityContext);

        return (
            <div onClick={() => scrollPrev()} className="absolute cursor-pointer h-[30px] w-[100px] bottom-2 left-1">
                <img src={LeftArrowIcon} alt="left-arrow" />
            </div>
        );
    };

    const RightArrow = () => {
        const { scrollNext } = useContext(VisibilityContext);

        return (
            <div onClick={() => scrollNext()} className="absolute cursor-pointer h-[30px] w-[100px] bottom-2 left-10">
                <img src={RightArrowIcon} alt="right-arrow" />
            </div>
        );
    };

    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num =>
                <div
                    itemId={num}
                    title={num}
                    key={num}
                    className='h-[350px] m-auto mx-4 w-[270px] cursor-pointer bg-[#f8fafc]'
                >
                    <div className="max-w-sm rounded overflow-hidden">
                        <img className="w-full h-[250px] object-cover" src={agentImg} alt="Sunset in the mountains" />
                        <p className='text-[20px] text-[#171717] mt-3 font-Rubik'>Koray Okumus</p>
                        <p className='text-[15px] text-[#A3A3A3] mt-2 font-Rubik'>Real estate professional</p>
                    </div>
                </div>
            )}
        </ScrollMenu>
    )
}

export default HorizontalScrollbar;