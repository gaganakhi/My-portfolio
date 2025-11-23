export default function About() {
    return (
      <section id="about" className="mt-12 bg-white rounded-2xl p-8 shadow-sm">
        <h3 className="text-2xl font-semibold">About me</h3>
  
        <p className="mt-4 text-slate-700 leading-relaxed">
          I’m a frontend developer specializing in building interactive, accessible
          and clean UI using React, JavaScript and Tailwind CSS.
        </p>
  
        <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-slate-600 list-disc list-inside">
          <li>Responsive UI</li>
          <li>Reusable components</li>
          <li>Accessibility</li>
          <li>Testing & performance</li>
        </ul>
      </section>
    );
  }
  