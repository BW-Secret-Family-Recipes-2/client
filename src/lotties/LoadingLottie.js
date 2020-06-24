import React from 'react'
import Lottie from 'react-lottie';
import animationData from './4073-loader.json'
import animationData2 from './10818-food-around-the-city.json'
import animationData3 from './24064-food-squeeze-with-burger-and-hot-dog.json'
import animationData4 from './24985-web-dev.json'
import animationData5 from './17978-cookie-blowmind.json'

export const LoadingLottie = ({height, width, something}) => {
    const defaultOptions ={
        loop: true,
        autoplay: true,
        animationData: something || animationData3,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return(
        <div>
            <Lottie 
            options={defaultOptions}
            height={height || 500}
            width={width || 500}
            />
        </div>
    )
}