import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Hero from './Component/Hero';
import Navbar from './Component/Navbar';
import { Element } from 'react-scroll';
import Projects from './Component/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Element name='Hero'> 
        <Hero/>
        </Element>
   
  <Element name="About">
        <About/>
    </Element>
    <Element name="Projects">
  <Projects/>
  </Element>
    <Element name="Contact">
        <Contact/>
        </Element>
      <Footer/>
    </div>
  );
}

export default App;
