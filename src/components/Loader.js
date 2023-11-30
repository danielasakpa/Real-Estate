import React from 'react'
import { ThreeCircles } from "react-loader-spinner"

const Loader = () => {
    return (
        <div className='w-[100%] h-[100vh] flex justify-center items-center'>
            <ThreeCircles
                height="100"
                width="100"
                color="#1F1717"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
        </div>
    )
}

export default Loader;
