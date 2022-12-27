import React from 'react'
import quoteImg from "../assets/Quote.svg"
import testimonialImg from "../assets/Testimonial.svg"

const Testimonial = () => {
    return (
        <div id="default-carousel" className="relative my-10" data-carousel="static">
            <div className="relative xs:h-80 overflow-hidden rounded-lg lg:h-[420px]">
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <div className="absolute w-full flex flex-col text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <img className='xs:h-[30px] md:h-[40px]' src={quoteImg} alt="quoteImg" />
                        <p className='xs:text-[15px] md:text-[20px] text-[#171717] lg:text-[25px] mt-2 m-auto w-[100%] lg:w-[70%] font-medium'>Ac faucibus orci id quis consectetur laoreet sed. Enim congue molestie nam odio pulvinar ac ultricies. Elementum ut pellentesque volutpat mi.</p>
                        <img className='xs:h-[15px] md:h-[20px] mt-3' src={testimonialImg} alt="testimonialImg" />
                    </div>
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <div className="absolute w-full flex flex-col text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <img className='xs:h-[30px] md:h-[40px]' src={quoteImg} alt="quoteImg" />
                        <p className='xs:text-[15px] md:text-[20px] text-[#171717] lg:text-[25px] mt-2 m-auto w-[100%] lg:w-[70%] font-medium'>Ac faucibus orci id quis consectetur laoreet sed. Enim congue molestie nam odio pulvinar ac ultricies. Elementum ut pellentesque volutpat mi. Faucibus sit posuere nisi aenean ultrices. Suscipit malesuada aenean nullam et sit dapibus eget a eu. Nisl tortor arcu et.</p>
                        <img className='xs:h-[15px] md:h-[20px] mt-3' src={testimonialImg} alt="testimonialImg" />
                    </div>
                </div>
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <div className="absolute w-full flex flex-col text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <img className='xs:h-[30px] md:h-[40px]' src={quoteImg} alt="quoteImg" />
                        <p className='xs:text-[15px] md:text-[20px] text-[#171717] lg:text-[25px] mt-2 m-auto w-[100%] lg:w-[70%] font-medium'>Ac faucibus orci id quis consectetur laoreet sed. Enim congue molestie nam odio pulvinar ac ultricies. Elementum ut pellentesque volutpat mi.</p>
                        <img className='xs:h-[15px] md:h-[20px] mt-3' src={testimonialImg} alt="testimonialImg" />
                    </div>
                </div>
            </div>
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button type="button" className="w-2 h-2 bg-gray-800 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-2 h-2 bg-gray-800 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-2 h-2 bg-gray-800 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            </div>
        </div>
    )
}

export default Testimonial