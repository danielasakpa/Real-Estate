import React, { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchProperties } from "../fetchers/Properties"
import PropertyCard from './PropertyCard';
import PropertyCardSkeleton from './PropertyCardSkeleton';
import usePaginate from '../hooks/usePaginate';

const Properties = ({ Pagination }) => {
    const queryClient = useQueryClient();

    // Use state to manage the current page
    const [currentPage, setCurrentPage] = useState(1);

    const { status, data, error } = useQuery(
        ['properties', currentPage],
        () => fetchProperties(currentPage),
        { staleTime: Infinity, cacheTime: Infinity }
    );

    const { handlePageChange, totalPages } = usePaginate(
        data ? data.Paging.TotalPages : 1, setCurrentPage
    );

    useEffect(() => {
        if (currentPage < totalPages) {
            queryClient.prefetchQuery(['properties', currentPage + 1], () => fetchProperties(currentPage + 1));
        }
    }, [currentPage, totalPages, queryClient]);

    if (status === 'error') {
        console.log(error);
    }


    return (
        <section>
            <div className='grid xs:grid-cols-1 mt-[50px] py-5 px-3 overflow-hidden mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {status === "loading" ?
                    Array.from({ length: 12 }).map(num => <PropertyCardSkeleton key={num} />) :
                    data.Results.map(property =>
                        <PropertyCard key={property.id} property={property} />
                    )}
            </div>
            {Pagination ? <div className="pagination">
                <button
                    disabled={currentPage === 1}
                    onClick={() => {
                        handlePageChange(currentPage - 1);
                        setCurrentPage(currentPage - 1);
                    }}
                >
                    Previous
                </button>
                <span className='mr-2 font-Arimo'>{`Page ${currentPage} of ${totalPages}`}</span>
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => {
                        handlePageChange(currentPage + 1);
                        setCurrentPage(currentPage + 1);
                    }}
                >
                    Next
                </button>
            </div> : null}
        </section>
    )
}

export default Properties