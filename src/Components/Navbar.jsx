export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        
      <h1 className="text-2xl font-poppins font-semibold text-primary tracking-wider uppercase">GAGAN N</h1>

        <ul className="hidden md:flex gap-8 text-primary font-medium">
          <li className="hover:text-accent cursor-pointer">Home</li>
          <li className="hover:text-accent cursor-pointer">About</li>
          <li className="hover:text-accent cursor-pointer">Projects</li>
          <li className="hover:text-accent cursor-pointer">Skills</li>
          <li className="hover:text-accent cursor-pointer">Contact</li>
        </ul>

      </div>
    </nav>
  );
}
