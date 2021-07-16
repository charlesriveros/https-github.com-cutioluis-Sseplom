import React from 'react';
import './App.css'

import Promotion from '../components/Promotion/Promotion'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Explore from '../components/Explore/Explore';

const App = () => {
  return (
    <div>
      <Promotion />
      <Navbar />
      <Header />
      <Explore />
      <Footer />
    </div>
  );
};

export default App;
