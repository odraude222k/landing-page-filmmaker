import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-zinc-900 text-zinc-100 min-h-screen font-sans">
      <Hero />
      <About />
      <Gallery />
      <Contact />
    </div>
  )
}

export default App