import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-32">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">



          <div>

            <h3 className="text-3xl font-black">
              Vishal
              <span className="gradient-text">.</span>
            </h3>

            <p className="text-zinc-400 mt-3">
              React Developer • MERN Stack • Competitive Programmer
            </p>

          </div>



          <div className="flex items-center gap-5">

            <a
              href="https://github.com/vishal316156/"
              target="_blank"
              className=" p-3 rounded-full border border-zinc-700 hover:border-violet-500 hover:shadow-[0_0_20px_rgba(139,92,246,.3)] transition-all">
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/vishalkumarnitjsr/"
              target="_blank"
              className=" p-3 rounded-full border border-zinc-700 hover:border-violet-500 hover:shadow-[0_0_20px_rgba(139,92,246,.3)] transition-all">
              <FaLinkedin size={22} />
            </a>

            <a
                href="https://www.instagram.com/vishalsingh_2488?igsh=ZHJxMGVpeGM2MTE4"
                target="_blank"
                rel="noopener noreferrer"
                className=" p-3 rounded-full border border-zinc-700 hover:border-violet-500 hover:shadow-[0_0_20px_rgba(139,92,246,.3)] transition-all ">
                <FaInstagram size={22} />
                </a>

            <a
              href="mailto:vishalnitjsr2605ee@gmail.com"
              className="p-3 rounded-full border border-zinc-700
              hover:border-violet-500 hover:shadow-[0_0_20px_rgba(139,92,246,.3)] transition-all
              "
            >
              <FaEnvelope size={22} />
            </a>

          </div>

        </div>

        <div className="mt-10 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-zinc-500 text-sm">
            © 2026 Vishal Kumar. All rights reserved.
          </p>

          <p className="text-zinc-500 text-sm">
            Built with React, Tailwind CSS & Framer Motion
          </p>

        </div>

      </div>

    </footer>
  );
}