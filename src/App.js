import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
// import Projects from './components/Projects';
// import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {

  const styles = {
    mainStyle: {
      width: '100%',
      height: '100%',
    }
  }

  return(
    <main style={styles.mainStyle}>
      <Navbar />
      <AboutMe />
      {/*<Projects />
      <ContactMe />
      */}
      <Footer />
    </main>  
  );
}

export default App;
