import React, { useEffect, useState, } from 'react';
import { realEstateOptions } from '../utils/realEstateOptions';
import PropertyCard from './PropertyCard';
import CardSkeleton from './CardSkeleton';
import axios from 'axios';


const Properties = () => {

    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    const fetchData = async () => {
        try {
            setLoading(true);

            const response = await axios.request('https://realty-in-ca1.p.rapidapi.com/properties/list-commercial', realEstateOptions)
            const propertiesData = response.data;

            console.log("properties", propertiesData.Results);
            if (properties) setProperties(propertiesData.Results);
        } catch (error) {
            console.log(error);
            setError(error);
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section>
            <div className='grid xs:grid-cols-1 mt-[50px] mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {loading <= 0 ?
                    [1, 2, 3, 4, 5, 6, 7, 8].map(num => <CardSkeleton key={num} />) :
                    properties.map(property =>
                        <PropertyCard key={property.id} property={property} />
                    )
                }
            </div>
            <button className='mt-[80px] mx-auto px-10 py-4 xs:hidden  lg:block font-Roboto bg-[#FFFFFF] border-solid border border-[#1e293b] border-opacity-25 rounded-md  text-black hover:bg-stone-100  hover:text-stone-900 hover:border-opacity-50 hover:border hover:border-black'
            >
                Browse all property
            </button>
        </section>
    )
}

export default Properties