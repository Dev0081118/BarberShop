import React from 'react'
import NavBar from './components/NavBar'
import Hero from './pages/hero'
import WhoareWe from './pages/WhoareWe'
import ScrollWindow from './pages/ScrollWindow'
import Services from './pages/services'
import Packages from './pages/packeges'
import Footer from './components/Footer'
import MeetTheTeam from './pages/MeetTheTeam'
import Review from './pages/reviews'
import PhotoGallery from './pages/PhotoGallary'
const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <WhoareWe />
      <ScrollWindow />
      <Services />
      <Packages />
      <MeetTheTeam />
      <Review />
      <PhotoGallery />
      <Footer />
      
    </div>
  )
}

export default App
