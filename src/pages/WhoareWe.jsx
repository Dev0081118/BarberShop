import React from 'react'
import { Scissors } from 'lucide-react';
import { SoapDispenserDroplet } from 'lucide-react';
import fade from '../../public/cut.png'
import beard from '../../public/beard.png'
import towel from '../../public/towel.png'
import styling from '../../public/barber-shop.png'
const services = [
  { icon: <Scissors />, label: 'Haircut' },
  { icon: <img style={{ width: '30px', height: '30px' }} src={beard} alt="Beard Trim" />, label: 'Beard Trim' },
  { icon: <img style={{ width: '30px', height: '30px' }} src={fade} alt="Fade" />, label: 'Fade' },
  { icon: <img style={{ width: '30px', height: '25px' }} src={towel} alt="Towel" />, label: 'ShaveHot Towel Shave' },
  { icon: <img style={{ width: '30px', height: '30px' }} src={styling} alt="Styling" />, label: 'Styling' },
  { icon: <SoapDispenserDroplet />, label: 'Skin Care' },
]

const WhoareWe = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="overflow-hidden bg-white py-5">
      
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <div
            className="flex w-max gap-6 px-4 motion-safe:animate-[marquee_18s_linear_infinite]"
            style={{ animation: 'marquee 18s linear infinite' }}
          >
            {[...services, ...services].map((service, index) => (
              <div
                key={`${service.label}-${index}`}
                className="flex min-w-[220px] items-center justify-center gap-4 px-6 py-4 "
              >
                <span className="text-2xl">{service.icon}</span>
                <span className="text-xl font-medium tracking-wide text-black">
                  {service.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-[#0e291b] h-full w-full px-6 py-16 text-white md:px-10 lg:px-16">
        <div className="flex flex-col pt-15 items-center">
          <div className="h-full w-1/3"></div>  
          <div className="mb-6 h-full w-1/2">
            <p className="text-lg font-medium text-white">
              Who We Are
            </p>
            <p className="mt-4 text-white text-3xl">
                Nestled in central Perth, our shop offers far more than standard trims, delivering a refined grooming experience.
            </p>
            <p className="mt-8 text-white text-3xl">
                We blend classic techniques, exceptional attention to detail, and top-tier products for men focused on elevating their personal style.
            </p>
            <p className="mt-8 text-white text-3xl">
                Every touchpoint goes beyond routine grooming: we cultivate sharp confidence, distinct character, and caliber service crafted to top standards.
            </p>
            <p className="mt-8 text-white text-3xl">
                Welcome to Hammoudi Barber.
                Where tradition meets innovation.
            </p>
          </div>
          <div className="h-full w-1/3"></div>
        </div>
      </section>
    </div>
  )
}

export default WhoareWe
