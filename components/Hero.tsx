"use client";
import { Custombtn } from "."

const Hero = () => {

  const handleScroll = ()=>{
    console.log('BTN pressed')
  }
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                Find,Book or Rent a car
                -quickly and easily!
            </h1>
            <p className="hero__subtitle">
                Streamline your car rental experiance with our effortless booking process.
            </p>
            <Custombtn 
            title='Explore cars'
            containerStyles='bg-primary-blue
            text-white rounded-full mt-10'
            handleClick={handleScroll} />
        </div>
    </div>
  )
}

export default Hero