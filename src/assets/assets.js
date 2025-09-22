import { FaGithub, FaNodeJs, FaUsers, FaReact, FaCode, FaSchool } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import profileImg from "../assets/profile.avif";
import todoApp from "../assets/todoApp.png";
import laptopShop from "../assets/laptopShop.png";
import gitHub from "../assets/gitHub.png";
import { FaProjectDiagram } from "react-icons/fa";

export const assets = {
  profileImg,
};
export const navMenu = ["Home", "Work", "Skills", "About", "Contact"];

export const skillsData = [
  {
    icon: FaReact,
    title: "Frontend",
    technologies: ["Html", "Css", "JavaScript", "React", "Tailwindcss", "Bootsrap"],
  },
  {
    icon: FaNodeJs,
    title: "Backend",
    technologies: ["Nodejs", "Express", "Rest API"],
  },
  {
    icon: GrMysql,
    title: "Database",
    technologies: ["MySQL", "Sql Server", "MongoDB", "Prisma"],
  },
  {
    icon: FaGithub,
    title: "Tools",
    technologies: ["Git", "Github", "VS Code", "Postman"],
  },
  {
    icon: FaUsers,
    title: "Other Skills",
    technologies: ["Basic UI/UX design", "Soft Skills"],
  },
];

export const projectData = [
  {
    title: "Todo App",
    description: "Immersive shopping experience with  tailwind and react",
    image: todoApp,
    tech: ["React", "Tailwindcss"],
    icon: gitHub,
    link: "#",
  },
  {
    title: "Todo App",
    description: "Immersive shopping experience with  tailwind and react",
    image: todoApp,
    tech: ["React", "Tailwindcss"],
    icon: gitHub,
    link: "#",
  },

  {
    title: "Laptop Shop",
    description: "A modern furniture e-commerce platform offering customizable home and office furniture .",
    image: laptopShop,
    tech: ["Nodejs", "Express", "MySql", "Bootstrap"],
    icon: gitHub,
    link: "https://github.com/zabaoit/node-pro",
  },
  {
    title: "Laptop Shop",
    description: "A modern furniture e-commerce platform offering customizable home and office furniture .",
    image: laptopShop,
    tech: ["Nodejs", "Express", "MySql", "Bootstrap"],
    icon: gitHub,
    link: "https://github.com/zabaoit/node-pro",
  },
];

export const profileData = [
  {
    icon: FaCode,
    title: "Language",
    technologies: ["Javascript"],
  },
  {
    icon: FaSchool,
    title: "Education",
    technologies: ["IT Student at Saigon Technology University"],
  },
  {
    icon: FaProjectDiagram,
    title: "Projects",
    technologies: ["Academic & Personal Projects (4+)"],
  },
];
