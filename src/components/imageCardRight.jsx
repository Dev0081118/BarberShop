import React from "react";
import joshuaImage from "../../public/scrollwindow/trimmer.avif";
import secondImage from "../../public/scrollwindow/setting.avif";

const ImageCardRight = () => {
  return (
    <section className="w-full overflow-hidden bg-white">

      <div className="flex w-full flex-col md:min-h-screen md:flex-row">

        {/* IMAGE */}
        <div
          className="
            relative
            order-1
            h-[62vh]
            min-h-[420px]
            w-full

            md:order-2
            md:h-screen
            md:w-1/2
          "
        >
          {/* Main image */}
          <img
            src={joshuaImage}
            alt="Barber tools"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Secondary image */}
          <div
            className="
              absolute
              bottom-[8%]
              left-[7%]
              h-[240px]
              w-[165px]
              sm:h-[280px]
              sm:w-[190px]

              md:bottom-auto
              md:left-[15%]
              md:top-1/2
              md:h-[55%]
              md:w-[45%]
              md:-translate-y-1/2
            "
          >
            <img
              src={secondImage}
              alt="Barber styling"
              className="h-full w-full object-cover"
            />
          </div>
        </div>


        {/* CONTENT */}
        <div
          className="
            order-2
            flex
            w-full
            items-center
            bg-white
            px-7
            py-20

            sm:px-10
            sm:py-24

            md:order-1
            md:h-screen
            md:w-1/2
            md:justify-center
            md:px-10
            md:py-0
          "
        >
          <div
            className="
              w-full
              md:w-[70%]
              md:max-w-[600px]
            "
          >

            {/* Eyebrow */}
            <p
              className="
                mb-6
                font-helvetica
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-neutral-500
                sm:text-xs
                md:text-sm
              "
            >
              Where tradition meets modern style
            </p>


            {/* Heading */}
            <h2
              className="
                max-w-[700px]
                font-gt-super
                text-[42px]
                font-medium
                leading-[0.98]
                tracking-[-0.035em]
                sm:text-[50px]
                md:text-5xl
                lg:text-6xl
              "
              style={{
                textWrap: "balance",
              }}
            >
              Crafted with precision. Defined by style.
            </h2>


            {/* Description */}
            <p
              className="
                mt-8
                max-w-[480px]
                font-helvetica
                text-[16px]
                leading-[1.7]
                text-neutral-600
                sm:text-lg
              "
            >
              Premium grooming, timeless style and a relaxing atmosphere.
              From precision cuts to traditional shaves, every service is
              crafted with attention to detail and tailored to you.
            </p>


            {/* Button */}
            <button
              className="
                group
                relative
                mt-9
                overflow-hidden
                border-2
                border-black
                bg-white
                px-6
                py-4
                font-helvetica
                text-sm
                font-semibold
                text-black
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  origin-left
                  scale-x-0
                  bg-black
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:scale-x-100
                "
              />

              <span
                className="
                  relative
                  z-10
                  whitespace-nowrap
                  transition-colors
                  duration-300
                  group-hover:text-white
                "
              >
                Book an appointment
              </span>
            </button>

          </div>
        </div>

      </div>

    </section>
  );
};

export default ImageCardRight;