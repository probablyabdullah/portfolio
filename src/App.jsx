import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Adout from './components/adout/Adout'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Logo from './components/logo/Logo'


const App = () => {
  return (
    <>
      <Logo />
      <Header />
      <Nav />
      <Adout />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App