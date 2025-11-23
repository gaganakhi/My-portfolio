import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mt-10 bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-2xl font-semibold">Skills</h3>

      <div className="mt-4 flex flex-wrap gap-3">
        {skills.map((s) => (
          <span key={s} className="px-3 py-2 rounded-full border text-sm">{s}</span>
        ))}
      </div>
    </section>
  );
}
