import QandA from "../data/OtherQandA"
import Questionandanswer from '../components/Questionandanswer';
import Prperties from "../components/Prperties";
import propertiesImg from "../assets/Properties.jpg"
import Apple from "../assets/Apple.svg"
import Play from "../assets/Play.svg"
import { motion as m } from "framer-motion"
import { container, item } from "../animation";

const Properties = () => {
    return (
        <div>
            <div className='flex justify-between xs:flex-col overflow-hidden lg:flex-row xs:mt-[80px] lg:mt-[120px]'>
                <m.div
                    ariants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                    className='w-[100%] lg:mr-10 lg:basis-2/3'>
                    <m.h1 variants={item} className='xs:text-[32px] sm:text-[36px] text-[#000000] mb-[16px] font-Inter text-left -tracking-[0.02em] xs:leading-[40px] sm:leading-[44px] font-[800]'>Properties for a dreamy lifestyle</m.h1>
                    <m.p variants={item} className='xs:text-[14px] text-[#404040] leading-[20px] font-[500] font-Arimo'>Find the home that best suit your needs and dreams</m.p>
                    <m.div variants={item} className='flex items-center mt-5'>
                        <input type="text" className="form-input rounded bg-[#f5faff] border border-[#1f1717] border-opacity-25 focus:border-none xs:w-[80%] sm:w-[75%] sm:px-6 lg:px-10 py-2.5 mr-2"
                        />
                        <button className='xs:px-3 lg:px-4 py-3 xs:text-[14px] sm:text-[15px] font-Arimo bg-[#000000]  rounded-md  text-stone-50 hover:bg-[#f5faff] hover:text-stone-900 border border-opacity-0 hover:border-opacity-25 border-[#1e293b]'
                        >
                            Search
                        </button>
                    </m.div>
                </m.div>
                <div className='relative xs:mt-[70px] overflow-hidden lg:mt-0 basis-1/2'>
                    <m.img
                        initial={{ scale: 1.2 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.75, ease: "easeIn" }}
                        viewport={{ once: true }}
                        className='xs:w-[100%] h-[300px] lg:w-[700px] lg:h-[400px]' src={propertiesImg} alt="propertiesImg" />
                    <m.div
                        initial={{ width: "100%" }}
                        whileInView={{ width: "0" }}
                        transition={{ duration: 0.75, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className='absolute top-0 right-0 w-full h-full bg-[#f5faff]'>
                    </m.div>
                </div>
            </div>
            <div className='lg:mt-[170px]'>
                <Prperties Pagination={true} />
            </div>
            <div className='xs:mt-[160px] lg:mt-[220px] xs:block'>
                <m.div
                    ariants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                    className='mx-auto sm:mt-[30px] lg:mt-[50px] sm:mt-[200px] text-left'>
                    <m.p variants={item} className='text-[14px] text-[#1F1717] mb-[12px] tracking-[1px] leading-[20px] font-[400] font-Arimo'>THE PERFECT SOLUTION FOR YOUR NEEDS</m.p>
                    <m.h1 variants={item} className='text-[32px] sm:text-[36px] text-[#000000] mb-[16px] font-Inter text-left -tracking-[0.02em] xs:leading-[40px] sm:leading-[44px] font-bold'>A team of professional agents</m.h1>
                    <m.p variants={item} className='text-[18px] leading-[28px] text-[#404040] font-[400] font-Arimo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus justo sit amet felis pulvinar tempus.</m.p>
                    <m.div variants={item} className="flex mt-10 ">
                        <button className='mr-3'><img className='rounded-md w-[135px] h-[45px]' src={Apple} alt="Apple" /></button>
                        <button><img className='rounded-md -[135px] h-[45px]' src={Play} alt="Play" /></button>
                    </m.div>
                </m.div>
            </div>
            <div className='xs:mt-[100px] sm:mt-[170px] basis-1/4 mb-10 flex xs:flex-col lg:flex-row'>
                <div className='text-left basis-1/2'>
                    <h1 className='xs:text-[32px] sm:text-[36px] font-Inter text-left mb-[12px] xs:leading-[40px] sm:leading-[44px] font-[800]'>Frequently Asked Questions</h1>
                    <p className='xs:text-[16px] leading-[28px] text-[#404040] font-[400] font-Arimo'>Can’t find answers you’re looking for?</p>
                    <p className='xs:text-[16px] leading-[28px] text-[#404040] font-[400] font-Arimo'>Drop us a line. We'll be happy to help you.</p>
                    <div className='mt-[30px]'>
                    </div>
                </div>
                <Questionandanswer QandA={QandA} />
            </div>
        </div>
    )
}

export default Properties