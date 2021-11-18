import React, { useState } from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import ContactMe from './ContactMe';
import NavBar from './Navbar';
import Footer from './Footer';

function Container() {
    const [currentPage, setCurrentPage] = useState('about');
    
    const renderPage = () => {
      if(currentPage === 'about'){
        return <AboutMe />;
      }
      if(currentPage === 'projects'){
        return <Projects />;
      }
      if(currentPage === 'contact'){
        return <ContactMe />;
      }
    };
    
    const handlePageChange = (page) => setCurrentPage(page);
    
    const styles = {
      mainStyle: {
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        background: '#051f40',
        color: '#d2dbde'
      }
    }
    
    return(
      <main style={styles.mainStyle}>
        <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer />
      </main>  
    );
}
export default Container;
