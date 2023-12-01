import React from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import { fetchProperty } from "../fetchers/Properties"
import { Carousel } from 'react-responsive-carousel';
import { IoLocationOutline, IoHomeOutline, IoChevronDownCircleOutline, IoHammerOutline } from "react-icons/io5"
import { FaWater } from "react-icons/fa";
import { RxLapTimer } from "react-icons/rx";
import { GrMapLocation } from "react-icons/gr";
import { GiNuclearWaste } from "react-icons/gi";

import { MdLandscape } from "react-icons/md";
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
          <div className='mt-[40px] md:mt-[70px] flex justify-center'>
            <Carousel className='w-[900px] h-[100%]' showArrows={true} showThumbs={false} showIndicators={false}>
              {
                data.Property.Photo.map((img, i) =>
                  <img key={i} className='w-[900px] xs:h-[300px] md:h-[450px] rounded-md' src={img.HighResPath} alt="homeImg" />
                )
              }
            </Carousel>
          </div>
          <div className='max-w-[900px] mx-auto '>
            {/* Transaction Type */}
            <p className="xs:text-[15px] xl:text-[25px] mt-4 text-[#171717] font-Bebas font-medium text-left">{data.Property.TransactionType.toUpperCase()}</p>

            {/* Property Price */}
            <div className="mt-2">
              <p className="xs:text-[20px] xl:text-[25px] text-[red] font-Arimo text-left leading-[30px] font-medium">
                {`$${data.Property.PriceUnformattedValue} per square foot`}
              </p>

              {/* Property Details */}
              <div className='flex flex-col md:flex-row flex-wrap gap-y-2 md:gap-y-0 mt-5'>
                {/* Land Size */}
                {data.Land.SizeTotal &&
                  <div className="flex items-center mr-4">
                    <MdLandscape size={20} />
                    <p className="xs:text-[15px] xl:text-[16px] text-[#171717] ml-1 font-Arimo text-left font-medium">
                      <span className='xs:text-[17px] xl:text-[20px] text-[#1F1717] font-Barlow'>Land Size: </span>{data.Land.SizeTotal}
                    </p>
                  </div>
                }

                {/* Building Year */}
                {data.Building.DisplayAsYears &&
                  <div className="flex items-center md:mr-4">
                    <IoHammerOutline size={20} />
                    <p className="xs:text-[15px] xl:text-[16px] ml-1 text-[#171717] font-Arimo text-left font-medium">
                      <span className='xs:text-[17px] xl:text-[20px] text-[#1F1717] font-Barlow'>Building Year: </span>{data.Building.DisplayAsYears ? data.Building.DisplayAsYears : "none"}
                    </p>
                  </div>
                }

                {/* Type of Property */}
                <div className="flex items-center">
                  <IoHomeOutline size={20} />
                  <p className="xs:text-[15px] xl:text-[16px] text-[#171717] ml-1 font-Arimo text-left font-medium">
                    <span className='xs:text-[17px] xl:text-[20px] text-[#1F1717] font-Barlow'>Type of Property: </span> {data.Property.Type}
                  </p>
                </div>
              </div>

              {/* Address */}
              {data.Property.Address &&
                <div className="flex items-start justify-start md:items-center mt-4">
                  <div className="mr-1">
                    <IoLocationOutline size={20} />
                  </div>
                  <p className="xs:text-[15px] xl:text-[26px] text-[#171717]  font-Arimo text-left font-medium">
                    {`Residential for sale - ${data.Property.Address.AddressText}`}
                  </p>
                </div>
              }

              {/* Other Property Details */}
              <div className="flex flex-col md:flex-row flex-wrap gap-y-2 md:gap-y-0 mt-4">
                {/* Size of Property */}
                {data.Property.SizeTotal &&
                  <div className="flex items-center mr-4">
                    <IoChevronDownCircleOutline size={20} />
                    <p className="xs:text-[15px] xl:text-[16px] text-[#171717] ml-1 font-Arimo text-left font-medium">
                      <span className='xs:text-[17px] xl:text-[20px] text-[#1F1717] font-Barlow'>Size of Property: </span> {data.Property.SizeTotal}
                    </p>
                  </div>
                }

                {/* Waterfront Type */}
                {data.Property.WaterFrontType &&
                  <div className="flex items-center md:mr-4">
                    <FaWater size={20} />
                    <p className="xs:text-[15px] xl:text-[16px] text-[#171717] ml-1 font-Arimo text-left font-medium">
                      <span className='xs:text-[17px] xl:text-[20px] text-[#1F1717] font-Barlow'>Waterfront Type: </span>{data.Property.WaterFrontType}
                    </p>
                  </div>
                }

                {/* Zoning Type */}
                {data.Property.ZoningType &&
                  <div className="flex items-center md:mr-4">
                    <GrMapLocation size={20} />
                    <p className="xs:text-[15px] xl:text-[16px] text-[#171717] ml-1 font-Arimo text-left font-medium">
                      <span className='xs:text-[17px] xl:text-[20px] text-[#1F1717] font-Barlow'>Zoning Category:</span> {data.Property.ZoningType}
                    </p>
                  </div>
                }

                {/* Sewer */}
                {data.Land.Sewer &&
                  <div className="flex items-center md:mr-4">
                    <GiNuclearWaste size={20} />
                    <p className="xs:text-[15px] xl:text-[16px] text-[#171717] ml-1 font-Arimo text-left font-medium">
                      <span className='xs:text-[17px] xl:text-[20px] text-[#1F1717] font-Barlow'>Sewer: </span> {data.Land.Sewer}
                    </p>
                  </div>
                }

                {/* Time On Realtor */}
                {data.TimeOnRealtor &&
                  <div className="flex items-center md:mr-4">
                    <RxLapTimer size={20} />
                    <p className="xs:text-[15px] xl:text-[16px] text-[#171717] ml-1 font-Arimo text-left font-medium">
                      <span className='xs:text-[17px] xl:text-[20px] text-[#1F1717] font-Barlow'>Time On Realtor: </span> {data.TimeOnRealtor}
                    </p>
                  </div>
                }
              </div>
            </div>

            {/* Public Remarks */}
            <div className="mt-6">
              <p className="xs:text-[15px] xl:text-[20px] text-[#171717] text-400 font-Bebas text-left font-medium">Public Remarks:</p>
              <p className="xs:text-[15px] xl:text-[16px] text-[#1F1717] mt-1 font-Arimo text-left">
                {data.PublicRemarks}
              </p>
            </div>

            {/* Agent Section */}
            {data.Individual && data.Individual.length > 0 && (
              <div className="mt-8">
                <p className="xs:text-[15px] xl:text-[20px] text-[#171717] text-400 font-Bebas text-left font-medium">Agent:</p>
                <div className='flex flex-col md:flex-row flex-wrap gap-y-7'>
                  {data.Individual.map((agent, index) => (
                    <div className='basis-1/2'>
                      <div key={index} className="flex items-start mt-2">
                        <img
                          src={agent.Photo}
                          alt="Agent"
                          className="w-10 h-10 rounded-full mr-4"
                        />
                        <div>
                          <p className="xs:text-[15px] xl:text-[16px] text-[#171717] font-Arimo text-left font-medium">
                            {agent.Name}
                          </p>
                          <p className="xs:text-[15px] xl:text-[16px] text-[#1F1717] mt-1 font-Arimo text-left">
                            {agent.Position} at {agent.CorporationName}
                          </p>
                        </div>
                      </div>
                      <button
                        className="mt-3 cursor-pointer focus:outline-none px-2 py-2 font-Roboto bg-[#171717] rounded-md text-stone-50 hover:bg-[#f5faff}hover:text-stone-900 border border-opacity-0 hover:border-opacity-25 border-[#1e293b]"
                      >
                        View Agent
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      }
    </>
  );
}

export default Property;
