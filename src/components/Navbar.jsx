import { FaArrowRight } from "react-icons/fa";
import { navMenu } from "../assets/assets.js";
import { Link } from "react-scroll";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  return (
    <div className="fixed w-full py-4 z-50 backdrop-blur-3xl">
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
              <Link
                key={index}
                to={`${item}`}
                smooth={true}
                duration={500}
                spy={true}
                onSetActive={() => setActive(item)}
                className={`cursor-pointer  ${active === item ? "text-teal-600 font-bold" : ""}`}
              >
                {item}
              </Link>
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
