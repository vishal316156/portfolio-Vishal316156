import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";

const contacts = [
  {
    title: "GitHub",
    value: "View My Repositories",
    icon: <FaGithub size={35} />,
    link: "https://github.com/vishal316156/",
  },

  {
    title: "LinkedIn",
    value: "Let's Connect",
    icon: <FaLinkedin size={35} />,
    link: "https://www.linkedin.com/in/vishalkumarnitjsr/",
  },

  {
    title: "Email",
    value: "Send Me An Email",
    icon: <FaEnvelope size={35} />,
    link: "mailto:vishalnitjsr2605ee@gmail.com",
  },

  {
    title: "Resume",
    value: "Download Resume",
    icon: <FaFileAlt size={35} />,
    link: "/resume.pdf",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section"
    >
      <div className="text-center mb-16">

        <p className="text-violet-400 mb-4">
          CONTACT
        </p>

        <h2 className="text-5xl font-black mb-6">
          Let's Work Together
        </h2>

        <p className="text-zinc-400 max-w-2xl mx-auto">
          Open to frontend, React, MERN stack and
          software development opportunities.
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-8">

        {contacts.map((item, index) => (

          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
            }}
            className=" glass glow-pill rounded-3xl p-8 flex items-center gap-6">

            <div className="text-violet-400">
              {item.icon}
            </div>

            <div>

              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

              <p className="text-zinc-400">
                {item.value}
              </p>

            </div>

          </motion.a>

        ))}

      </div>
    </section>
  );
}