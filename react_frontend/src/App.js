import React from 'react'

import { About, Header, Footer, Skills, Work, Testimonials } from './Container';
import { Navbar } from './Components';
import './App.scss';


const App = () => {
  return (
    <div className='app'>
        
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonials />
        <Footer />
    </div>
  )
}


export default App