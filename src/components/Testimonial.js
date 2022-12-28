import React from 'react'
import quoteImg from "../assets/Quote.svg"
import testimonialImg from "../assets/Testimonial.svg"
var Carousel = require('react-responsive-carousel').Carousel;

const Testimonial = () => {

    return (
        <Carousel showStatus={false} showThumbs={false}>
            <div className="w-full flex flex-col text-center">
                <img className='xs:h-[30px] md:h-[40px]' src={quoteImg} alt="quoteImg" />
                <p className='xs:text-[15px] md:text-[20px] text-[#171717] lg:text-[25px] mt-2 m-auto w-[100%] lg:w-[70%] font-medium'>Ac faucibus orci id quis consectetur laoreet sed. Enim congue molestie nam odio pulvinar ac ultricies. Elementum ut pellentesque volutpat mi.</p>
                <img className='xs:h-[15px] md:h-[20px] mt-3' src={testimonialImg} alt="testimonialImg" />
            </div>
            <div className="w-full flex flex-col text-center">
                <img className='xs:h-[30px] md:h-[40px]' src={quoteImg} alt="quoteImg" />
                <p className='xs:text-[15px] md:text-[20px] text-[#171717] lg:text-[25px] mt-2 m-auto w-[100%] lg:w-[70%] font-medium'>Ac faucibus orci id quis consectetur laoreet sed. Enim congue molestie nam odio pulvinar ac ultricies. Elementum ut pellentesque volutpat mi. Faucibus sit posuere nisi aenean ultrices. Suscipit malesuada aenean nullam et sit dapibus eget a eu. Nisl tortor arcu et.</p>
                <img className='xs:h-[15px] md:h-[20px] mt-3' src={testimonialImg} alt="testimonialImg" />
            </div>
            <div className="w-full flex flex-col text-center">
                <img className='xs:h-[30px] md:h-[40px]' src={quoteImg} alt="quoteImg" />
                <p className='xs:text-[15px] md:text-[20px] text-[#171717] lg:text-[25px] mt-2 m-auto w-[100%] lg:w-[70%] font-medium'>Ac faucibus orci id quis consectetur laoreet sed. Enim congue molestie nam odio pulvinar ac ultricies. Elementum ut pellentesque volutpat mi.</p>
                <img className='xs:h-[15px] md:h-[20px] mt-3' src={testimonialImg} alt="testimonialImg" />
            </div>
        </Carousel>
    )
}

export default Testimonial