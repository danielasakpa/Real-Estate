import React from 'react'
import { motion as m } from "framer-motion"

const CardSkeleton = () => {
    return (
        <m.div
            initial={{ x: "100%" }}
            whileInView={{ x: "0" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-sm rounded overflow-hidden animate-pulse shadow-lg">
            <div className="w-full h-[170px] bg-[#94a3b8]"></div>
            <div className="px-6 py-4">
                <div className='flex items-center h-[100%]'>
                    <div className='w-[40px] h-[40px] mr-5 rounded-full bg-[#94a3b8]'></div>
                    <div className="w-[200px] h-[20px] bg-[#94a3b8]"></div>
                </div>
                <div className="w-50 mt-4 h-[40px] bg-[#94a3b8]">
                </div>

                <div className='flex mt-5 items-center h-[100%]'>
                    <div className='w-[40px] h-[40px] mr-5 rounded-lg bg-[#94a3b8]'></div>
                    <div className='w-[40px] h-[40px] mr-5 rounded-lg bg-[#94a3b8]'></div>
                    <div className='w-[40px] h-[40px] mr-5 rounded-lg bg-[#94a3b8]'></div>
                </div>

                <div className="w-[200px] h-[20px] mt-4 bg-[#94a3b8]"></div>
            </div>
        </m.div>
    )
}

export default CardSkeleton;