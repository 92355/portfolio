import './App.css'
import { useState } from 'react';
import './style/index.css'; 

import Header from './components/Header';


import Hero from './components/Hero';

import Skills from './components/Skills';
import Project from './components/Project';
import Footer from './components/Fotter';


function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className ="app-wrapper">
      <Header /> 

      <Hero />

          

      <Skills />   

      <Project />  

      <Footer />  

    </div>
    
    
  );
}

export default App
