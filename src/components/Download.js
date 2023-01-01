import React from 'react'
import navLogo from "../assets/navlogo.svg";
import Apple from "../assets/Apple.svg"
import Play from "../assets/Play.svg"
import { IoLocationOutline, IoBedOutline } from "react-icons/io5";
import { TbBath } from "react-icons/tb";

const Download = () => {

  return (
    <section className='relative mt-[150px] flex xs:flex-col lg:flex-row'>
      <div className='h-[700px] xs:w-[100%] flex lg:w-[50%] bg-black'>
        <div className='xs:h-[500px] md:h-[520px] xs:w-[80%] p-6 self-center mx-auto md:w-[300px] rounded-lg bg-[#F5FAFF]'>
          <img loading="lazy" src={navLogo} alt="navLog" />
          <div className='flex justify-between px-5 mt-7'>
            <div>
              <IoLocationOutline size={30} />
            </div>
            <div>
              <IoBedOutline size={30} />
            </div>
            <div>
              <TbBath size={30} />
            </div>
          </div>
          <p className='mt-[30px] xs:text-[10px] md:text-[12px] text-[#171717] mb-3 font-bold'>BECOME A LEGENDARY DESIGNER</p>
          <h1 className='xs:text-[20px] md:text-[26px] font-Roboto text-[#171717]-left xs:leading-[20px] md:leading-[30px] font-bold'>A headline to make big impact on visitors</h1>
          <p className='xs:text-[12px] md:text-[15px] text-[#A3A3A3] mt-4 font-Roboto'>A subheading that addresses the what, the why we should care and hopefully some social proof.</p>
          <button className='xs:mt-10 md:mt-7 w-[100%] px-3 py-2  font-Roboto bg-[#171717] rounded-md  text-stone-50 hover:bg-stone-100  hover:text-stone-900 border border-opacity-0 hover:border-opacity-25 border-[#171717]'
          >
            Download the app
          </button>
          <button className='mt-3 w-[100%] py-2 font-Roboto bg-[#FFFFFF] border-solid border border-[#171717] border-opacity-25 rounded-md  text-black hover:bg-stone-100  hover:text-stone-900 hover:border-opacity-50 hover:border hover:border-black'
          >
            Browse all property
          </button>
        </div>
      </div>
      <div className='lg:h-[700px] xs:w-[100%] lg:w-[50%]'>
        <div className='lg:pl-20 xs:mt-[50px] lg:mt-[220px] xs:block'>
          <div className='mx-auto md:mt-[30px] lg:mt-[50px] xl:mt-[200px]text-left'>
            <p className='text-[15px] text-[#171717] mb-3 font-bold'>DOWNLOAD OUR APP FOR IOS & ANDROID</p>
            <h1 className='xs:text-[35px] lg:text-[40px] text-[#171717] xl:text-[50px] font-Roboto text-left xs:leading-[40px] lg:leading-[50px] md:leading-[50px] xl:leading-[50px] font-bold'>Finding your home has never been so easy</h1>
            <p className='xs:text-[18px] xl:text-[22px]  text-[#A3A3A3] mt-4 font-Roboto'>Innovative technologies and expert agents will help you find the best place to call home.</p>
            <div className="flex mt-10 xs:flex-col md:flex-row">
              <button className='mr-3 transition duration-300 ease-in delay-50 hover:-translate-y-1 hover:scale-110 '><img className='rounded-md h-[50px]' src={Apple} alt="Apple" /></button>
              <button className='mr-3 transition duration-300 ease-in xs:mt-4 md:mt-0 delay-50 hover:-translate-y-1 hover:scale-110 '><img className='rounded-md h-[50px]' src={Play} alt="Play" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download