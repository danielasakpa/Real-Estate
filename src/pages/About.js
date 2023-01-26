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
import { container, item } from "../animation";

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
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <m.div
        ariants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className='mt-10 xs:w-[100%] lg:w-[50%] mx-auto'>
        <m.p variants={item} className='text-[17px] text-center text-[#171717] mb-3 font-medium'>A WORLDWIDE NETWORK OF AGENTS</m.p>
        <m.h1 variants={item} className='xs:text-[40px] xl:text-[50px] font-Roboto text-[#171717] text-center xs:leading-[50px] lg:leading-[50px] font-bold'>Our story is made of our client's experiences.</m.h1>
        <m.p variants={item} className='xs:text-[18px] lg:text-[20px] text-[#A3A3A3] text-center mt-4 font-Roboto'>We work to elevate your experience and help you make informed decisions to find a place to call home.</m.p>
      </m.div>
      <div className='relative mx-auto mt-20 xs:hidden  md:block xs:w-[100%] overflow-hidden lg:w-[60%] h-[500px]'>
        <m.img
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.75, ease: "easeIn" }}
          viewport={{ once: true }}
          className='rounded-lg  h-[500px]' src={about1Img} alt="about1Img" />
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
          ariants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className='basis-1/2 xs:mb-10 md:mb-0'>
          <m.h1 variants={item} className='xs:text-[20px] xl:text-[35px] font-Roboto text-[#171717] text-left font-bold'>Get access to remarkable properties.</m.h1>
          <m.p variants={item} className='xs:text-[18px] lg:text-[22px] text-[#A3A3A3] text-left mt-4 font-Roboto'>We work to elevate your experience and help you make informed decisions to find a place to call home.</m.p>
        </m.div>
        <div children="basis-1/2 flex justify-end">
          <button className='mr-5 px-6 py-3 font-Roboto bg-[#FFFFFF] border-solid border border-[#171717] border-opacity-25 rounded-md  text-black hover:bg-stone-100  hover:text-stone-900 hover:border-opacity-50 hover:border hover:border-black'
          >
            More details
          </button>
          <button className='xs:px-3 md:px-4 xs:py-4 md:py-3 xs:text-[14px] md:text-[15px] font-Roboto bg-[#171717]  rounded-md  text-stone-50 hover:bg-stone-100  hover:text-stone-900 border border-opacity-0 hover:border-opacity-25 border-[#1e293b]'
          >
            Contact us
          </button>
        </div>
      </div>
      <div className='flex flex-wrap items-center mt-16 xs:flex-col md:flex-row xs:justify-center lg:justify-between'>
        {ratings.map((rating, i) =>
          <m.div
            initial={{ y: "100%" }}
            whileInView={{ y: "0" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            key={i} className='h-[100px] xs:w-[100%] xs:mb-4 md:w-[280px] px-3 py-5 flex items-center rounded-lg shadow-md bg-[#ffffff]'>
            <div className='py-4 px-5 bg-[#F5F5F5] mr-6 flex justify-center items-center rounded-lg'>
              <rating.icon size={25} />
            </div>
            <div>
              <div className='flex justify-center lg:items-center flex-col xs:mr-[10px] md:mr-[60px]'>
                <p className='xs:text-[20px] xl:text-[25px] text-[#171717] font-Roboto text-left leading-[30px] font-medium'>{rating.name}</p>
                <p className='xs:text-[13px] xl:text-[12px] text-[#A3A3A3] text-left font-medium font-Roboto'>{rating.text}</p>
              </div>
            </div>
          </m.div>
        )}
      </div>
      <div className='flex xs:flex-col lg:flex-row overflow-hidden xs:mt-[70px] lg:mt-[200px] justify-between'>
        <div className='flex xs:flex-col lg:flex-row'>
          <img className="h-[30px] mr-6 xs:mb-4 lg:mb-0" src={quoteImg} alt="quoteImg" />
          <div className='mr-6'>
            <p className='xs:text-[20px] xl:text-[28px] text-[#171717] font-Roboto text-left leading-[35px] font-bold'>have several friends looking for homes and thinking about selling, and we always recommend HomeQ to them!</p>
            <p className='xs:text-[17px] xl:text-[21px] text-[#A3A3A3] mt-7 text-left font-Roboto'>Ac faucibus orci id quis consectetur laoreet sed. Enim congue molestie nam odio pulvinar ac ultricies. Elementum ut pellentesque volutpat mi. Faucibus sit posuere nisi aenean ultrices. Suscipit malesuada aenean nullam et sit dapibus eget a eu. Nisl tortor arcu et.</p>
            <p className='xs:text-[17px] xl:text-[19px] text-[#171717] mt-7 text-left font-Roboto'>Loki Bright</p>
            <p className='text-[16px] text-[#A3A3A3] mt-1 text-left font-Roboto'>Baltimora</p>
          </div>
        </div>
        <div>
          <div className='relative overflow-hidden xs:mt-5 lg:mt-0 lg:mb-0 lg:w-[600px] lg:h-[370px]'>
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
        <p className='xs:text-[20px] xl:text-[35px] text-[#171717] font-Roboto text-center leading-[35px] font-bold'>A network of partners for innovative solutions</p>
        <div className='grid gap-4 mt-7 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
          {result.map((image, i) =>
            <m.div
              initial={{ y: "100%" }}
              whileInView={{ y: "0" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              key={i}
              className='flex h-[170px] w-[280px] px-3 py-5 justify-center items-center rounded-lg shadow-md bg-[#FFFFFF]'>
              <img src={image} alt="compImg" />
            </m.div>
          )}
        </div>
        <p className='xs:text-[18px] xl:text-[20px] text-center text-[#A3A3A3] mt-8 font-Roboto'>Drop us a line. We'll be happy to help you.</p>
      </div>
      <div className='xs:mt-[100px] md:mt-[170px] basis-1/4 mb-10 flex xs:flex-col lg:flex-row'>
        <m.div
          ariants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className='text-left basis-1/2'>
          <m.h1 variants={item} className='xs:text-[30px] lg:text-[35px] xl:text-[37px] font-Roboto text-left xs:leading-[35px] lg:leading-[40px] xl:leading-[50px] font-bold'>Frequently Asked Questions</m.h1>
          <m.p variants={item} className='xs:text-[18px] xl:text-[17px]  text-[#A3A3A3] mt-6 font-Roboto'>Can’t find answers you’re looking for?</m.p>
          <m.p variants={item} className='xs:text-[18px] xl:text-[17px]  text-[#A3A3A3] mt-1 font-Roboto'>Drop us a line. We'll be happy to help you.</m.p>
        </m.div>
        <Questionandanswer QandA={QandA} />
      </div>
    </m.div>
  )
}

export default About