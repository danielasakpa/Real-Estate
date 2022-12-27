import React from 'react'

const Questionandanswer = ({QandA}) => {
    
    return (
        <div id="accordion-flush" className='basis-1/2 xs:mt-[50px] md:mt-0' data-accordion="collapse" data-active-classes="bg-white text-gray-900 dark:text-gray-500" data-inactive-classes="dark:text-[#171717]">
            {QandA.map((qanda, i) =>
                <div key={i}>
                    <h2 id={qanda.accordionHeader}>
                        <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left border-b border-gray-200" data-accordion-target={"#" + qanda.accordionBody} aria-expanded="true" aria-controls={qanda.accordionBody}>
                            <span className='font-Rubik'>{qanda.question}</span>
                            <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </h2>
                    <div id={qanda.accordionBody} className="hidden" aria-labelledby={qanda.accordionHeader}>
                        <div className="py-5 px-3 font-light border-b border-gray-200">
                            <ol type="1" className='list-decimal'>
                                {qanda.ans.map((anstext, p) =>
                                    <li key={p}><p className="mb-2 dark:text-[#A3A3A3] font-Rubik">{anstext}</p></li>
                                )}
                            </ol>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Questionandanswer