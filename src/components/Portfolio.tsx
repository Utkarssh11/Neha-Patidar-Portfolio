import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Activities from './Activities';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Experience />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;