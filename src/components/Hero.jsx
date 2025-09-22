import { FaArrowRight } from "react-icons/fa";
import { assets } from "../assets/assets";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl">
              <span className="text-zinc-700">Fullstack Developer</span>
              <br />
              <span className="text-cyan-700">Javascript</span>
            </h1>
            <p className="text-xl text-zinc-900 mb-6 pt-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum neque libero quam architecto id, minima
              in!
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-4">
              <Link
                to="Work"
                smooth={true}
                duration={500}
                className="px-10 py-4  bg-black text-slate-200 hover:text-white rounded-full flex items-center gap-2 cursor-pointer"
              >
                View My Work <FaArrowRight />
              </Link>
              <Link
                to="Contact"
                smooth={true}
                duration={500}
                className="px-10 py-4 border border-slate-400  rounded-full flex items-center gap-2 cursor-pointer hover:border-slate-800 transition duration-300"
              >
                Contact Me <FaArrowRight />
              </Link>
            </div>
          </div>
          {/* image setion right side */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 floating">
              <div className="absolute inset-0 rounded-2xl overflow-hidden border-4 border-slate-600/30 glow">
                <img className="w-full h-full object-cover" src={assets.profileImg} alt="Profile" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-38 h-34 rounded-xl border border-slate-600/20 overflow-hidden p-3">
                <div className="flex justify-center items-center w-full h-full">
                  <div className="text-center">
                    <div className="text-white text-2xl font-bold">3rd-year</div>
                    <div className="text-sm text-white">IT Student</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
