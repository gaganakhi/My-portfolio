import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import SocialBar from "./Components/SocialBar";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      <Navbar />
      <main className="w-full px-4 py-12">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <SocialBar />
      </main>
    </div>
  );
}
