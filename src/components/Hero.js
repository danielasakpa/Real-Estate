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
      <div className='overflow-hidden py-14 xs:block lg:flex'>
        <m.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className='mx-auto md:mt-[30px] px-4 lg:mt-[200px] xl:mt-[230px] basis-1/2 text-left'>
          <m.p
            variants={item}
            className='xs:text-[15px] xl:text-[20px] text-[#171717] mb-3 font-bold'>EXPLORE DREAM PROPERTIES</m.p>
          <m.h1
            variants={item}
            className='xs:text-[35px] xl:text-[55px]  font-Roboto text-[#171717] text-left xs:leading-[45px] lg:leading-[50px] xl:leading-[60px]  font-bold'>Find the place that's perfect for you</m.h1>
          <m.p
            variants={item}
            className='xs:text-[18px] xl:text-[22px]  text-[#A3A3A3] mt-4 font-Roboto'>The best solution ever for those who're looking for an exceptional home and life</m.p>
          <m.div
            variants={item}
            className="flex mt-6">
            <button className='mr-3 transition duration-300 ease-in delay-50 hover:-translate-y-1 hover:scale-110 '><img className='rounded-md h-[50px]' src={Apple} alt="Apple" /></button>
            <button className='mr-3 transition duration-300 ease-in delay-50 hover:-translate-y-1 hover:scale-110 '><img className='rounded-md h-[50px]' src={Play} alt="Play" /></button>
          </m.div>
          <m.div
            variants={item}
            className='flex xs:mt-[50px] lg:mt-[40px] xs:justify-between lg:justify-start'>
            {ratings.map((rating, i) =>
              <div key={i} className='flex flex-col xs:mr-[10px] md:mr-[60px]'>
                <p className='xs:text-[20px] xl:text-[25px] text-[#171717] font-Roboto text-left leading-[30px] font-medium'>{rating.name}</p>
                <p className='xs:text-[13px] xl:text-[15px] text-[#A3A3A3] font-lightfont-Roboto'>{rating.text}</p>
              </div>
            )}
          </m.div>
        </m.div>
        <m.img
          initial={{ x: "100%" }}
          whileInView={{ x: "0" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          loading="lazy"
          className='basis-1/4 mt-[50px] xs:w-[100%] lg:w-[750px] mx-auto' src={heroImg} alt="heroImg" />
      </div>
      <h2 className='xs:text-[25px] xl:text-[40px] text-[#171717] mt-10 text-center font-Roboto lg:leading-[50px] xl:leading-[70px] font-bold'>Your home anywhere in the world</h2>
    </section>
  )
}

export default Hero