import { useState } from 'react'
import  Home  from './front/component/home';
import './App.css'
import { Services } from './front/component/services';
import { Carrousel } from './front/component/carrousel';
import { NavBar } from './front/component/navBar';
import { FormContact } from './front/component/formContact';
import { Footer } from './front/component/footer';
import { About } from './front/component/about';

function App() {
  

  return (
    <>
      <div>
       <NavBar /> 
       <Home /> 
       <About />
       <Services />
      <p className="read-the-docs">
        Peluqueria
      </p>
      <Carrousel />
      <FormContact />
      </div>
      <Footer />
    </>
  )
}

export default App
