import { profileData } from "../assets/assets.js";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* info*/}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-teal-800">About</span>
              Me
            </h2>
            <p className="mb-2 leading-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quaerat fugiat placeat necessitatibus
              distinctio voluptatem tenetur ad sed corrupti eligendi expedita animi, nam dicta dolor amet! Quia optio
              rem nihil architecto aperiam enim error dolor.
            </p>
            <p className="mb-6 leading-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, culpa odit? Assumenda, maxime distinctio
              facilis sint vel itaque veritatis aperiam maiores in.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-6">
              {profileData.map((profile, index) => (
                <div
                  key={index}
                  className="w-full h-55 sm:w-50 p-6 border border-zinc-400 rounded hover:border-zinc-600  cursor-pointer hover:border-b-4 hover:border-b-zinc-800 hover:border-r-4 hover:border-r-zinc-800 hover:-translate-y-1 transition duration-300"
                >
                  <profile.icon className="text-3xl mb-4" />
                  <h1 className="text-xl font-bold mb-4">{profile.title}</h1>
                  <p>{profile.technologies.join(", ")}</p>
                </div>
              ))}
            </div>
          </div>
          {/* img */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <div className="rounded overflow-hidden">
                <img src={assets.profileImg} className="w-full h-full object-cover" alt="Profile" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
