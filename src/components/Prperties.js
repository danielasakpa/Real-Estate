import PropertyCard from './PropertyCard';
import PropertyCardSkeleton from './PropertyCardSkeleton';
import ReactPaginate from 'react-paginate';
import { useQuery } from "@tanstack/react-query";
import { fetchProperties } from "../fetchers/Properties"
import { usePaginate } from '../hooks/usePaginate';

const Properties = ({ Pagination }) => {
    const { status, data, error } = useQuery(
        ["properties"],
        fetchProperties,
        { staleTime: Infinity },
        { cacheTime: Infinity }
    );

    const { handlePageClick, currentItems, pageCount } = usePaginate(data === undefined || null ? [1, 2, 3, 4, 5, 6, 7, 8] : data, 12);

    if (status === "error") {
        console.log("Error: ", error);
    }


    console.log("data", currentItems)


    return (
        <section>
            <div className='grid xs:grid-cols-1 mt-[50px] pb-10 overflow-hidden mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {status === "loading" ?
                    currentItems.map(num => <PropertyCardSkeleton key={num} />) :
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