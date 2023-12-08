import React from 'react'
import Questionandanswer from '../components/Questionandanswer';
import about1Img from "../assets/About1.jpg"
import QandA from "../data/OtherQandA"
import { IoIosPeople, IoMdFolderOpen } from "react-icons/io"
import { IoEarthOutline } from "react-icons/io5";
import { AiOutlineDownload } from "react-icons/ai";
import quoteImg from "../assets/Quote Light.svg"
import testimonialImg from "../assets/Testimonial.webp"
import { motion as m } from "framer-motion"
import { container, item, cardContainer, cardItem } from "../animation";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
}
const images = importAll(require.context('../assets/Company Logos', false, /\.(png|jpe?g|svg)$/));
var result = Object.keys(images).map((key) => images[key]);

const ratings = [
  {
    icon: IoIosPeople,
    name: '200+',
    text: "Happy clients"
  },
  {
    icon: IoMdFolderOpen,
    name: '100+',
    text: "offices worldwide"
  },
  {
    icon: AiOutlineDownload,
    name: '10k+',
    text: "Annual sales"
  },
  {
    icon: IoEarthOutline,
    name: '15+',
    text: "Countries"
  },
]

const About = () => {
  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <m.div
        variants={container}
        initial="hidden"
        animate="show"
        className='mt-10 xs:w-[100%] lg:w-[60%] mx-auto'>
        <m.p variants={item} className='text-[14px] text-[#1F1717] text-center mb-[12px] tracking-[1px] leading-[20px] font-[400] font-Arimo'>A WORLDWIDE NETWORK OF AGENTS</m.p>
        <m.h1 variants={item} className='xs:text-[44px] sm:text-[52px] font-Inter text-[#000000] text-center -tracking-[0.02em] mb-[24px] xs:leading-[54px] sm:leading-[56px] font-[800]'>Our story is made of our client's experiences.</m.h1>
        <m.p variants={item} className='xs:text-[18px] text-[#404040] text-center leading-[28px] mt-4 font-Arimo font-[400]'>We work to elevate your experience and help you make informed decisions to find a place to call home.</m.p>
      </m.div>
      <div className='relative mx-auto mt-16 sm:mt-20 w-[100%] h-[250px] sm:h-[350px] overflow-hidden md:w-[60%] lg:h-[500px]'>
        <m.img
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.75, ease: "easeIn" }}
          viewport={{ once: true }}
          className='rounded-lg mx-auto h-[250px] sm:h-[350px] lg:h-[500px]' src={about1Img} alt="about1Img" />
        <m.div
          initial={{ width: "100%" }}
          whileInView={{ width: "0" }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
          viewport={{ once: true }}
          className='absolute top-0 right-0 w-full h-full bg-[#f5faff]'>
        </m.div>
      </div>
      <div className='mt-[100px] flex xs:flex-col md:flex-row justify-between md:items-center'>
        <m.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className='basis-2/3 xs:mb-10 md:mb-0'>
          <m.h1 variants={item} className='text-[32px] sm:text-[36px] text-[#000000] mb-[16px] font-Inter text-left -tracking-[0.02em] xs:leading-[40px] sm:leading-[44px] font-bold'>Get access to remarkable properties.</m.h1>
          <m.p variants={item} className='text-[18px] leading-[28px] text-[#404040] font-[400] font-Arimo'>We work to elevate your experience and help you make informed decisions to find a place to call home.</m.p>
        </m.div>
        <div children="basis-1/3 flex justify-end">
          <button className='mr-5 px-6 py-3 font-Arimo bg-[#f5faff] border-solid border border-[#1F1717] border-opacity-25 rounded-md  text-black hover:bg-[#f5faff} hover:text-stone-900 hover:border-opacity-50 hover:border hover:border-black'
          >
            More details
          </button>
          <button className='xs:px-3 sm:px-4 py-3 xs:text-[14px] sm:text-[15px] font-Arimo bg-[#000000] rounded-md text-stone-50 hover:bg-[#f5faff} hover:bg-stone-100  hover:text-stone-900 border border-opacity-0 hover:border-opacity-25 border-[#1f1717]'
          >
            Contact us
          </button>
        </div>
      </div>
      <m.div
        variants={cardContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid justify-items-center content-center xs:grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
        {ratings.map((rating, i) =>
          <m.div
            variants={cardItem}
            key={i} className='h-[100px] xs:w-[100%] xs:mb-4 bg-[#f5faff] px-3 py-5 flex items-center rounded-lg shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-[#f5faff]'>
            <div className='py-4 px-5 bg-[#f5faff] mr-6 flex justify-center items-center rounded-lg'>
              <rating.icon size={25} />
            </div>
            <div>
              <div className='flex justify-center lg:items-center flex-col'>
                <p className='xs:text-[20px] xl:text-[24px] text-[#1F1717] font-Inter text-left leading-[28px] font-[500]'>{rating.name}</p>
                <p className='xs:text-[14px] sm:text-[13px] text-[#404040] font-light font-Arimo'>{rating.text}</p>
              </div>
            </div>
          </m.div>
        )}
      </m.div>
      <div className='flex xs:flex-col lg:flex-row overflow-hidden xs:mt-[70px] lg:mt-[200px] justify-between'>
        <div className='flex'>
          <img className="h-[30px] mr-6 xs:mb-4 lg:mb-0" src={quoteImg} alt="quoteImg" />
          <div className='mr-6'>
            <p className='text-[20px] sm:text-[24px] text-[#000000] mb-[24px] font-Inter text-left -tracking-[0.02em] xs:leading-[28px] sm:leading-[35px] font-[800]'>Have several friends looking for homes and thinking about selling, and we always recommend HomeQ to them!</p>
            <p className='text-[18px] leading-[28px] text-[#404040] mb-[24px]  font-[400] font-Arimo'>Ac faucibus orci id quis consectetur laoreet sed. Enim congue molestie nam odio pulvinar ac ultricies. Elementum ut pellentesque volutpat mi. Faucibus sit posuere nisi aenean ultrices. Suscipit malesuada aenean nullam et sit dapibus eget a eu. Nisl tortor arcu et.</p>
            <p className='xs:text-[16px] ] text-[#000000] mb-[4px] text-left leading-[24px] font-Inter font-[500]'>Loki Bright</p>
            <p className='text-[16px] text-[#404040] text-left font-Arimo'>Baltimora</p>
          </div>
        </div>
        <div>
          <div className='relative overflow-hidden xs:mt-[40px] lg:mt-0 lg:mb-0 lg:w-[600px] lg:h-[370px]'>
            <m.img
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.75, ease: "easeIn" }}
              viewport={{ once: true }}
              className='object-cover lg:w-[600px] lg:h-[370px] rounded-lg' src={testimonialImg} alt="testimonialImg" />
            <m.div
              initial={{ width: "100%" }}
              whileInView={{ width: "0" }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              viewport={{ once: true }}
              className='absolute top-0 right-0 w-full h-full bg-[#f5faff]'>
            </m.div>
          </div>
        </div>
      </div>
      <div className='xs:mt-[100px] flex flex-col items-center lg:mt-[200px]'>
        <p className='xs:text-[32px] sm:text-[36px] mb-[16px] font-Inter text-[#000000] text-center -tracking-[0.02em] xs:leading-[40px] mg:leading-[44px] font-[800]'>A network of partners for innovative solutions</p>
        <m.div
          variants={cardContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className='grid gap-4 mt-7 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-2'>
          {result.map((image, i) =>
            <m.div
              variants={cardItem}
              key={i}
              className='flex h-[170px] w-[280px] px-3 py-5 justify-center items-center bg-[#f5faff] rounded-lg shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-[#f5faff]'>
              <img src={image} alt="compImg" />
            </m.div>
          )}
        </m.div>
        <p className='text-[16px] leading-[28px] text-[#404040] mt-10 font-[500] font-Arimo'>1000+ HAPPY CLIENTS WORLDWIDE</p>
      </div>
      <div className='xs:mt-[100px] sm:mt-[170px] basis-1/4 mb-10 flex xs:flex-col lg:flex-row'>
        <m.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className='text-left basis-1/2'>
          <m.h1 variants={item} className='xs:text-[32px] sm:text-[36px] font-Inter text-left mb-[12px] xs:leading-[40px] sm:leading-[44px] font-[800]'>Frequently Asked Questions</m.h1>
          <m.p variants={item} className='xs:text-[16px] leading-[28px] text-[#404040] font-[400] font-Arimo'>Can’t find answers you’re looking for?</m.p>
          <m.p variants={item} className='xs:text-[16px] leading-[28px] text-[#404040] font-[400] font-Arimo'>Drop us a line. We'll be happy to help you.</m.p>
        </m.div>
        <Questionandanswer QandA={QandA} />
      </div>
    </m.section>
  )
}

export default About