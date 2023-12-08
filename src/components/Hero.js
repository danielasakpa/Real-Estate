import React from 'react'
import heroImg from "../assets/Hero.jpeg"
import Apple from "../assets/Apple.svg"
import Play from "../assets/Play.svg"
import { motion as m } from "framer-motion"
import { container, item } from "../animation";

const Hero = () => {
  const ratings = [
    {
      name: '200+',
      text: "Happy clients"
    },
    {
      name: '300+',
      text: "Properties"
    },
    {
      name: '100K+',
      text: "Home Visits"
    },
  ]

  return (
    <section>
      <div className='overflow-hidden py-14 xs:block lg:flex space-x-[10px]'>
        <m.div
          variants={container}
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          className='mx-auto md:mt-[30px] lg:mt-[100px] xl:mt-[150px] basis-1/2 text-left'>
          <m.p
            variants={item}
            className='xs:text-[14px] text-[#1F1717] tracking-[1px] leading-[20px] font-Arimo mb-[12px] font-[400]'>EXPLORE DREAM PROPERTIES</m.p>
          <m.h1
            variants={item}
            className='xs:text-[44px] md:text-[52px] font-Inter text-[#000000] text-left -tracking-[0.02em] mb-[24px] xs:leading-[54px] md:leading-[56px] font-[800]'>Find the place that's perfect for you</m.h1>
          <m.p
            variants={item}
            className='xs:text-[18px] text-[#404040] leading-[28px] mt-4 font-Arimo font-[400]'>The best solution ever for those who're looking for an exceptional home and life</m.p>
          <m.div
            variants={item}
            className="flex mt-6">
            <button className='mr-3'><img className='rounded-md h-[50px]' src={Apple} alt="Apple" /></button>
            <button><img className='rounded-md h-[50px]' src={Play} alt="Play" /></button>
          </m.div>
          <m.div
            variants={item}
            className='flex xs:mt-[50px] lg:mt-[70px] xl:mt-[90px] xs:justify-between lg:justify-start'>
            {ratings.map((rating, i) =>
              <div key={i} className='flex flex-col xs:mr-[10px] md:mr-[80px]'>
                <p className='xs:text-[20px] xl:text-[24px] text-[#1F1717] font-Inter text-left leading-[28px] font-[500]'>{rating.name}</p>
                <p className='xs:text-[14px] md:text-[15px] text-[#404040] font-light font-Arimo'>{rating.text}</p>
              </div>
            )}
          </m.div>
        </m.div>
        <div className='basis-1/2 relative mt-[50px] xs:w-[100%] xs:h-[450px] lg:h-[764px] overflow-hidden lg:w-[750px] mx-auto'>
          <m.img
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.75, ease: "easeIn" }}
            viewport={{ once: true }}
            className='xs:w-[100%] xs:h-[450px] lg:w-[750px] lg:h-[764px]' src={heroImg} alt="heroImg" />
          <m.div
            initial={{ width: "100%" }}
            whileInView={{ width: "0" }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            viewport={{ once: true }}
            className='absolute top-0 right-0 w-full h-full bg-[#f5faff]'>

          </m.div>
        </div>
      </div>
      <h2 className='xs:text-[32px] md:text-[36px] text-[#000000] mt-3 font-Inter -tracking-[0.02em] text-center xs:leading-[40px] md:leading-[44px] md:leading-[44px] font-[800]'>Your home anywhere in the world</h2>
    </section>
  )
}

export default Hero