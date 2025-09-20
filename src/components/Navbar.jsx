import { FaArrowRight } from "react-icons/fa";
import { navMenu } from "../assets/assets.js";
const Navbar = () => {
  return (
    <div className="fixed w-full py-4 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* logo */}
          <div className="text-2xl font-bold text-zinc-800">
            <span>THE-</span>
            <span className="text-teal-800 font-orbiron">ZABAOIT</span>
          </div>
          {/* menu */}
          <div className="hidden md:flex space-x-8 border border-gray-200 rounded-full py-4 px-10">
            {navMenu.map((item, index) => (
              <a key={index} href={`#${item}`}>
                {item}
              </a>
            ))}
          </div>
          {/* buttons */}
          <div>
            <button className="px-10 py-4 border border-zinc-500 rounded-full flex items-center gap-2 cursor-pointer text-slate-500 hover:text-slate-800 hover:translate-y-1 transition duration-300">
              Resume
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
