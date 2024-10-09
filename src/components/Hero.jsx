import React from 'react'
import hero from '/assets/hero.png';
import mask from '/assets/mask.png';

const Hero = () => {
  return (
    <div className="relative w-full h-[50vh] md:h-[80vh] lg:h-[90vh] flex items-center ">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center z-0"
      style={{ backgroundImage: `url(${hero})` }}
    />
    {/* Red Shape */}
    <img
      src={mask}
      alt="Red Shape"
      className="absolute right-0 h-[100%] w-[30%] md:w-[40%] z-10"
    />

    {/* Text Content */}
    <div className="relative z-20 text-white md:pl-20 pl-3">
       
      <h1 className="text-2xl md:text-5xl lg:text-6xl md:font-bold">
        itel Media Haven
      </h1>
      <p className="mt-2 text-sm md:text-lg lg:text-xl">
        Blog Binge and News Updates!
      </p>
    </div>
  </div>
  )
}

export default Hero