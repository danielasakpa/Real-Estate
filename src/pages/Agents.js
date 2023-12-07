import React, { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchAgents } from '../fetchers/Agents';
import { motion as m } from 'framer-motion';
import { container, item } from "../animation";
import QandA from "../data/OtherQandA"
import AgentCard from "../components/AgentCard"
import Questionandanswer from '../components/Questionandanswer';
import AgentCardSkeleton from '../components/AgentCardSkeleton';
import usePaginate from '../hooks/usePaginate';

const Agents = () => {
    const queryClient = useQueryClient();

    // Use state to manage the current page
    const [currentPage, setCurrentPage] = useState(1);

    const { status, data, error } = useQuery(
        ['agents', currentPage],
        () => fetchAgents(currentPage),
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
                queryClient.prefetchQuery(['agents', nextPage], () => fetchAgents(nextPage));
            }
        }
    }, [currentPage, totalPages, queryClient]);

    if (status === 'error') {
        console.log(error);
    }

    return (
        <div>
            <m.div
                variants={container}
                initial="hidden"
                animate="show"
                className='mt-10 xs:w-[100%] lg:w-[50%] mx-auto'>
                <m.p variants={item} className='text-[14px] text-[#1F1717] text-center mb-[12px] tracking-[1px] leading-[20px] font-[400] font-Arimo'>PROFESSIONAL ASSISTANCE</m.p>
                <m.h1 variants={item} className='xs:text-[44px] sm:text-[52px] font-Inter text-[#000000] text-center -tracking-[0.02em] mb-[24px] xs:leading-[54px] sm:leading-[56px] font-[800]'>The right agent can lead the way</m.h1>
                <m.p variants={item} className='xs:text-[18px] text-[#404040] text-center leading-[28px] mt-4 font-Arimo font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed sollicitudin nibh, mattis posuere massa.</m.p>
            </m.div>
            <div className="grid xs:grid-cols-1 mt-[70px] lg:mt-[120px] sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {status === 'loading' ? (
                    Array.from({ length: 12 }).map((_, index) => <AgentCardSkeleton key={index} />)
                ) : (
                    data.Results.map((agent, index) => <AgentCard key={index} agent={agent} />)
                )}
            </div>
            <div className="pagination">
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
            </div>
            <div className='xs:mt-[100px] sm:mt-[170px] basis-1/4 mb-10 flex xs:flex-col lg:flex-row'>
                <m.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className='text-left basis-1/2'>
                    <m.h1 variants={item} className='xs:text-[32px] sm:text-[36px] font-Inter text-left mb-[12px] xs:leading-[40px] sm:leading-[44px] font-[800]'>Frequently Asked Questions</m.h1>
                    <m.p variants={item} className='xs:text-[16px] leading-[28px] text-[#404040] font-[400] font-Arimo'>Can’t find answers you’re looking for?</m.p>
                    <m.p variants={item} className='xs:text-[16px] leading-[28px] text-[#404040] font-[400] font-Arimo'>Drop us a line. We'll be happy to help you.</m.p>
                    <m.div variants={item} className='mt-[30px]'>
                        <button className='mr-3 px-4 py-2 font-Arimo bg-[#000000] rounded-md text-stone-50 hover:bg-[#f5faff}hover:text-stone-900 border border-opacity-0 hover:border-opacity-25 border-[#1e293b]'
                        >
                            Contact us
                        </button>
                    </m.div>
                </m.div>
                <Questionandanswer QandA={QandA} />
            </div>
        </div>
    );
};

export default Agents;
