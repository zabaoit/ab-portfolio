import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="text-teal-800">Touch</span>
          </h1>
          <p className="mb-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed corporis doloribus culpa.
          </p>
        </div>
        {/* Contact */}
        <div className="max-w-3xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="border border-zinc-500 rounded w-full outline-none px-4 py-3"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="border border-zinc-500 rounded w-full outline-none px-4 py-3"
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter Subject"
                className="border border-zinc-500 rounded w-full outline-none px-4 py-3"
              />
            </div>
            <div>
              <textarea
                placeholder="Enter Message Here"
                className="border border-zinc-500 rounded w-full outline-none px-4 py-3 h-40"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button className="flex  items-center gap-2 text-slate-200 hover:text-white transition rounded-full bg-zinc-800 py-4 px-8 cursor-pointer">
                Send Message <FaArrowRight />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
