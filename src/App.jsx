import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-brand-black text-brand-offwhite min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Contact />
    </div>
  )
}

export default App