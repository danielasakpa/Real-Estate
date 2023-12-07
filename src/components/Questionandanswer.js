import { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { motion as m } from "framer-motion"


function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${id === open ? "rotate-180" : ""
                } h-5 w-5 transition-transform`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );
}


const Questionandanswer = ({ QandA }) => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const customAnimation = {
        mount: { scale: 1 },
        unmount: { scale: 0.9 },
    };

    return (
        <div className='basis-1/2 xs:mt-[50px] overflow-hidden lg:mt-0'>
            {QandA.map((qanda, i) =>
                <m.div
                    initial={{ x: "100px" }}
                    whileInView={{ x: "0" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    key={i}
                >
                    <Accordion
                        open={open === qanda.num} className="py-2" icon={<Icon id={1} open={open} />} animate={customAnimation} key={i}>
                        <AccordionHeader onClick={() => handleOpen(qanda.num)} className="text-[17px] text-left text-[#171717] font-normal font-Arimo">
                            {qanda.question}
                        </AccordionHeader>
                        <AccordionBody className="px-6 py-3 border-b border-gray-200">
                            <ol type="1" className='list-decimal font-bold text-[17px]'>
                                {qanda.ans.map((anstext, i) =>
                                    <li key={i}><p className="mb-2 text-[15px] font-normal text-[#404040] font-Arimo">{anstext}</p></li>
                                )}
                            </ol>
                        </AccordionBody>
                    </Accordion>
                </m.div>
            )}
        </div>
    )
}

export default Questionandanswer