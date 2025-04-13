import { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './front/component/home';
import './App.css'
import { Services } from './front/component/services';
import { Carrousel } from './front/component/carrousel';
import { NavBar } from './front/component/navBar';
import { FormContact } from './front/component/formContact';
import { Footer } from './front/component/footer';
import { About } from './front/component/about';
import { WhatsAppButton } from './front/component/whatsAppButton';

function App() {

  const basename = "";

  


  return (
    <>
      <BrowserRouter basename={basename}>
          <NavBar />        
            <Home />
            <About />
            <Services />
            <Carrousel />
            
            <WhatsAppButton />      
            <Footer />
      </BrowserRouter>
      
    </>
  )
}

export default App
