import { Link } from "react-router-dom"
import { motion as m } from "framer-motion"

export default function AgentCard({ agent }) {
  return (
    <Link to={`/agents/${agent.IndividualID}`}>
      <m.div
        initial={{ x: "100%" }}
        whileInView={{ x: "0" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-96 h-[100px] flex items-center bg-[#f5faff] cursor-pointer rounded-md shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
        <div className="w-[100px] h-[100px]">
          {
            agent.PhotoHighRes ?
              <img
                loading="lazy"
                className="w-full h-full object-cover"
                src={agent.PhotoHighRes}
                alt="agentImg"
              />
              :
              <div className='flex justify-center items-center w-full h-full bg-[#A3A3A3] rounded-sm'>
                <p className="font-Arimo text-[#f5faff]">No Image</p>
              </div>
          }
        </div>
        <div className="text-left ml-3">
          <p variant="h5" color="blue-gray" className='text-[16px] text-[#000000] font-Questrial'>
            {agent.Name}
          </p>
          <p color="blue" className='text-[15px] text-[#1F1717] font-Arimo'>
            {agent.Position ? agent.Position.split(" ").slice(0, 3).join(" ") : "Position Unknown"}
          </p>
          <p color="blue" className='text-[13px] text-[#1F1717] font-Arimo'>
            <span className='xs:text-[12px] lg:text-[12px] xl:text-[18px] text-[#171717]'>Office:</span> {agent.Organization.Name ? agent.Organization.Name.toUpperCase().split(" ").slice(0, 2).join(" ") : "Organization Unknown"}
          </p>
        </div>
      </m.div>
    </Link>
  );
}
