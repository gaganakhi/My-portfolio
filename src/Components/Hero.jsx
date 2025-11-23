export default function Hero() {
    return (
      <section className="grid md:grid-cols-2 gap-8 items-center py-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hi, I’m <span className="text-indigo-600">Gagan</span> — I build beautiful web experiences.
          </h2>
  
          <p className="mt-4 text-slate-600 max-w-xl">
            I specialize in React, modern UI, accessibility and performance.
          </p>
  
          <div className="mt-6 flex gap-4">
            <a href="#projects" className="px-5 py-3 rounded-lg bg-indigo-600 text-white shadow">
              See my work
            </a>
            <a href="#contact" className="px-5 py-3 rounded-lg border border-slate-200 text-slate-700">
              Contact me
            </a>
          </div>
        </div>
  
        <div className="relative">
          <div className="w-full h-80 rounded-2xl bg-indigo-100 flex items-center justify-center">
            <div className="w-36 h-36 rounded-full bg-white/90 mx-auto flex items-center justify-center text-indigo-600 font-bold text-2xl">
              SS
            </div>
          </div>
        </div>
      </section>
    );
  }
  