import { useState } from 'react'; // Import React and useState
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for responsiveness
import namepic from "../assets/namenew.png";

export default function Navbar() {
  // 1. State to track if the mobile menu is open or closed
  const [navOpen, setNavOpen] = useState(false);
  
  // Define navigation links
  const links = [
    { name: "Home", href: "#hero"},
    { name: "About", href: "#about" },
    { name: "Protfolio", href: "#projects" },
    { name: "Experience", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  // Helper function to close the menu (useful after clicking a link)
  const closeMenu = () => setNavOpen(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white/90 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6 h-20"> {/* Added h-20 for consistent height */}
        
        {/* --- Logo/Name Section (Left Side) --- */}
        <div className="flex items-center">
          <a href="#home" onClick={closeMenu}>
             {/* Corrected the image structure and styling */}
            <img 
              src={namepic} 
              alt="Your Name/Logo" 
              className="h-12 w-auto object-contain cursor-pointer" // Adjusted size for navbar
            />
          </a>
        </div>

        {/* --- Desktop Navigation (Hidden on small screens) --- */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {links.map((link) => (
            <li 
              key={link.name} 
              className="hover:text-blue-600 shadow-sm transition-all duration-200 cursor-pointer"
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* --- Mobile Menu Icon (Right Side, Visible on small screens) --- */}
        <div 
          onClick={() => setNavOpen(!navOpen)}
          className="md:hidden text-gray-800 cursor-pointer z-50"
          aria-label={navOpen ? "Close menu" : "Open menu"} // Accessibility
        >
          {navOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
        
      </div>

      {/* --- Mobile Dropdown Menu (Conditionally Rendered) --- */}
      {navOpen && (
        <ul className="md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-sm flex flex-col items-center shadow-lg py-4 transition-all duration-300 ease-in-out">
          {links.map((link) => (
            <li 
              key={link.name} 
              className="w-full text-center py-3 text-lg text-gray-700 hover:bg-gray-100"
            >
              <a href={link.href} onClick={closeMenu}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}