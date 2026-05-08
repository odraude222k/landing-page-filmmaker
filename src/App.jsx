import { useEffect } from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  // Esse código faz os elementos surgirem suavemente quando aparecem na tela
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
    
    // Animação imediata do Hero ao carregar a página
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
      </main>
    </div>
  );
}

export default App;