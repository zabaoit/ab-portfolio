import { socialLinks } from "../assets/assets.js";

const Footer = () => {
  return (
    <div className="py-12 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="uppercase font-bold text-2xl">The-Zabaoit</span>
          </div>
          <div className="flex space-x-6 mb-6 md:mb-0">
            {socialLinks.map((socialLink, index) => (
              <a key={index} href={socialLink.link} target="_blank" rel="noreferrer" className="text-teal-800">
                <socialLink.icon className="w-6 h-6" />{" "}
              </a>
            ))}
          </div>
          <div className="text-zinc-400 text-sm">© 2025 The-Zabaoit. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
