import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import agentsData from "../data/agentsData"
import QandA from "../data/OtherQandA"
import AgentCard from "../components/AgentCard"
import Questionandanswer from '../components/Questionandanswer';

const Agents = () => {

    return (
        <div>
            <Nav />
            <div className='mt-10 xs:w-[100%] lg:w-[50%] mx-auto'>
                <p className='text-[17px] text-center text-[#171717] mb-3 font-medium'>PROFESSIONAL ASSISTANCE</p>
                <h1 className='xs:text-[40px] xl:text-[50px] font-Roboto text-[#171717] text-center xs:leading-[50px] lg:leading-[50px] font-bold'>The right agent can lead the way</h1>
                <p className='xs:text-[18px] lg:text-[20px] text-[#A3A3A3] text-center mt-4 font-Roboto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed sollicitudin nibh, mattis posuere massa.</p>
            </div>
            <div className='grid xs:grid-cols-1 mt-[120px] md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {agentsData.map((agent, index) =>
                    <AgentCard key={index} agent={agent} />
                )}
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

export default Agents