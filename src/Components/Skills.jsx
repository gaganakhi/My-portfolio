import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mt-10 bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-2xl font-semibold text-center mb-6">Experience</h3>

      <p className="text-center text-gray-600 mb-10">
        Some of the technologies that I've worked with:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {skills.map((skill, index) => (
          <div
            key={index}
            className={`bg-white shadow-md rounded-xl p-1
              bg-gradient-to-r ${skill.border} rounded-xl`}
          >
            <div className="bg-white rounded-xl p-6 flex flex-col items-center gap-4">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 object-contain"
              />
              <p className="text-lg font-semibold">{skill.name}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
