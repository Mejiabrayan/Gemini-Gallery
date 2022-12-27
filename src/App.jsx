import './index.css';
import React from 'react';
import Navbar from './components/navbar/navbar';
import LandingPage from './components/main-view/landing-page';
import Search from './components/search/search';
import Footer from './components/footer/footer';

export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <LandingPage />
      <Search />
      <Footer />
    </div>
  );
}
