import { useState } from "react";

import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiDocker,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";

const techs = [
  {
    name: "React",
    category: "Frontend",
    icon: SiReact,
    color: "text-cyan-400",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: SiJavascript,
    color: "text-yellow-400",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: SiTailwindcss,
    color: "text-cyan-300",
  },

  {
    name: "Node.js",
    category: "Backend",
    icon: SiNodedotjs,
    color: "text-green-400",
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: SiExpress,
    color: "text-zinc-300",
  },
  {
    name: "REST APIs",
    category: "Backend",
    icon: TbApi,
    color: "text-violet-400",
  },

  {
    name: "MongoDB",
    category: "Database",
    icon: SiMongodb,
    color: "text-green-500",
  },

  {
    name: "Git",
    category: "Tools",
    icon: SiGit,
    color: "text-orange-400",
  },
  {
    name: "GitHub",
    category: "Tools",
    icon: SiGithub,
    color: "text-white",
  },
  {
    name: "Vercel",
    category: "Tools",
    icon: SiVercel,
    color: "text-white",
  },
  {
    name: "Docker",
    category: "Tools",
    icon: SiDocker,
    color: "text-white",
  },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTechs =
    activeCategory === "All"
      ? techs
      : techs.filter(
          (tech) => tech.category === activeCategory
        );

  return (
    <section className="section">

      <div className="text-center mb-12">

        <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">
          Tech Stack
        </p>

        <h2 className="text-4xl md:text-5xl font-black">
          Technologies I Use
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-zinc-400">
          Tools and technologies I use to build modern web
          applications.
        </p>

      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">

        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-5 py-2.5
                rounded-full
                text-sm font-medium
                border
                transition-all duration-200
                ${
                  isActive
                    ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white"
                    : "bg-white/[0.03] border-white/20 text-zinc-300 hover:text-white hover:border-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.25)]"
                }
              `}
            >
              {category}
            </button>
          );
        })}

      </div>

      <div
        className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto
        "
      >
        {filteredTechs.map((tech) => {
          const Icon = tech.icon;

          return (
            <div
              key={tech.name}
              className=" group flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-violet-500/[0.04]
              "
            >

              <div className="flex items-center justify-center w-12 h-12 shrink-0">

                <Icon
                  className={`
                    text-3xl
                    ${tech.color}
                    transition-transform
                    duration-200
                    group-hover:scale-110
                  `}
                />

              </div>

              <div>

                <h3 className="font-semibold text-white">
                  {tech.name}
                </h3>

                <p className="text-sm text-zinc-500 mt-1">
                  {tech.category}
                </p>

              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}