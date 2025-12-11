import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills">
      <div className="max-w-screen-lg pt-[100px] mx-auto flex flex-col px-4 lg:pt-32 sm:pt-20">
      <h2 className="text-4xl font-bold inline border-b-4 border-accent text-primary">
          Experience
      </h2>

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
      </div>
    </section>
  );
}
