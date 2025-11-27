import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mt-10 bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-2xl font-semibold text-center mb-6 text-primary">
        Experience
      </h3>

      <p className="text-center text-secondary mb-8">
        Some of the technologies I've worked with:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {skills.map((skill, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${skill.border} p-[2px] rounded-xl shadow-md hover:shadow-lg transition`}
          >
            <div className="bg-white rounded-xl p-6 flex flex-col items-center gap-4">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 object-contain"
              />
              <p className="text-lg font-semibold text-primary">{skill.name}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
