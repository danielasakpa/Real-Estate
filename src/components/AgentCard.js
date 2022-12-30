import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";


export default function AgentCard({ agent }) {

  return (
    <Card className="max-w-96 shadow-md bg-[#FFFFFF] rounded-2xl">
      <CardHeader floated={false} className=" rounded-xl">
        <img loading="lazy" className="transition duration-300 ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-125" src={agent.img} alt="agentImg" />
      </CardHeader>
      <CardBody className="text-left">
        <Typography variant="h5" color="blue-gray" className='text-[20px] text-[#171717] mt-3 font-Roboto'>
          {agent.name}
        </Typography>
        <Typography color="blue" className='text-[15px] text-[#A3A3A3] mt-2 font-Roboto' textGradient>
          {agent.position}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center pt-2 gap-7">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
  );
}
