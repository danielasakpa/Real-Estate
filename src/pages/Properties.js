import React from 'react'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import QandA from "../data/OtherQandA"
import Questionandanswer from '../components/Questionandanswer';
import propertiesImg from "../assets/Properties.jpg"
import Prperties from "../components/Prperties";
import Apple from "../assets/Apple.svg"
import Play from "../assets/Play.svg"

const Properties = () => {

    return (
        <div>
            <Nav />
            <div className='flex justify-between xs:flex-col lg:flex-row xs:mt-[80px] lg:mt-[120px]'>
                <div className='mr-10 basis-2/3'>
                    <h1 className='xs:text-[30px] lg:text-[35px] xl:text-[37px] font-Roboto text-left xs:leading-[35px] lg:leading-[40px] xl:leading-[50px] font-bold'>Properties for a dreamy lifestyle</h1>
                    <p className='xs:text-[18px] xl:text-[17px]  text-[rgb(163,163,163)] mt-6 font-Roboto'>Find the home that best suit your needs and dreams</p>
                    <div className='flex items-center mt-5'>
                        <input type="text" className="form-input  rounded  border border-[#171717] border-opacity-25 focus:border-none focus:outline-none focus:focus:ring  focus:ring-opacity-25 focus:ring-[#1e293b] xs:w-[80%] md:w-[75%] md:px-6  lg:px-10 py-2.5 mr-2"
                        />
                        <button className='xs:px-3 lg:px-4 py-3 xs:text-[14px] md:text-[15px] font-Roboto bg-[#171717]  rounded-md  text-stone-50 hover:bg-stone-100  hover:text-stone-900 border border-opacity-0 hover:border-opacity-25 border-[#1e293b]'
                        >
                            Search
                        </button>
                    </div>
                </div>
                <img className='xs:w-[100%] lg:w-[600px] h-[400px] xs:mt-[70px] lg:mt-0 basis-1/3' src={propertiesImg} alt="propertiesImg" />
            </div>
            <div className='mt-[170px]'>
                <Prperties Pagination={true} />
            </div>
            <div className='xs:mt-[160px] lg:mt-[220px] xs:block'>
                <div className='mx-auto md:mt-[30px] lg:mt-[50px] xl:mt-[200px]text-left'>
                    <p className='text-[15px] text-[#171717] mb-3 font-bold'>THE PERFECT SOLUTION FOR YOUR NEEDS</p>
                    <h1 className='xs:text-[35px] lg:text-[40px] text-[#171717] xl:text-[50px] font-Roboto text-left xs:leading-[40px] lg:leading-[50px] md:leading-[50px] xl:leading-[50px] font-bold'>A team of professional agents</h1>
                    <p className='xs:text-[18px] xl:text-[22px]  text-[#A3A3A3] mt-4 font-Roboto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus justo sit amet felis pulvinar tempus.</p>
                    <div className="flex mt-10 xs:flex-col md:flex-row">
                        <button className='mr-3 transition duration-300 ease-in delay-50 hover:-translate-y-1 hover:scale-110 '><img className='rounded-md h-[50px]' src={Apple} alt="Apple" /></button>
                        <button className='mr-3 transition duration-300 ease-in xs:mt-4 md:mt-0 delay-50 hover:-translate-y-1 hover:scale-110 '><img className='rounded-md h-[50px]' src={Play} alt="Play" /></button>
                    </div>
                </div>
            </div>
            <div className='xs:mt-[100px] md:mt-[170px] basis-1/4 mb-10 flex xs:flex-col lg:flex-row'>
                <div className='text-left basis-1/2'>
                    <h1 className='xs:text-[30px] lg:text-[35px] xl:text-[37px] font-Roboto text-left xs:leading-[35px] lg:leading-[40px] xl:leading-[50px] font-bold'>Frequently Asked Questions</h1>
                    <p className='xs:text-[18px] xl:text-[17px]  text-[#A3A3A3] mt-6 font-Roboto'>Can’t find answers you’re looking for?</p>
                    <p className='xs:text-[18px] xl:text-[17px]  text-[#A3A3A3] mt-1 font-Roboto'>Drop us a line. We'll be happy to help you.</p>
                    <div className='mt-[30px]'>
                    </div>
                </div>
                <Questionandanswer QandA={QandA} />
            </div>
            <Footer />
        </div>
    )
}

export default Properties