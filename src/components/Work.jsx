import { projectData } from "../assets/assets";

const Work = () => {
  return (
    <div id="Work" className="py-20">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-700 mb-6">
            Personal
            <span className="text-teal-600">Projects</span>
          </h2>
          <p className="text-xl mx-auto max-w-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium.
          </p>
        </div>

        {/* card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12  ">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="group rounded overflow-hidden hover:shadow-lg transition cursor-pointer border border-gray-200 hover:-translate-y-1 duration-300"
            >
              <div className="relative flex items-center justify-center ">
                <img className="w-full h-60 object-cover group-hover:opacity-100" src={project.image} alt="" />
              </div>
              <div className="p-6 space-y-3 relative  ">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-900 text-sm h-15 md:h-16 ">{project.description}</p>
                <div className="h-15 md:h-16 ">
                  <div className="mt-4  flex gap-2 flex-wrap ">
                    {project.tech.map((language, index) => (
                      <span key={index} className="px-4 py-1 bg-gray-100 text-xs font-semibold rounded-full ">
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
                <a href={project.link} className="absolute  gap-2 inline-flex justify-center items-center">
                  <img className="w-4 h-4" src={project.icon} alt="" />
                  <span className="text-sm text-slate-700 hover:text-slate-950">Source code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
