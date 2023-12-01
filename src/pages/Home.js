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
import { container, item } from "../animation";
import { Link } from "react-router-dom"

const Home = () => {
    const experiences = [
        {
            icon: TbBath,
            title: "The solution you're looking htmlFor",
        },
        {
            icon: CiDollar,
            title: "The best price htmlFor your needs",
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
            title: "Home spaces perfect htmlFor you",
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
            className="overflow-hidden"
        >
            <Hero />
            <div className='list-none'>
                <Properties Pagination={false} />
                <Link to='/properties'>
                    <button className='mt-[80px] mx-auto px-10 py-4 xs:hidden lg:block font-Arimo bg-[#f5faff] border-solid border border-[#1e293b] border-opacity-25 rounded-md  text-black hover:bg-[#f5faff} hover:text-stone-900 hover:border-opacity-50 hover:border hover:border-black'
                    >
                        Browse all property
                    </button>
                </Link>
            </div>
            <Download />
            <section>
                <div className='py-14 xs:block mt-[60px] lg:flex'>
                    <div className='mx-auto md:mt-[30px] lg:mt-[90px] xl:mt-[110px] basis-1/2 text-left'>
                        <p className='xs:text-[16px] lg:text-[17px] text-[#1F1717] mb-3 font-medium font-Barlow'>YOUR TRUST HELPS</p>
                        <h1 className='xs:text-[45px] lg:text-[30px] xl:text-[50px] text-[#000000] font-Questrial text-left xs:leading-[48px] lg:leading-[40px] xl:leading-[50px] font-bold'>A headline to make an impact on visitors</h1>
                        <p className='xs:text-[18px] xl:text-[22px]  text-[#1F1717] mt-4 font-Arimo'>We work to elevate you experience and help you make <br className='xs:hidden lg:block' /> inhtmlFormed decisions.</p>
                        <div className='flex mt-[30px] xs:flex-col md:flex-row md:items-center'>
                            <button className='mr-3 px-4 py-2  font-Arimo bg-[#000000]  rounded-md  text-stone-50 hover:bg-[#f5faff} hover:text-stone-900 border border-opacity-0 hover:border-opacity-25 border-[#1e293b]'
                            >
                                Start now
                            </button>
                            <div className='flex xs:mt-7 md:mt-0 md:items-center'>
                                <img loading="lazy" className='mr-3' src={rating} alt="rating" />
                                <p className='text-[14px] text-[#1F1717] font-Arimo'>from 100+ reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className='basis-1/2 overflow-hidden relative mt-[50px] xs:w-[100%] mx-auto'>
                        <m.img
                            initial={{ scale: 1.2 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.75, ease: "easeIn" }}
                            viewport={{ once: true }}
                            className='xs:w-[100%] object-cover lg:h-[350px] xl:h-[400px]' src={trustImg} alt="trustImg" />
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
                    ariants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                    className='mt-[60px]'>
                    <m.p variants={item} className='xs:text-[16px] lg:text-[17px] text-[#1f1717] text-center mb-3 font-medium font-Barlow'>WHY TO CHOOSE HOMEQ</m.p>
                    <m.h1 variants={item} className='xs:text-[30px] xl:text-[35px] mt-4 font-Questrial text-[#000000] text-center xs:leading-[35px] lg:leading-[50px] xl:leading-[45px] font-bold'>The best experience to sell/rent <br className='xs:hidden lg:block' /> your house</m.h1>
                </m.div>
                <div className='grid gap-4 m-10 mx-auto xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3'>
                    {experiences.map((experience, i) =>
                        <m.div
                            initial={{ y: "100%", opacity: 0 }}
                            whileInView={{ y: "0", opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                            key={i} className='h-[220px] max-w-[410px] px-3 py-5 rounded-lg bg-[#f5faff] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] bg-[#f5faff]'>
                            <div className='p-1 w-[40px] flex justify-center bg-[#F5F5F5] items-center h-[40px]  rounded-full'>
                                <experience.icon size={25} />
                            </div>
                            <p className='xs:text-[16px] xl:text-[20px] mt-4 font-Questrial text-[#000000] text-left font-bold'>{experience.title}</p>
                            <p className='text-[16px] text-[#1F1717] mt-3 font-Arimo'>Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.</p>
                        </m.div>
                    )}
                </div>
                <div className='mt-[90px]'>
                    <h1 className='xs:text-[30px] xl:text-[40px] text-[#000000] font-Questrial text-left font-bold'>Meet our agents</h1>
                    <p className='text-[16px] text-[#1F1717] mt-3 font-Arimo'>Our local experts will guide you on your journey</p>
                    <div className='h-[400px] mt-5 relative'>
                        <HorizontalScrollbar />
                    </div>
                </div>
                <div className='my-[150px]'>
                    <Testimonial />
                </div>
                <div className='xs:mt-[100px] md:mt-[170px] basis-1/4 mb-10 flex xs:flex-col lg:flex-row'>
                    <m.div
                        ariants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.7 }}
                        className='text-left basis-1/2'>
                        <m.h1 variants={item} className='xs:text-[45px] lg:text-[30px] xl:text-[37px] font-Questrial text-left xs:leading-[48px] lg:leading-[40px] xl:leading-[50px] font-bold'>Guides to get started</m.h1>
                        <m.p variants={item} className='xs:text-[18px] xl:text-[17px]  text-[#1F1717] mt-3 font-Arimo'>It's important for us to help you make informed decisions.</m.p>
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