import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';



function App() {
  return(
    <main>
      <Navbar />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </main>  
  )
}

export default App;
