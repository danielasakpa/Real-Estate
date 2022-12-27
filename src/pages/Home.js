import React from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Properties from '../components/Properties';
import Download from '../components/Download';
import Testimonial from '../components/Testimonial';
import Questionandanswer from '../components/Questionandanswer';
import Footer from '../components/Footer';
import trustImg from "../assets/trust.webp";
import rating from '../assets/rating.svg'
import HorizontalScrollbar from '../components/HorizontalScrollbar';
import { CiDollar } from "react-icons/ci";
import { TbBath } from "react-icons/tb";
import { IoEarthOutline } from "react-icons/io5";
import { AiOutlineDownload } from "react-icons/ai";
import { IoBedOutline, IoChevronDownCircleOutline } from "react-icons/io5";

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
            title: "Tailored experience htmlFor every client",
        },
    ]

    const QandA = [
        {
            question: 'Why do I need a real estate agent',
            accordionHeader: "accordion-flush-heading-1",
            accordionBody: "accordion-flush-body-1",
            ans: [
                "Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.",
                "Ac faucibus orci id quis consectetur laoreet sed.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus justo sit amet felis pulvinar tempus.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus justo sit amet felis pulvinar tempus.",
                "🎉 curabitur rutrum enim felis, a placerat neque egestas sagittis. Mauris ut nisi orci."
            ]
        },
        {
            question: 'How to start an online store?',
            accordionHeader: "accordion-flush-heading-2",
            accordionBody: "accordion-flush-body-2",
            ans: [
                "Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.",
                "Ac faucibus orci id quis consectetur laoreet sed.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus justo sit amet felis pulvinar tempus.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus justo sit amet felis pulvinar tempus.",
                "🎉 curabitur rutrum enim felis, a placerat neque egestas sagittis. Mauris ut nisi orci."
            ]
        },
        {
            question: 'How set up your store?',
            accordionHeader: "accordion-flush-heading-3",
            accordionBody: "accordion-flush-body-3",
            ans: [
                "Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.",
                "Ac faucibus orci id quis consectetur laoreet sed.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus justo sit amet felis pulvinar tempus.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus justo sit amet felis pulvinar tempus.",
                "🎉 curabitur rutrum enim felis, a placerat neque egestas sagittis. Mauris ut nisi orci."
            ]
        },
    ]

    return (
        <>
            <Nav />
            <Hero />
            <Properties />
            <Download />
            <section>
                <div className='py-14 xs:block mt-[60px] lg:flex'>
                    <div className='mx-auto md:mt-[30px] lg:mt-[90px] xl:mt-[110px] basis-1/2 text-left'>
                        <p className='xs:text-[15px] xl:text-[15px] text-[#1e293b] mb-3 font-medium font-Rubik'>YOUR TRUST HELPS</p>
                        <h1 className='xs:text-[45px] lg:text-[30px] xl:text-[50px] text-[#171717] font-Rubik text-left xs:leading-[48px] lg:leading-[40px] xl:leading-[50px] font-bold'>A headline to make an impact on visitors</h1>
                        <p className='xs:text-[18px] xl:text-[22px]  text-[#A3A3A3] mt-4 font-Rubik'>We work to elevate you experience and help you make <br className='xs:hidden lg:block' /> inhtmlFormed decisions.</p>
                        <div className='flex mt-[30px] xs:flex-col md:flex-row md:items-center'>
                            <button className='
                            mr-3
                            px-4
                            py-2 
                            font-Rubik
                            bg-[#171717] 
                            rounded-md 
                            text-stone-50
                            hover:bg-stone-100 
                            hover:text-stone-900
                            hover:border-solid 
                            hover:border
                            hover:border-opacity-25
                            hover:border-[#1e293b]'
                            >
                                Start now
                            </button>
                            <div className='flex xs:mt-7 md:mt-0 md:items-center'>
                                <img className='mr-3' src={rating} alt="rating" />
                                <p className='text-[14px] text-[#A3A3A3] font-Rubik'>from 100+ reviews</p>
                            </div>
                        </div>
                    </div>
                    <img className='basis-1/4 mt-[50px] xs:w-[100%] object-cover mx-auto lg:h-[350px] xl:h-[400px]' src={trustImg} alt="trustImg" />
                </div>
                <div className='mt-[60px]'>
                    <p className='xs:text-[15px] xl:text-[15px] text-[#171717] text-center mb-3 font-medium font-Rubik'>WHY TO CHOOSE HOMEQ</p>
                    <h1 className='xs:text-[30px] xl:text-[35px] mt-8 text-[#171717] font-Rubik text-center xs:leading-[35px] lg:leading-[50px] xl:leading-[45px] font-bold'>The best experience to sell/rent <br className='xs:hidden lg:block' /> your house</h1>
                </div>
                <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  m-10 mx-auto gap-4'>
                    {experiences.map(experience =>
                        <div className='h-[220px] max-w-[410px] px-3 py-5 rounded-lg bg-[#f8fafc]'>
                            <div className='p-1 w-[40px] flex justify-center bg-[#e2e8f0] items-center h-[40px]  rounded-full'>
                                <experience.icon size={25} />
                            </div>
                            <p className='xs:text-[16px] xl:text-[20px] mt-4 font-Rubik text-[#171717] text-left font-medium'>{experience.title}</p>
                            <p className='text-[16px] text-[#A3A3A3] mt-3 font-Rubik'>Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.</p>
                        </div>
                    )}
                </div>
                <div className='mt-[90px]'>
                    <p className='xs:text-[30px] xl:text-[40px] text-[#171717] font-Rubik text-left font-bold'>Meet our agents</p>
                    <p className='text-[16px] text-[#A3A3A3] mt-3 font-Rubik'>Our local experts will guide you on your journey</p>
                    <div className='h-[400px] mt-5 relative'>
                        <HorizontalScrollbar />
                    </div>
                </div>
                <Testimonial />
                <div className='xs:mt-[100px] md:mt-[170px] basis-1/4 mb-10 flex xs:flex-col md:flex-row'>
                    <div className='basis-1/2 text-left'>
                        <h1 className='xs:text-[45px] lg:text-[30px] xl:text-[33px] font-Rubik text-left xs:leading-[48px] lg:leading-[40px] xl:leading-[50px] font-bold'>Guides to get started</h1>
                        <p className='xs:text-[18px] xl:text-[15px]  text-[#A3A3A3] mt-3 font-Rubik'>It's important for us to help you make informed decisions.</p>
                        <div className='mt-[30px]'>
                            <button className='
                            mr-3
                            px-4
                            py-2 
                            font-Rubik
                            bg-[#171717] 
                            rounded-md 
                            text-stone-50
                            hover:bg-stone-100 
                            hover:text-stone-900
                            hover:border-solid 
                            hover:border
                            hover:border-opacity-25
                            hover:border-[#1e293b]'
                            >
                                Contact us
                            </button>
                        </div>
                    </div>
                    <Questionandanswer QandA={QandA} />
                </div>
                <Footer/>
            </section>
        </>
    )
}

export default Home