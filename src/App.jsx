import StarBackground from './components/StarBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Projects from './components/Projects';
import Links from './components/Links';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <StarBackground />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Languages />
        <Projects />
        <Links />
        <Contact />
      </main>
    </>
  );
}

export default App;