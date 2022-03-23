import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './index'
import Header from '..//src/components/header/Header'
import Home from '..//src/components/home/Home'
import About from '..//src/components/about/About'
import Popular from '..//src/components/popular/Popular'
import Featured from '..//src/components/featured/Featured'
import Footer from '..//src/components/footer/Footer'
import scrollreveal from 'scrollreveal'
import { useEffect } from 'react'
import mixitup from 'mixitup'

const App = () => {
  useEffect(()=> {
    let mixer = mixitup('.container-pos-cars');

    mixer.filter('.all');

    const sr = scrollreveal({
      origin: "top",
      distance: "100px",
      duration: 2200,
      delay: 400,
    });
    sr.reveal(
      `
      section,
      #Home,
      #About
      #Popular
      #Featured
      #Cars
      #footer
      `
    )
  }, []);
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Popular/>
      <Featured/>
      <Footer/>
    </>
  )
}

export default App