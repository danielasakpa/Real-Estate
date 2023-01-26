import { Link } from "react-router-dom"
import { motion as m } from "framer-motion"

export default function AgentCard({ agent }) {
  return (
    <Link to={`/agents/${agent.id}?advertiser_id=${agent.advertiser_id}&nrds_id=${agent.nrds_id}`}>
      <m.div
        initial={{ x: "100%" }}
        whileInView={{ x: "0" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-96 shadow-md py-2 flex items-center bg-[#FFFFFF] cursor-pointer rounded-sm">
        <img loading="lazy" className="w-[100px] h-[100px] mr-5 object-cover" src={agent.photo.href} alt="agentImg" />
        <div className="text-left">
          <p variant="h5" color="blue-gray" className='text-[20px] text-[#171717] mt-3 font-Roboto'>
            {agent.person_name}
          </p>
          <p color="blue" className='text-[15px] text-[#A3A3A3] mt-2 font-Roboto'>
            {agent.title}
          </p>
          <p color="blue" className='text-[15px] text-[#A3A3A3] mt-2 font-Roboto'>
            <span className='xs:text-[15px] xl:text-[18px] text-[#171717]'>Office:</span> {agent.office.name}
          </p>
        </div>
      </m.div>
    </Link>
  );
}
