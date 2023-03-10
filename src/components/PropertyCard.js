import React from 'react'
import { IoLocationOutline, IoBedOutline, IoChevronDownCircleOutline } from "react-icons/io5"
import { TbBath } from "react-icons/tb";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
    return (
        <Link className='list-none' to={`/properties/${property.property_id}`}>
            <div className="max-w-sm overflow-hidden rounded shadow-lg cursor-pointer">
                <img className="w-full h-[220px] object-cover" src={property.thumbnail} alt="Sunset in the mountains" />
                <div className='flex items-center mt-3'>
                    <IoLocationOutline size={40} className='mr-3' />
                    <p className="xs:text-[15px] xl:text-[17px] mt-2 text-[#171717] font-Roboto text-left font-medium">{property.address.line} {property.address.city} {property.address.state}</p>
                </div>
                <div className="px-2 py-4">
                    <p className="xs:text-[20px] xl:text-[25px] text-[#171717] mt-1 font-Roboto text-left leading-[30px] font-medium"> ${property.price}</p>
                    <div className='flex mt-5'>
                        <div>
                            <TbBath size={20} />
                            <p className="xs:text-[15px] xl:text-[16px] mr-4 text-[#A3A3A3] mt-1 font-Roboto text-left  font-medium"><span className='text-[#171717]'>{property.baths}</span> baths</p>
                        </div>
                        <div>
                            <IoBedOutline size={20} />
                            <p className="xs:text-[15px] xl:text-[16px] mr-4 text-[#A3A3A3] mt-1 font-Roboto text-left  font-medium"><span className='text-[#171717]'>{property.beds}</span> beds</p>
                        </div>
                        <div>
                            {property.building_size || property.lot_size ? <IoChevronDownCircleOutline size={20} /> : null}
                            {property.building_size !== undefined && !property.lot_size ? <p className="xs:text-[15px] xl:text-[16px] text-[#A3A3A3] mt-1 font-Roboto text-left  font-medium"><span className='text-[#171717]'>{property.building_size.size}</span> sqft</p> : null}
                            {property.lot_size !== undefined ? <p className="xs:text-[15px] xl:text-[16px] text-[#A3A3A3] mt-1 font-Roboto text-left font-medium"><span className='text-[#171717]'>{property.lot_size.size}</span> sqft</p> : null}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PropertyCard