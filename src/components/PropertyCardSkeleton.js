import React from 'react'
import { motion as m } from "framer-motion"

const PropertyCardSkeleton = () => {
    return (
        <m.div
            initial={{ x: "100%" }}
            whileInView={{ x: "0" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-sm overflow-hidden rounded shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] animate-pulse">
            <div className="w-full h-[170px] rounded-sm bg-[#A3A3A3]"></div>
            <div className="px-3 py-4">
                <div className="w-[200px] h-[20px] rounded-sm bg-[#A3A3A3]"></div>
                <div className='flex mt-5 items-center h-[100%]'>
                    <div className='w-[50px] h-[20px] mr-5 rounded-sm bg-[#A3A3A3]'></div>
                    <div className='w-[50px] h-[20px] mr-5 rounded-sm bg-[#A3A3A3]'></div>
                    <div className='w-[50px] h-[20px] mr-5 rounded-sm bg-[#A3A3A3]'></div>
                </div>
                <div className="w-50 mt-4 h-[30px] rounded-sm bg-[#A3A3A3]">
                </div>
                <div className="w-[200px] h-[20px] mt-4 rounded-sm bg-[#A3A3A3]"></div>
            </div>
        </m.div>
    )
}

export default PropertyCardSkeleton;