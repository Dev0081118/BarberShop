import React from 'react'
import heroImage from '../assets/hero2.png'

const Hero = () => {
  return (
    <div
      id="home"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"></div> */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative top-1/2 -translate-y-1/2 text-center">
        <h1 className="font-gt-super text-7xl font-bold text-white">
          HAMMOUDI BARBER SHOP
        </h1>

        <p className="mt-8 font-helvetica text-white font-bold text-4xl ">
          HIGHEST QUALITY CUTS & SHAVES
        </p>
      </div>
    </div>
  )
}

export default Hero