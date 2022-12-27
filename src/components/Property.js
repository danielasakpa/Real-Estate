import React from 'react'
import { IconName } from "react-icons/go";


const Property = ({ property }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full h-[170px] object-cover" src={property.coverPhoto.url} alt="Sunset in the mountains" />
            <div className="px-2 py-4">
            <div className='flex items-center h-[100%]'>
                    <img className='w-[40px] h-[40px] mr-5 rounded-full' src={property.agency.logo.url} alt={"agency logo"}/>
                    <p className="xs:text-[20px] xl:text-[30px] font-Rubik text-left leading-[30px] font-medium">AED {property.price}/{property.rentFrequency}</p>
                </div>
                <p className="xs:text-[15px] xl:text-[20px] mt-4 font-Rubik text-left leading-[30px] font-medium">{property.title.substring(0, 28) + '...'}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
    )
}

export default Property