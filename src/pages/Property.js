import React from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import { fetchProperty } from "../fetchers/Properties"
import { Carousel } from 'react-responsive-carousel';
import { IoLocationOutline, IoBedOutline, IoChevronDownCircleOutline, IoHammerOutline } from "react-icons/io5"
import { TbBath } from "react-icons/tb";
import Loader from '../components/Loader'

const Property = () => {
  let { id } = useParams();

  const { data, error, status, isRefetching } = useQuery(
    ["property"],
    async () => await fetchProperty(id),
  );

  if (status === "error") {
    console.log("Error: ", error);
  }

  return (
    <>
      {status === 'loading' || isRefetching ?
        <Loader />
        : <>
          <div className='mt-[70px] flex justify-center'>
            <Carousel className='w-[900px] h-[100%]' showArrows={true} showThumbs={false} showIndicators={false}>
              {
                data.photos.map((img, i) =>
                  <img key={i} className='w-[900px] xs:h-[300px] md:h-[450px] object-cover rounded-md' src={img.href} alt="homeImg" />
                )
              }
            </Carousel>
          </div>
          <div className='max-w-[900px] mx-auto '>
            <p className="xs:text-[15px] xl:text-[25px] mt-4 text-[#171717] font-Roboto text-left">{data.prop_status.replace("_", " ")}</p>
            <div className="mt-2">
              <p className="xs:text-[20px] xl:text-[25px] text-[#171717] font-Roboto text-left leading-[30px] font-medium"> ${data.price}</p>
              <div className='flex mt-5'>
                <div>
                  <TbBath size={20} />
                  <p className="xs:text-[15px] xl:text-[16px] mr-4 text-[#A3A3A3] mt-1 font-Roboto text-left  font-medium"><span className='text-[#171717]'>{data.baths}</span> baths</p>
                </div>
                <div>
                  <IoBedOutline size={20} />
                  <p className="xs:text-[15px] xl:text-[16px] mr-4 text-[#A3A3A3] mt-1 font-Roboto text-left  font-medium"><span className='text-[#171717]'>{data.beds}</span> beds</p>
                </div>
                <div>
                  {data.building_size || data.lot_size ? <IoChevronDownCircleOutline size={20} /> : null}
                  {data.building_size !== undefined && !data.lot_size ? <p className="xs:text-[15px] xl:text-[16px] mr-4 text-[#A3A3A3] mt-1 font-Roboto text-left  font-medium"><span className='text-[#171717]'>{data.building_size.size}</span> sqft</p> : null}
                  {data.lot_size !== undefined ? <p className="xs:text-[15px] xl:text-[16px] text-[#A3A3A3] mr-4 mt-1 font-Roboto text-left font-medium"><span className='text-[#171717]'>{data.lot_size.size}</span> sqft</p> : null}
                </div>
                <div>
                  <IoHammerOutline size={20} />
                  <p className="xs:text-[15px] xl:text-[16px] mr-4 text-[#171717] mt-1 font-Roboto text-left  font-medium">{data.year_built ? data.year_built : "none"}</p>
                </div>
              </div>
            </div>
            <div className='flex items-center mt-4'>
              <IoLocationOutline size={25} className='mr-3' />
              <p className="xs:text-[15px] xl:text-[25px] text-[#171717] font-Roboto text-left">{data.address.line} {data.address.city} {data.address.state}</p>
            </div>
            <p className="xs:text-[15px] mt-10 xl:text-[18px] text-[#171717] font-Roboto font-medium text-left">Features:</p>
            <ol type="1" className="grid gap-2 px-4 mt-2 list-decimal xs:grid-cols-1 font-Roboto sm:grid-cols-4 md:grid-cols-4">
              {
                data.feature_tags.map((feature, i) =>
                  <li key={i}>{feature.replaceAll("_", " ")}</li>
                )
              }
            </ol>
            <p className="xs:text-[15px] mt-10 xl:text-[18px] text-[#171717] font-Roboto font-medium text-left">Description:</p>
            <p className="xs:text-[15px] mt-2 xl:text-[18px] text-[#171717] font-Roboto text-left">{data.description}</p>
            <p className="xs:text-[15px] mt-10 xl:text-[18px] text-[#171717] font-Roboto font-medium text-left">Agent:</p>
            <div className="flex items-center mt-2">
              <img className="rounded-full w-[50px] h-[50px] mr-6 object-cover" src={data.agents[0].photo ? data.agents[0].photo.href : null} alt="agent pics" />
              <div>
                <p className="xs:text-[15px] xl:text-[18px] text-[#171717] font-Roboto text-left">{data.agents[0].profile_name}</p>
                <p className="xs:text-[15px] xl:text-[18px] text-[#171717] font-Roboto text-left"><span className='xs:text-[15px] xl:text-[18px] text-[#171717] font-medium '>Office:</span> {data.agents[0].office_name}</p>
              </div>
            </div>
            <div className='mt-10'>
              <button className='xs:px-3 md:px-4 xs:py-4 md:py-3 mr-5 xs:text-[14px] md:text-[15px] font-Roboto bg-[#171717]  rounded-md  text-stone-50 hover:bg-stone-100  hover:text-stone-900 border border-opacity-0 hover:border-opacity-25 border-[#1e293b]'
              >
                Contact agent
              </button>
              <button className=' xs:mt-3 md:mt-0 px-6 py-3 font-Roboto bg-[#FFFFFF] border-solid border border-[#171717] border-opacity-25 rounded-md  text-black hover:bg-stone-100  hover:text-stone-900 hover:border-opacity-50 hover:border hover:border-black'
              >
                All agent properties
              </button>
            </div>
          </div>
        </>
      }
    </>
  )
}

export default Property