import React from 'react';
import Hero from '../components/Hero';
import Properties from '../components/Prperties';
import Download from '../components/Download';
import Testimonial from '../components/Testimonial';
import Questionandanswer from '../components/Questionandanswer';
import trustImg from "../assets/trust.webp";
import rating from '../assets/rating.svg'
import HorizontalScrollbar from '../components/HorizontalScrollbar';
import QandA from '../data/HomeQandA';
import { CiDollar } from "react-icons/ci";
import { TbBath } from "react-icons/tb";
import { IoEarthOutline } from "react-icons/io5";
import { AiOutlineDownload } from "react-icons/ai";
import { IoBedOutline, IoChevronDownCircleOutline } from "react-icons/io5";
import { motion as m } from "framer-motion"
import { container, item, cardContainer, cardItem } from "../animation";
import { Link } from "react-router-dom"

const Home = () => {
    const experiences = [
        {
            icon: TbBath,
            title: "The solution you're looking for",
        },
        {
            icon: CiDollar,
            title: "The best price for your needs",
        },
        {
            icon: IoEarthOutline,
            title: "Exclusive access to local experts",
        },
        {
            icon: AiOutlineDownload,
            title: "Step by step assistance with docs",
        },
        {
            icon: IoBedOutline,
            title: "Home spaces perfect for you",
        },
        {
            icon: IoChevronDownCircleOutline,
            title: "Tailored experience For every client",
        },
    ]

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <Hero />
            <div className='list-none'>
                <Properties Pagination={false} />
                <div className='flex justify-center items-center mt-[50px] sm:mt-[80px] w-[100%]'>
                    <Link to='/properties'>
                        <button className=' mx-auto px-10 py-4 font-Arimo bg-[#f5faff] border-solid border border-[#1e293b] border-opacity-25 rounded-md  text-black hover:bg-[#f5faff} hover:text-stone-900 hover:border-opacity-50 hover:border hover:border-black'
                        >
                            Browse all property
                        </button>
                    </Link>
                </div>
            </div>
            <Download />
            <section>
                <div className='xs:block py-[56px] lg:pt-[172px] lg:pb-[120px] lg:flex'>
                    <m.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className='mx-auto sm:mt-[30px] lg:mt-[90px] sm:mt-[110px] basis-1/2 text-left'>
                        <m.p variants={item} className='xs:text-[14px] text-[#1F1717] mb-[12px] tracking-[1px] leading-[20px] font-[400] font-Arimo'>YOUR TRUST HELPS</m.p>
                        <m.h1 variants={item} className='xs:text-[56px] sm:text-[52px] text-[#000000] mb-[24px] font-Inter text-left -tracking-[0.02em] xs:leading-[64px] sm:leading-[56px] sm:leading-[50px] font-[800] sm:font-[700]'>A headline to make an impact on visitors</m.h1>
                        <m.p variants={item} className='xs:text-[18px] leading-[28px] text-[#404040] font-[400] font-Arimo sm:w-[70%]'>We work to elevate you experience and help you make informed decisions.</m.p>
                        <m.div variants={item} className='flex mt-[32px] xs:flex-col sm:flex-row sm:items-center'>
                            <button className='mr-3 px-4 py-2  font-Arimo bg-[#000000]  rounded-md  text-stone-50 hover:bg-[#f5faff] hover:text-stone-900 border border-[#1e293b] border-opacity-0 hover:border-opacity-25'
                            >
                                Start now
                            </button>
                            <div className='flex xs:mt-7 sm:mt-0 sm:items-center'>
                                <img loading="lazy" className='mr-3' src={rating} alt="rating" />
                                <p className='text-[14px] text-[#404040] font-Arimo'>from 100+ reviews</p>
                            </div>
                        </m.div>
                    </m.div>
                    <div className='basis-1/2 overflow-hidden relative mt-[50px] xs:w-[100%] mx-auto'>
                        <m.img
                            initial={{ scale: 1.2 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.75, ease: "easeIn" }}
                            viewport={{ once: true }}
                            className='xs:w-[100%] object-cover lg:h-[350px] sm:h-[400px]' src={trustImg} alt="trustImg" />
                        <m.div
                            initial={{ width: "100%" }}
                            whileInView={{ width: "0" }}
                            transition={{ duration: 0.75, ease: "easeInOut" }}
                            viewport={{ once: true }}
                            className='absolute top-0 right-0 w-full h-full bg-[#f5faff]'>
                        </m.div>
                    </div>
                </div>
                <m.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className='mt-[60px] max-w-[600px] mx-[auto]'>
                    <m.p variants={item} className='xs:text-[14px] text-[#1f1717] text-center mb-3 tracking-[1px] xs:leading-[20px] font-[400] font-Arimo'>WHY TO CHOOSE HOMEQ</m.p>
                    <m.h1 variants={item} className='xs:text-[32px] sm:text-[36px] mb-[16px] font-Inter text-[#000000] text-center -tracking-[0.02em] xs:leading-[40px] sm:leading-[44px] font-[800]'>The best experience to sell/rent your house</m.h1>
                </m.div>
                <m.div
                    variants={cardContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className='grid gap-2 w-[100%] my-10 mx-[auto] xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-content-center'>
                    {experiences.map((experience, i) =>
                        <m.div
                            variants={cardItem}
                            key={i} className='max-h-[250px] w-[100%] lg:max-w-[410px] px-2 sm:px-4 py-5 rounded-lg bg-[#f5faff]'>
                            <div className='p-1 w-[40px] flex justify-center bg-[#f5faff] items-center h-[40px]  rounded-full'>
                                <experience.icon size={25} />
                            </div>
                            <p className='text-[17px] mt-4 font-Arimo text-[#000000] text-left font-[600]'>{experience.title}</p>
                            <p className='text-[16px] text-[#404040] mt-2 font-Arimo'>Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.</p>
                        </m.div>
                    )}
                </m.div>
                <div className='mt-[90px]'>
                    <h1 className='xs:text-[32px] sm:text-[40px] text-[#000000] mb-[16px] font-Inter text-left -tracking-[0.02em] leading-[40px] font-[800]'>Meet our agents</h1>
                    <p className='text-[14px] text-[#404040] font-Arimo'>Our local experts will guide you on your journey</p>
                    <div className='h-[400px] mt-5 relative'>
                        <HorizontalScrollbar />
                    </div>
                </div>
                <div className='my-[150px]'>
                    <Testimonial />
                </div>
                <div className='xs:mt-[100px] sm:mt-[170px] basis-1/4 mb-10 flex xs:flex-col lg:flex-row'>
                    <m.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className='text-left basis-1/2'>
                        <m.h1 variants={item} className='xs:text-[32px] sm:text-[36px] font-Inter text-left mb-[12px] xs:leading-[40px] sm:leading-[44px] font-[800]'>Guides to get started</m.h1>
                        <m.p variants={item} className='xs:text-[16px] leading-[28px] text-[#404040] font-[400] font-Arimo'>It's important for us to help you make informed decisions.</m.p>
                        <m.div variants={item} className='mt-[30px]'>
                            <button className='mr-3 px-4 py-2 font-Arimo bg-[#000000] rounded-md text-stone-50 hover:bg-[#f5faff}hover:text-stone-900 border border-opacity-0 hover:border-opacity-25 border-[#1e293b]'
                            >
                                Contact us
                            </button>
                        </m.div>
                    </m.div>
                    <Questionandanswer QandA={QandA} />
                </div>
            </section>
        </m.div>
    )
}

export default Home