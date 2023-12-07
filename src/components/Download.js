import React from 'react'
import navLogo from "../assets/navlogo.svg";
import Apple from "../assets/Apple.svg"
import Play from "../assets/Play.svg"
import { IoLocationOutline, IoBedOutline } from "react-icons/io5";
import { TbBath } from "react-icons/tb";
import { motion as m } from "framer-motion"
import { container, item } from "../animation";

const Download = () => {
  return (
    <section className='relative mt-[150px] flex xs:flex-col lg:flex-row'>
      <m.div
        initial={{ x: "-100%" }}
        whileInView={{ x: "0" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        viewport={{ once: true }}
        className='h-[734px] xs:w-[100%] flex lg:w-[50%] bg-black'>
        <div className='xs:h-[462px] sm:h-[502px] xs:max-w-[300px] p-[32px] self-center mx-auto rounded-lg bg-[#F5FAFF]'>
          <img className='mb-[16px]' src={navLogo} alt="navLog" />
          <div className='flex justify-between mb-[20px]'>
            <div className="p-3 rounded-xs bg-[#f5f5f5]">
              <IoLocationOutline size={30} />
            </div>
            <div className="p-3 rounded-xs bg-[#f5f5f5]">
              <IoBedOutline size={30} />
            </div>
            <div className="p-3 rounded-xs bg-[#f5f5f5]">
              <TbBath size={30} />
            </div>
          </div>
          <p className='xs:text-[9px] text-[#1F1717] font-Arimo mb-[4px] tracking-[0.5px] leading-[12px] font-[400]'>BECOME A LEGENDARY DESIGNER</p>
          <h1 className='xs:text-[20px] sm:text-[24px] font-Inter mb-[8px] text-[#000000] text-left -tracking-[0.02em] xs:leading-[28px] sm:leading-[32px] font-[800]'>A headline to make big impact on visitors</h1>
          <p className='text-[14px] text-[#404040] font-Arimo'>A subheading that addresses the what, the why we should care and hopefully some social proof.</p>
          <button className='mt-[32px] w-[100%] px-3 py-2 font-Arimo bg-[#000000] rounded-md  text-stone-50 hover:bg-stone-100  hover:text-stone-900 border border-opacity-0 hover:border-opacity-25 border-[#1f1717]'
          >
            Download the app
          </button>
          <button className='mt-3 w-[100%] py-2 font-Arimo bg-[#f5faff] border-solid border border-[#1f1717] border-opacity-25 rounded-md  text-black hover:bg-stone-100  hover:text-stone-900 hover:border-opacity-50 hover:border hover:border-black'
          >
            Learn more
          </button>
        </div>
      </m.div>
      <div className='h-[400px] sm:h-[500px] lg:h-[700px] w-[100%] lg:w-[50%] flex justify-start items-center lg:block'>
        <div className='lg:pl-20 xs:block'>
          <m.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className='mx-auto sm:mt-[30px] lg:mt-[50px] xl:mt-[200px] text-left'>
            <m.p variants={item} className='text-[14px] text-[#1F1717] mb-[12px] tracking-[1px] leading-[20px] font-[400] font-Arimo'>DOWNLOAD OUR APP FOR IOS & ANDROID</m.p>
            <m.h1 variants={item} className='text-[32px] sm:text-[36px] text-[#000000] mb-[16px] font-Inter text-left -tracking-[0.02em] xs:leading-[40px] sm:leading-[44px] font-[800]'>Finding your home has never been so easy</m.h1>
            <m.p variants={item} className='text-[18px] leading-[28px] text-[#404040] font-[400] font-Arimo sm:w-[60%] lg:w-[100%]'>Innovative technologies and expert agents will help you find the best place to call home.</m.p>
            <m.div variants={item} className="flex mt-10 ">
              <button className='mr-3'><img className='rounded-md w-[135px] h-[45px]' src={Apple} alt="Apple" /></button>
              <button><img className='rounded-md -[135px] h-[45px]' src={Play} alt="Play" /></button>
            </m.div>
          </m.div>
        </div>
      </div>
    </section >
  )
}

export default Download