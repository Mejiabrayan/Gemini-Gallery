import './index.css';
import React from 'react';
import Navbar from './components/navbar/navbar';
import LandingPage from './components/main-view/landing-page';
import MainContent from './components/main-view/main-content';
import Footer from './components/footer/footer';



export default function App() {
  return (
    
    <div className='App'>
      <Navbar />
      <LandingPage />
      <MainContent />
      <Footer />
    </div>
  );
}
