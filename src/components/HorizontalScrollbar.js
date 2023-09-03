import { useContext } from 'react';
import agentsData from "../data/agentsData"
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';


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
            <div onClick={() => scrollNext()} className="absolute cursor-pointer h-[30px] w-[100px] bottom-2 left-14">
                <img src={RightArrowIcon} alt="right-arrow" />
            </div>
        );
    };

    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {agentsData.map(agent =>
                <div
                    itemId={agent.name}
                    title={agent.name}
                    key={agent.name}
                    className='h-[350px] m-auto mx-4 w-[270px] cursor-pointer bg-[#f8fafc]'
                >
                    <div className="max-w-sm overflow-hidden rounded">
                        <img loading="lazy" className="w-full h-[250px] object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer duration-300" src={agent.img} alt="Sunset in the mountains" />
                        <p className='text-[20px] text-[#171717] mt-3 font-Roboto'>{agent.name}</p>
                        <p className='text-[15px] text-[#A3A3A3] mt-2 font-Roboto'>{agent.position}</p>
                    </div>
                </div>
            )}
        </ScrollMenu>
    )
}

export default HorizontalScrollbar;