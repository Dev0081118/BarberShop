import { Routes, Route, useParams } from 'react-router-dom';
import { configs, getDefaultConfig } from './data/config';
import { validateConfig } from './utils/schema';
import { BarberContext } from './context/BarberContext';

import NavBar from './components/NavBar';
import Hero from './pages/hero';
import WhoareWe from './pages/WhoareWe';
import ScrollWindow from './pages/ScrollWindow';
import Services from './pages/services';
import Packages from './pages/packeges';
import Footer from './components/Footer';
import MeetTheTeam from './pages/MeetTheTeam';
import Review from './pages/reviews';
import PhotoGallery from './pages/PhotoGallary';
import Privacy from './pages/privacy';

const BarberLayout = () => {
  const { slug } = useParams();
  const configToUse = slug ? configs[slug] : getDefaultConfig();

  const validation = validateConfig(configToUse);

  if (!validation.valid) {
    return (
      <div className="flex h-screen items-center justify-center bg-black text-white">
        <h1 className="text-4xl">404 - Barber Not Found or Invalid Configuration</h1>
        <p className="mt-4">{validation.error}</p>
      </div>
    );
  }

  const config = validation.config;

  return (
    <BarberContext.Provider value={config}>
      <NavBar />
      <Hero />
      <WhoareWe />
      {config.splitContent && <ScrollWindow />}
      <Services />
      <Packages />
      <MeetTheTeam />
      <Review />
      <PhotoGallery />
      <Footer />
    </BarberContext.Provider>
  );
};

const PrivacyLayout = () => {
  const { slug } = useParams();
  const configToUse = slug ? configs[slug] : getDefaultConfig();
  const validation = validateConfig(configToUse);

  if (!validation.valid) {
    return (
      <div className="flex h-screen items-center justify-center bg-black text-white">
        <h1 className="text-4xl">404 - Barber Not Found or Invalid Configuration</h1>
      </div>
    );
  }

  return (
    <BarberContext.Provider value={validation.config}>
      <Privacy />
    </BarberContext.Provider>
  );
};

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BarberLayout />} />
        <Route path="/privacy" element={<PrivacyLayout />} />

        {/* Support dynamic slugs */}
        <Route path="/:slug" element={<BarberLayout />} />
        <Route path="/:slug/privacy" element={<PrivacyLayout />} />
      </Routes>
    </div>
  );
};

export default App;
