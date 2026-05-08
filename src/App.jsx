import { useEffect } from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Works from './components/Works';
import Services from './components/Services';
import About from './components/About';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));
    
    setTimeout(() => {
      document.querySelectorAll('#home .reveal').forEach(el => el.classList.add('visible'));
    }, 100);
  }, []);

  return (
    <div className="bg-brand-offwhite text-brand-black font-display font-light min-h-screen overflow-x-hidden">
      <Cursor />
      <Navbar />
      
      <main>
        <Hero />
        <Marquee />
        <Works />
        <Services />
        <About />
      </main>
    </div>
  );
}

export default App;