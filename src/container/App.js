import React from 'react';
import './App.css'

import Promotion from '../components/Promotion/Promotion'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Explore from '../components/Explore/Explore';
import Unions from '../components/Unions/Unions';

const App = () => {
  return (
    <div>
      <Promotion />
      <Navbar />
      <Header />
      <Explore />
      <Unions />
      <Footer />
    </div>
  );
};

export default App;
