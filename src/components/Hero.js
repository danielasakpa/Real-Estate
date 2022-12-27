import React from 'react'
import heroImg from "../assets/Hero.jpeg"
import Apple from "../assets/Apple.svg"
import Play from "../assets/Play.svg"

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
      <div className='py-14 xs:block overflow-hidden lg:flex'>
        <div className='mx-auto md:mt-[30px] px-4 lg:mt-[200px] xl:mt-[200px] basis-1/2 text-left'>
          <p className='xs:text-[15px] xl:text-[20px] text-[#171717] mb-3 font-bold'>EXPLORE DREAM PROPERTIES</p>
          <h1 className='xs:text-[45px] xl:text-[60px] font-Rubik text-[#171717] text-left xs:leading-[45px] lg:leading-[50px] xl:leading-[70px] font-bold'>Find the place that's perfect for you</h1>
          <p className='xs:text-[18px] xl:text-[22px]  text-[#A3A3A3] mt-4 font-Rubik'>The best solution ever for those who're looking for an exceptional home and life</p>
          <div className="flex mt-6">
            <button className='mr-3 transition ease-in delay-50 hover:-translate-y-1 hover:scale-110 duration-300 '><img className='rounded-md h-[50px]' src={Apple} alt="Apple" /></button>
            <button className='mr-3 transition ease-in delay-50 hover:-translate-y-1 hover:scale-110 duration-300 '><img className='rounded-md h-[50px]' src={Play} alt="Play" /></button>
          </div>
          <div className='flex xs:mt-[50px] lg:mt-[40px] xs:justify-between lg:justify-start'>
            {ratings.map((rating, i) =>
              <div key={i} className='flex flex-col xs:mr-[10px] md:mr-[60px]'>
                <p className='xs:text-[20px] xl:text-[25px] text-[#171717] font-Rubik text-left leading-[30px] font-medium'>{rating.name}</p>
                <p className='xs:text-[13px] xl:text-[15px] text-[#A3A3A3] font-lightfont-Rubik'>{rating.text}</p>
              </div>
            )}
          </div>
        </div>
          <img className='basis-1/4 mt-[50px] w-[100%] mx-auto' src={heroImg} alt="heroImg" />
      </div>
      <h2 className='xs:text-[25px] xl:text-[40px] text-[#171717] mt-10 text-center font-Rubik lg:leading-[50px] xl:leading-[70px] font-bold'>Your home anywhere in the world</h2>
    </section>
  )
}

export default Hero