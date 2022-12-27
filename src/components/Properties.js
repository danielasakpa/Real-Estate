import React, { useEffect, useState, } from 'react';
import { realEstateOptions, fetchData } from '../utils/fetchData';
import Property from './Property';
import CardSkeleton from './CardSkeleton';


const Properties = () => {
    const [properties, setProperties] = useState([]);

    const CardSkeletons = [1, 2, 3, 4, 5, 6, 7, 8];

    useEffect(() => {
        // fetchData("https://bayut.p.rapidapi.com/properties/list", realEstateOptions)
        //     .then(response => {
        //         setProperties(response);
        //     });
    }, [])

    console.log(properties);
    return (
        <section>
            <div className='grid xs:grid-cols-1 mt-[50px] mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {properties.length <= 0 ?
                    CardSkeletons.map(num => <CardSkeleton key={num} />) :
                    properties.map(property =>
                        <Property key={property.id} property={property} />
                    )
                }
            </div>
            <button className='
            mt-[80px]
            mx-auto
            px-10
            py-4
            xs:hidden 
            lg:block
            font-Rubik
            bg-[#f1f5f9]
            border-solid
            border
            border-[#1e293b]
            border-opacity-25
            rounded-md 
            text-black
            hover:bg-stone-100 
            hover:text-stone-900
            hover:border-opacity-50
            hover:border
            hover:border-black'
            >
                Browse all property
            </button>
        </section>
    )
}

export default Properties