import React from 'react'
import quoteImg from "../assets/Quote.svg"
import testimonialImg from "../assets/Testimonial.svg"
import { Carousel } from 'react-responsive-carousel';

const Testimonial = () => {

  return (
    <Carousel
      showStatus={false}
      className='h-[200px]'
      showThumbs={false}
      infiniteLoop={true}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        const defStyle = { marginLeft: 20, color: "white", cursor: "pointer" };
        const style = isSelected
          ? { ...defStyle, color: "#A3A3A3" }
          : { ...defStyle, color: "#171717" };
        return (
          <span
            style={style}
            className="h-[10px] w-[7px] border rounded-sm border-[#171717] p-1 px-3 mx-2"
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`${label} ${index + 1}`}
          >
            {index}
          </span>
        );
      }}
    >
      <div className="flex flex-col w-full text-center">
        <img className='xs:h-[30px] md:h-[40px]' src={quoteImg} alt="quoteImg" />
        <p className='xs:text-[15px] md:text-[20px] text-[#171717] lg:text-[25px] mt-2 m-auto w-[100%] lg:w-[70%] font-medium'>Ac faucibus orci id quis consectetur laoreet sed. Enim congue molestie nam odio pulvinar ac ultricies. Elementum ut pellentesque volutpat mi.</p>
        <img className='xs:h-[15px] md:h-[20px] mt-3' src={testimonialImg} alt="testimonialImg" />
      </div>
      <div className="flex flex-col w-full text-center">
        <img className='xs:h-[30px] md:h-[40px]' src={quoteImg} alt="quoteImg" />
        <p className='xs:text-[15px] md:text-[20px] text-[#171717] lg:text-[25px] mt-2 m-auto w-[100%] lg:w-[70%] font-medium'>Ac faucibus orci id quis consectetur laoreet sed. Enim congue molestie nam odio pulvinar ac ultricies. Elementum ut pellentesque volutpat mi. Faucibus sit posuere nisi aenean ultrices. Suscipit malesuada aenean nullam et sit dapibus eget a eu. Nisl tortor arcu et.</p>
        <img className='xs:h-[15px] md:h-[20px] mt-3' src={testimonialImg} alt="testimonialImg" />
      </div>
      <div className="flex flex-col w-full text-center">
        <img className='xs:h-[30px] md:h-[40px]' src={quoteImg} alt="quoteImg" />
        <p className='xs:text-[15px] md:text-[20px] text-[#171717] lg:text-[25px] mt-2 m-auto w-[100%] lg:w-[70%] font-medium'>Ac faucibus orci id quis consectetur laoreet sed. Enim congue molestie nam odio pulvinar ac ultricies. Elementum ut pellentesque volutpat mi.</p>
        <img className='xs:h-[15px] md:h-[20px] mt-3' src={testimonialImg} alt="testimonialImg" />
      </div>
    </Carousel>
  )
}

export default Testimonial