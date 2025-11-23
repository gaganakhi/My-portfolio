export default function Navbar() {
    return (
      <header className="flex items-center justify-between py-6">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
            GN
          </div>
          <div>
            <h1 className="text-lg font-semibold">Gagan N</h1>
            <p className="text-xs text-slate-500">Qa Test Engineer</p>
          </div>
        </a>
  
        <nav className="space-x-6 text-sm text-slate-600">
          <a href="#about" className="hover:text-indigo-600">About</a>
          <a href="#projects" className="hover:text-indigo-600">Projects</a>
          <a href="#skills" className="hover:text-indigo-600">Skills</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </nav>
      </header>
    );
  }
  