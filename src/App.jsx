import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PersonalProyects from './components/PersonalProyects';

function App() {
  return (
    <div className="font-['Inter',sans-serif]">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <PersonalProyects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;






