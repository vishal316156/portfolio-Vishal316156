import { motion } from "framer-motion";

const cards = [
  {
    title: "About Me",
    description:
      "Frontend-focused developer passionate about building modern, responsive and interactive web applications.",
  },

  {
    title: "Frontend",
    description:
      "React, JavaScript, Tailwind CSS, Framer Motion, Responsive Design.",
  },

  {
    title: "DSA",
    description:
      "Competitive programming and problem solving across LeetCode, Codeforces and CodeChef.",
  },

  {
    title: "Backend",
    description:
      "Node.js, Express.js, MongoDB, REST APIs and Authentication.",
  },

  {
    title: "React",
    description:
      "Component architecture, hooks, routing, state management and UI development.",
  },

  {
    title: "AI Apps",
    description:
      "Building AI-powered applications using Gemini APIs and modern frontend experiences.",
  },
];

export default function AboutGrid() {
  return (
    <section id="about" className="section">

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-black mb-14">
          About & Skills
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">

        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
            }}
            whileHover={{
              y: -12,
              scale: 1.03,
            }}
            className=" glass rounded-3xl p-8 min-h-[220px] cursor-pointer transition-all duration-500
              hover:border-violet-500/50 ">
            <h3 className="text-2xl font-bold mb-5">
              {card.title}
            </h3>

            <p className="text-zinc-400 leading-8">
              {card.description}
            </p>
          </motion.div>
        ))}

      </div>

    </section>
  );
}