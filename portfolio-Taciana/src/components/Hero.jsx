export default function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
        Taciana
      </h1>
      <h2 className="text-xl md:text-2xl text-zinc-400 mb-8 font-light">
        Filmmaker & Fotógrafa
      </h2>
      <button className="bg-zinc-100 text-zinc-900 px-8 py-3 rounded-full font-semibold hover:bg-zinc-300 transition-colors duration-300">
        Conheça meu trabalho
      </button>
    </section>
  )
}