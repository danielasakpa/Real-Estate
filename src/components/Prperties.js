import { useQuery } from "@tanstack/react-query";
import { fetchProperties } from "../fetchers/Properties"
import PropertyCard from './PropertyCard';
import CardSkeleton from './CardSkeleton';
import ReactPaginate from 'react-paginate';
import { usePaginate } from '../hooks/Paginate';

const Properties = ({ Pagination }) => {

    const { isError, isSuccess, isLoading, data, error } = useQuery(
        ["products"],
        fetchProperties,
        { staleTime: "Infinity" }
    );

    const { handlePageClick, currentItems, pageCount, } = usePaginate(data === undefined ? [1, 2, 3, 4, 5, 6, 7, 8] : data, 12);

    if (isError) {
        console.log("Error: ", error);
        return <div>Error...</div>;
    }

    return (
        <section>
            <div className='grid xs:grid-cols-1 mt-[50px] mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {isLoading ?
                    [1, 2, 3, 4, 5, 6, 7, 8].map(num => <CardSkeleton key={num} />) :
                    currentItems.map(property =>
                        <PropertyCard key={property.id} property={property} />
                    )}
            </div>
            {Pagination ? <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                pageClassName={"pagination__page_count"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
            /> : null}
        </section>
    )
}

export default Properties