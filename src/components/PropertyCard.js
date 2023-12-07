import React from 'react'
// import { FaLandmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
    console.log(property)
    return (
        <Link className='list-none' to={`/properties/${property.Id}`}>
            <div className="h-full max-w-sm overflow-hidden rounded cursor-pointer bg-[#f5faff] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                <div className='h-[150px]'>
                    <img className="w-full h-[150px] object-cover flex justify-center items-center" src={property.Property?.Photo[0].HighResPath} alt="Sunset in the mountains" />
                </div>
                <div className="px-2 py-4">
                    <p className="text-[17px] text-[#1F1717] font-Bebas text-left font-medium">{property.Property.Type}</p>
                    <p className="xs:text-[20px] xl:text-[24px] text-[#1F1717] font-medium mt-1 font-Arimo text-left leading-[30px] font-medium"> {`$${property.Property.PriceUnformattedValue} per square foot`}</p>
                    <p className="text-[16px] text-[#404040] font-Arimo mt-2 text-left font-medium">{property.Property.Address.AddressText}</p>
                    <p className="xs:text-[15px] xl:text-[16px] text-[#404040] mt-2 font-Arimo text-left font-medium">
                        <span className='xs:text-[17px] xl:text-[20px] text-[#1F1717] font-Barlow'>Land Size: </span>{property.Land.SizeTotal}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default PropertyCard