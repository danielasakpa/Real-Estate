import React from 'react'
import { motion as m } from "framer-motion"

const AgentCardSkeleton = () => {
    return (
        <m.div
            initial={{ x: "100%" }}
            whileInView={{ x: "0" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-96 shadow-md py-2 flex items-center bg-[#f5faff] animate-pulse cursor-pointer rounded-sm">
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