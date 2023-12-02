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
        if (currentPage < totalPages) {
            queryClient.prefetchQuery(['agents', currentPage + 1], () => fetchAgents(currentPage + 1));
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
                <m.p variants={item} className='text-[16px] lg:text-[20px] text-center text-[#1F1717] font-Barlow mb-3 font-medium'>PROFESSIONAL ASSISTANCE</m.p>
                <m.h1 variants={item} className='xs:text-[35px] xl:text-[50px] font-Questrial text-[#000000] text-center xs:leading-[40px] lg:leading-[50px] font-bold'>The right agent can lead the way</m.h1>
                <m.p variants={item} className='xs:text-[18px] lg:text-[20px] text-[#1F1717] text-center mt-4 font-Arimo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed sollicitudin nibh, mattis posuere massa.</m.p>
            </m.div>
            <div className="grid xs:grid-cols-1 mt-[70px] lg:mt-[120px] md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <div className='xs:mt-[100px] md:mt-[170px] basis-1/4 mb-10 flex xs:flex-col lg:flex-row'>
                <m.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className='text-left basis-1/2'>
                    <m.h1 variants={item} className='xs:text-[30px] lg:text-[35px] xl:text-[37px] text-[#000000] font-Questrial text-left xs:leading-[35px] lg:leading-[40px] xl:leading-[50px] font-bold'>Frequently Asked Questions</m.h1>
                    <m.p variants={item} className='xs:text-[18px] xl:text-[17px]  text-[#1F1717] mt-6 font-Arimo'>Can’t find answers you’re looking for?</m.p>
                    <m.p variants={item} className='xs:text-[18px] xl:text-[17px]  text-[#1F1717] mt-1 font-Arimo'>Drop us a line. We'll be happy to help you.</m.p>
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
