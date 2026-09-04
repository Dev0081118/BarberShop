const Footer = () => {
  return (
    <footer className="bg-black text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 lg:px-20">

        {/* Top */}
        <div className="grid gap-16 md:grid-cols-12">

          {/* Brand */}
          <div className="md:col-span-6">

            <p className="mb-8 text-xs uppercase tracking-[0.3em] text-neutral-500">
              Hammoudi Barber Shop
            </p>

            <h2 className="max-w-[700px] text-5xl font-light leading-[0.95] tracking-[-0.05em] md:text-7xl lg:text-8xl">
              Good hair.
              <br />
              Good mood.
              <br />
              <span className="text-neutral-600">
                Good times.
              </span>
            </h2>

          </div>


          {/* Navigation */}
          <div className="md:col-span-2">

            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-neutral-500">
              Explore
            </p>

            <nav className="flex flex-col gap-4 text-sm">

              <a
                href="#home"
                className="w-fit transition-colors duration-300 hover:text-[#c96b3c]"
              >
                Home
              </a>

              <a
                href="#services"
                className="w-fit transition-colors duration-300 hover:text-[#c96b3c]"
              >
                Services
              </a>

              <a
                href="#packages"
                className="w-fit transition-colors duration-300 hover:text-[#c96b3c]"
              >
                Packages
              </a>

              <a
                href="#whoarewe"
                className="w-fit transition-colors duration-300 hover:text-[#c96b3c]"
              >
                About
              </a>

              <a
                href="#photo-gallery"
                className="w-fit transition-colors duration-300 hover:text-[#c96b3c]"
              >
                Photo Gallery
              </a>

            </nav>

          </div>


          {/* Contact */}
          <div className="md:col-span-4">

            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-neutral-500">
              Visit us
            </p>

            <div className="space-y-5 text-sm text-neutral-300">

              <p>
                188 Adelaide Terrace
                <br />
                Perth WA 6004, Australia
              </p>

              <a
                href="tel:+61425780603"
                className="block w-fit transition-colors duration-300 hover:text-[#c96b3c]"
              >
                +61 416 917 772
              </a>

              <a
                href="mailto:hello@hammoudibarber.com"
                className="block w-fit transition-colors duration-300 hover:text-[#c96b3c]"
              >
                hello@hammoudibarber.com
              </a>

            </div>

          </div>

        </div>


        {/* Appointment CTA */}
        <div className="mt-32 border-y border-neutral-800 py-12">

          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-neutral-500">
                Your chair is waiting
              </p>

              <h3 className="text-3xl font-light tracking-[-0.03em] md:text-4xl">
                Ready for a fresh cut?
              </h3>
            </div>


            <button
              className="
                group
                relative
                overflow-hidden
                border
                border-white
                px-8
                py-4
                text-sm
                font-medium
                uppercase
                tracking-[0.15em]
              "
            >

              <span
                className="
                  absolute
                  inset-0
                  origin-left
                  scale-x-0
                  bg-white
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:scale-x-100
                "
              />

              <span
                className="
                  relative
                  z-10
                  transition-colors
                  duration-500
                  group-hover:text-black
                "
              >
                Book Appointment
              </span>

            </button>

          </div>

        </div>


        {/* Bottom */}
        <div className="flex flex-col justify-between gap-6 pt-8 text-xs text-neutral-600 md:flex-row">

          <p>
            © {new Date().getFullYear()} Hammoudi Barber Shop
          </p>

          <div className="flex gap-8">

            <a
              href="https://www.instagram.com/hammoudi_barber_shop/"
              className="transition-colors duration-300 hover:text-white"
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/p/Hammoudi-barber-shop-100063867472962"
              className="transition-colors duration-300 hover:text-white"
            >
              Facebook
            </a>

            <a
              href="/privacy"
              className="transition-colors duration-300 hover:text-white"
            >
              Privacy
            </a>

          </div>

          <p>
            Crafted with precision.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;