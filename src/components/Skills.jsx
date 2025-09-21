import { skillsData } from "../assets/assets";

const Skills = () => {
  return (
    <div id="Skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-teal-600">Technical</span> Skills
          </h2>
          <p className="text-xl mx-auto max-w-3xl mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, obcaecati?{" "}
          </p>
        </div>

        {/* card */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="p-6 border bg-teal-50/10 border-teal-700 rounded-xl text-center cursor-pointer hover:border-b-4 hover:border-b-teal-800 hover:border-r-4 hover:border-r-teal-800 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto flex justify-center items-center rounded-full border border-gray-300 bg-gray-50 mb-4">
                <skill.icon className="w-8 h-8 text-teal-800" />
              </div>
              <h3 className="text-xl mb-2 font-bold text-zinc-600">{skill.title}</h3>
              <p className="text-sm text-zinc-500">{skill.technologies.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
