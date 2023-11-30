import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
// import { FaLandmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
    console.log(property)
    return (
        <Link className='list-none' to={`/properties/${property.Id}`}>
            <div className="h-full max-w-sm overflow-hidden rounded cursor-pointer shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                <div className='h-[150px]'>
                    <img className="w-full h-[150px] object-cover" src={property.Property?.Photo[0].HighResPath} alt="Sunset in the mountains" />
                </div>
                <div className="px-2 py-4">
                    <p className="text-[17px] text-[#1F1717] font-Bebas text-left font-medium">{property.Property.Type}</p>
                    <p className="xs:text-[20px] xl:text-[24px] text-[#1F1717] font-medium mt-1 font-Arimo text-left leading-[30px] font-medium"> {`$${property.Property.PriceUnformattedValue} per square foot`}</p>
                    <p className="text-[16px] text-[#1F1717] font-Arimo mt-2 text-left font-medium">{property.Property.Address.AddressText}</p>
                    <p className="xs:text-[15px] xl:text-[16px] text-[#1F1717] mt-2 font-Arimo text-left font-medium">
                        <span className='xs:text-[17px] xl:text-[20px] text-[#1F1717] font-Barlow'>Land Size: </span>{property.Land.SizeTotal}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default PropertyCard