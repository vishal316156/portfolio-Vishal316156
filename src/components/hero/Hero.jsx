import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profile from "../../assets/profile.png";

const roles = [
  "Fullstack Developer",
  "UI/UX Enthusiast",
  "React Specialist",
  "Motion Designer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="
        section
        relative
        overflow-hidden
      "
    >

    <div
  className=" absolute top-10 left-0 h-72 w-72 bg-violet-600/30 blur-[120px] rounded-full pointer-events-none"/>

<div
  className="bottom-0 absolute right-0 h-72 w-72 bg-cyan-500/30 blur-[120px] rounded-full pointer-events-none"/>



      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-violet-600/20 blur-[140px]" />

        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-cyan-500/20 blur-[140px]" />

      </div>

      <div className="section grid lg:grid-cols-2 gap-16 items-center relative z-10">



        <div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-violet-400 font-medium mb-4"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-black leading-none"
          >
            Vishal
            <br />
            Kumar
          </motion.h1>



          <div className="h-16 mt-6 overflow-hidden">
            <motion.h2
              key={roleIndex}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-2xl md:text-3xl font-semibold gradient-text"
            >
              {roles[roleIndex]}
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-zinc-400 text-lg leading-8 mt-6 max-w-xl"
          >
            I build modern, responsive and interactive web
            applications with React, Tailwind, Framer Motion,
            Node.js and AI integrations.
          </motion.p>



          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-5 mt-10"
          >
            <a
              href="#projects"
              className=" px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:scale-105 transition-all duration-300">
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="px-8 py-4 rounded-2xl border border-zinc-700 hover:border-violet-500 transition-all duration-300"
            >
              Resume
            </a>
          </motion.div>
        </div>



        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-violet-600/30 blur-3xl" />

            <img
              src={profile}
              alt="profile"
              className=" relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full object-cover border-8 border-zinc-800 hover:scale-105 transition-all duration-500"/>
          </div>
        </motion.div>
      </div>



      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
      >
        ↓ Scroll
      </motion.div>
    </section>
  );
}