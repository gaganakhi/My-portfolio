import profile from "../assets/Gagan.png";
export default function Hero() {
  return (
    <section id="hero" className="w-full bg-lightbg text-primary py-24">
      <div className="max-w-screen-lg pt-[100px] items-center sm:items-start mx-auto flex flex-col lg:pt-32 sm:pt-20  px-4 sm:flex-row">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            I'm a Software Test Engineer
          </h1>

          <p className="text-secondary text-lg">
            Specialized In Manual + Automation Testing • Selenium • Java
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold tracking-wide text-blue bg-white shadow-sm transition-all duration-200 ease-out hover:bg-accent/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent/40 active:scale-[0.97]"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold tracking-wide text-blue bg-white shadow-sm transition-all duration-200 ease-out hover:bg-accent/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent/40 active:scale-[0.97]"
            >
              Contact me
            </a>
          </div>
        </div>

        {/* Right Photo Card */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 overflow-hidden">
          <div className="bg-white p-6 rounded-3xl shadow-lg border">
            <img
              src={profile}
              alt="Gagan"
              className="w-64 h-64 object-cover rounded-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
