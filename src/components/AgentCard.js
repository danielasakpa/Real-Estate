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
        className="max-w-96 h-[100px] flex items-center bg-[#f5faff] cursor-pointer rounded-md shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
        <div className="w-[100px] h-[100px]">
          {
            agent.PhotoHighRes ?
              <img
                loading="lazy"
                className="w-full h-full object-cover flex justify-center items-center"
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
