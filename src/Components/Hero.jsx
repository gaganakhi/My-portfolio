import profile from "../assets/Gagan.png";
export default function Hero() {
  return (
    <section className="w-full bg-lightbg text-primary py-24 px-6 flex flex-col md:flex-row items-center justify-between">

      {/* Left Text */}
      <div className="md:w-1/2 space-y-5">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Hi, I’m <span className="text-accent">Gagan</span> — 
          I build beautiful web experiences.
        </h1>

        <p className="text-secondary text-lg">
          QA Engineer • Manual + Automation Testing • Selenium • Java
        </p>

        <div className="flex gap-4 pt-4">
          <a
            href="#projects"
            className="bg-accent text-white px-5 py-3 rounded-lg font-medium shadow hover:opacity-90 transition"
          >
            See my work
          </a>

          <a
            href="#contact"
            className="border border-accent text-accent px-5 py-3 rounded-lg font-medium hover:bg-accent/10 transition"
          >
            Contact me
          </a>
        </div>
      </div>

      {/* Right Photo Card */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <div className="bg-white p-6 rounded-3xl shadow-lg border">
          <img
            src={profile}
            alt="Gagan"
            className="w-64 h-64 object-cover rounded-2xl"
          />
        </div>
      </div>

    </section>
  );
}
