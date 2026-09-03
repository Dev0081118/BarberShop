import React from 'react'
import joshuaImage from "../../public/scrollwindow/trimmer.avif";
import secondImage from "../../public/scrollwindow/setting.avif";
const ImageCardRight = () => {
  return (
     <div className="relative flex h-screen w-full overflow-hidden">
    {/* RIGHT SIDE */}
      <div className="flex h-full w-1/2 items-center justify-center bg-white">
        
        <div className="w-[70%]">
          <p className="mb-5 text-sm font-semibold uppercase tracking-wide">
            Hammoudi Barber Shop
          </p>

          <h1 className="text-5xl leading-tight">
            Experience the art of
            <br />
            traditional barbering
          </h1>

          <p className="mt-8 text-lg leading-relaxed">
            Premium grooming, timeless style and a relaxing atmosphere.
            Discover an experience designed around you.
          </p>

          <button
            className="
                relative
                mt-8
                overflow-hidden
                border-2 border-black
                bg-white
                px-6 py-4
                text-sm font-semibold
                text-black

                before:absolute
                before:inset-y-0
                before:left-0
                before:w-full
                before:origin-left
                before:scale-x-0
                before:bg-black
                before:transition-transform
                before:duration-300
                before:ease-in-out
                hover:before:scale-x-100
                hover:text-white
            "
        >
  <span className="relative z-10 transition-colors duration-300">
    Book an appointment
  </span>
</button>
          
        </div>
          
      </div>

        {/* LEFT SIDE */}
        <div className="relative h-full w-1/2">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${joshuaImage})`,
          }}
        />

        {/* Small Image on top */}
        <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[45%] h-[55%]">
          <img
            src={secondImage}
            alt="Barber shop"
            className="h-full w-full object-cover"
          />
        </div>

      </div>

    </div>
    
  )
};

export default ImageCardRight;

