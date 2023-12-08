import React from 'react'
import { motion as m } from "framer-motion"

const AgentCardSkeleton = () => {
    return (
        <m.div
            initial={{ x: "100%" }}
            whileInView={{ x: "0" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-96 py-2 flex items-center bg-[#f5faff] animate-pulse cursor-pointer rounded-sm shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
            <div className='w-[100px] h-[100px] bg-[#A3A3A3] rounded-sm mr-5'>
            </div>
            <div className="text-left">
                <p variant="h5" color="blue-gray" className='text-[20px] bg-[#A3A3A3] h-[20px] w-[150px] mt-3 font-Roboto'>
                </p>
                <p color="blue" className='text-[15px] bg-[#A3A3A3] h-[20px] w-[100px] mt-2 font-Roboto' textGradient>
                </p>
                <p color="blue" className='text-[15px] bg-[#A3A3A3] h-[20px] w-[100px] mr-5 mt-2 font-Roboto' textGradient>
                </p>
            </div>
        </m.div>
    )
}

export default AgentCardSkeleton