import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import ManagedServices from './pages/ManagedServices/ManagedServices'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import ServicePackages from './pages/ServicePackages/ServicePackages'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import SmoothScroll from 'smooth-scroll';
import { useEffect } from 'react'
import ScrollToTopNew from './components/ScrollToTopNew/ScrollToTopNew'


const App = () => {

   useEffect(() => {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 1000,
      speedAsDuration: true,
      easing: 'easeInOutCubic',
      offset: 150
    });
    return () => scroll.destroy();
  }, []);

  return (
    <>
      <Navbar />
      <main className="main-content">
        <ScrollToTopNew />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:serviceId" element={<Services />} />
          <Route path="/service-packages" element={<ServicePackages />} />
          <Route path="/managed-services" element={<ManagedServices />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
