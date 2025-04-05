import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './front/component/home';
import './App.css'
import { Services } from './front/component/services';
import { Carrousel } from './front/component/carrousel';
import { NavBar } from './front/component/navBar';
import { FormContact } from './front/component/formContact';
import { Footer } from './front/component/footer';
import { About } from './front/component/about';

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
            <FormContact />  
                   
            <Footer />
      </BrowserRouter>
      
    </>
  )
}

export default App
