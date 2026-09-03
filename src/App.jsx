import React from 'react'
import NavBar from './components/NavBar'
import Hero from './pages/hero'
import WhoareWe from './pages/WhoareWe'
import ScrollWindow from './pages/ScrollWindow'
import Services from './pages/services'
import Packages from './pages/packeges'
const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <WhoareWe />
      <ScrollWindow />
      <Services />
      <Packages />
    </div>
  )
}

export default App
