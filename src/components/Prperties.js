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
        const prefetchPages = 5; // Set the number of pages to prefetch

        // Use a loop to prefetch multiple pages
        for (let i = 1; i <= prefetchPages; i++) {
            const nextPage = currentPage + i;

            if (nextPage <= totalPages) {
                queryClient.prefetchQuery(['properties', nextPage], () => fetchProperties(nextPage));
            }
        }
    }, [currentPage, totalPages, queryClient]);

    if (status === 'error') {
        console.log(error);
    }

    return (
        <section>
            <div className='grid xs:grid-cols-1 mt-[50px] py-5  mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {status === "loading" || data === (null || undefined) ?
                    Array.from({ length: 12 }).map((num, i) => <PropertyCardSkeleton key={i} />) :
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