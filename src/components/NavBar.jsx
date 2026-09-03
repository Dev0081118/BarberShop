import React from 'react'
import logo from '../assets/logo/logo2.png'
const NavBar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-10 bg-transparent px-5 md:px-10 py-2">
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="h-25 w-20 md:h-25  md:w-25 " />
            <h1 className="text-xl ml-7 mt-3 md:text-2xl font-gt-super font-bold   text-white">
              HAMMOUDI BARBER SHOP
            </h1>
          </div>

          {/* Navbar actions */}
          <div className="flex items-center gap-6 md:gap-10 mr-7 text-white">
            <a
              href="#service"
              className="hidden font-helvetica sm:inline text-base md:text-lg font-medium hover:text-amber-400 transition-colors hover:underline hover:underline-offset-4 hover:decoration-amber-400"
            >
              SERVICES
            </a>

            <a
              href="tel:0416917772"
              className="text-base font-helvetica md:text-lg font-semibold flex items-center gap-2 hover:text-amber-400 transition-colors hover:underline hover:underline-offset-4 hover:decoration-amber-400"
            >
              <span className="hidden sm:inline">04 1691 7772</span>
            </a>

            <a
              href="#book"
              className="bg-amber-500 hover:bg-amber-400 text-black font-bold font-helvetica text-base md:text-lg px-4 md:px-6 py-2 rounded-full transition-colors"
            >
              BOOK NOW
            </a>
          </div>
        </div>
    </nav>
  )
}

export default NavBar
