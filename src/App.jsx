import { useEffect, useState } from "react";
import profile from './assets/profile.png';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const skills = [
    "C++",
    "DSA",
    "ReactJS",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "Tailwind CSS",
    "JavaScript",
    "Git",
    "REST APIs",
  ];

  const projects = [
    {
      title: "AI Chatbot",
      desc: "Full-stack AI chatbot with authentication, Gemini API integration, responsive design, and modern messaging UI.",
      tech: ["React", "NodeJS", "MongoDB", "Tailwind"],
      live: "https://ai-chatbot-lilac-seven.vercel.app/",
      github: "https://github.com/vishal316156/AiChatbot",
    },
    {
      title: "Portfolio Website",
      desc: "Modern animated developer portfolio with responsive sections, theme switching, and smooth UI.",
      tech: ["React", "Tailwind", "Vite"],
      live: "#",
      github: "https://github.com/Marcox-try083",
    },
    {
      title: "DSA Profile Tracker",
      desc: "Competitive programming profile section showcasing problem solving consistency and coding platform achievements across LeetCode, Codeforces, and CodeChef.",
      tech: ["LeetCode", "Codeforces", "CodeChef"],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-all duration-300">

      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-black/70 border-b border-gray-300 dark:border-zinc-800 px-6 md:px-16 py-5 flex justify-between items-center">

        <h1 className="text-2xl font-extrabold tracking-wide">
          Vishal Kumar
        </h1>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a className="hover:text-gray-500 hover:-translate-y-1 transition-all duration-300" href="#home">Home</a>
          <a className="hover:text-gray-500 hover:-translate-y-1 transition-all duration-300" href="#about">About</a>
          <a className="hover:text-gray-500 hover:-translate-y-1 transition-all duration-300" href="#skills">Skills</a>
          <a className="hover:text-gray-500 hover:-translate-y-1 transition-all duration-300" href="#projects">Projects</a>
          <a className="hover:text-gray-500 hover:-translate-y-1 transition-all duration-300" href="#contact">Contact</a>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-5 py-2 rounded-xl border border-gray-400 dark:border-gray-700"
        >
          {darkMode ? "Light" : "Dark"}
        </button>

      </nav>

      <section id="home" className="px-6 md:px-16 py-28 grid md:grid-cols-2 gap-16 items-center">

        <div>

          <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
            Hello, I am
          </p>

          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-6">
            Vishal Kumar
          </h1>

          <p className="text-lg md:text-xl leading-9 text-gray-700 dark:text-gray-300 max-w-2xl mb-10">
            B.Tech student at NIT Jamshedpur passionate about frontend engineering,
            full-stack development, AI applications, and problem solving.
          </p>

          <div className="flex gap-5 flex-wrap">

            <a
              href="https://github.com/vishal316156"
              target="_blank"
              className="px-7 py-4 rounded-2xl bg-black text-white dark:bg-white dark:text-black font-semibold"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/vishalkumarnitjsr/"
              target="_blank"
              className="px-7 py-4 rounded-2xl border border-gray-400 dark:border-gray-700"
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="px-7 py-4 rounded-2xl border border-gray-400 dark:border-gray-700"
            >
              Resume
            </a>


          </div>

        </div>

        <div className="flex justify-center">

          <div className="w-80 h-80 rounded-full bg-gradient-to-r from-gray-500 to-black flex items-center justify-center shadow-2xl hover:shadow-gray-500/20 hover:scale-105 transition-all duration-500">

            <img
              src={profile}
              alt="Vishal Kumar"
              className="w-72 h-72 rounded-full object-cover border-4 border-white dark:border-black hover:scale-105 transition-all duration-300"
            />

          </div>

        </div>

      </section>

      <section id="about" className="px-6 md:px-16 py-20">

        <h2 className="text-5xl font-bold mb-12 hover:translate-x-2 transition-all duration-300">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="p-10 rounded-3xl bg-gray-100 dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 leading-9 text-gray-700 dark:text-gray-300">
            I enjoy building scalable web applications with clean UI and responsive design.
            Alongside development, I actively practice Data Structures & Algorithms.
          </div>

          <div className="p-10 rounded-3xl bg-gray-100 dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 space-y-5">
            <p><span className="font-bold">College:</span> NIT Jamshedpur</p>
            <p><span className="font-bold">Branch:</span> Electrical Engineering</p>
            <p><span className="font-bold">Graduation:</span> 2028</p>
            <p><span className="font-bold">Focus:</span> Frontend + Full Stack Development</p>
          </div>

        </div>

      </section>

      <section id="skills" className="px-6 md:px-16 py-20">

        <h2 className="text-5xl font-bold mb-12 hover:translate-x-2 transition-all duration-300">
          Skills
        </h2>

        <div className="flex flex-wrap gap-5">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-6 py-4 rounded-2xl bg-gray-100 dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 hover:-translate-y-2 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {skill}
            </div>
          ))}

        </div>

      </section>

      <section id="projects" className="px-6 md:px-16 py-20">

        <h2 className="text-5xl font-bold mb-12 hover:translate-x-2 transition-all duration-300">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="px-6 py-4 rounded-2xl bg-gray-100 dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 hover:-translate-y-2 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >

              <h3 className="text-2xl font-bold mb-5">
                {project.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-8 mb-6">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">

                {project.tech.map((tech, i) => (

                <a
                  key={i}
                  href={
                    tech === "LeetCode"
                      ? "https://leetcode.com/u/vishal_kumar_ee_nitjsr/"
                      : tech === "Codeforces"
                      ? "https://codeforces.com/profile/Vishal_MarcoX_83"
                      : tech === "CodeChef"
                      ? "https://www.codechef.com/users/marcox_vishu83"
                      : ""
                  }
                  target="_blank"
                  className="px-4 py-2 rounded-xl border border-gray-400 dark:border-gray-700 text-sm hover:scale-105 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  {tech}
                </a>
                ))}

              </div>
            </div>
          ))}

        </div>

      </section>

      <section id="contact" className="px-6 md:px-16 py-20">

        <h2 className="text-5xl font-bold mb-12 hover:translate-x-2 transition-all duration-300">
          Contact
        </h2>

        <div className="p-10 rounded-3xl bg-gray-100 dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800">

          <div className="space-y-6 text-lg ">
            <p className="hover:translate-x-2 transition-all duration-300 cursor-pointer" ><span className="font-bold ">Email:</span> vishalnitjsr2605ee@gmail.com</p>
            <p className="hover:translate-x-2 transition-all duration-300 cursor-pointer" ><span className="font-bold ">Phone:</span> +91 9304564714</p>
            <p className="hover:translate-x-2 transition-all duration-300 cursor-pointer" ><span className="font-bold ">LinkedIn:</span> linkedin.com/in/vishalkumarnitjsr</p>
            <p className="hover:translate-x-2 transition-all duration-300 cursor-pointer" ><span className="font-bold ">GitHub:</span> github.com/vishal316156</p>
          </div>

        </div>

      </section>

    </div>
  );
}
