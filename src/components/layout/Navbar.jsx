import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { HiMoon, HiSun } from "react-icons/hi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      threshold: 0,
      rootMargin: "-40% 0px -40% 0px",
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();

}, []);

  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "DSA", href: "#dsa" },
    { name: "Contact", href: "#contact" },
  ];


  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "backdrop-blur-xl bg-black/60 border-b border-zinc-800"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <a
            href="#home"
            className="text-2xl font-black tracking-tight"
          >
            Vishal
            <span className="gradient-text">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">

            {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={` px-4 py-2 rounded-full border transition-all duration-300

              ${
                activeSection === item.href.replace("#", "")
                  ? "border-violet-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.25)]"
                  : "border-transparent text-zinc-300 hover:border-violet-500 hover:text-white"
              }
            `}
            >
              {item.name}
            </a>
          ))}
          

            <a
              href="/resume.pdf"
              target="_blank"
              className=" px-5 py-2 rounded-full border border-amber-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.25)] transition-all duration-300">
              Resume
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-3xl"
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="fixed top-[72px] left-0 w-full bg-black/95 backdrop-blur-xl z-40 md:hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              {links.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="/resume.pdf"
                target="_blank"
                className="w-fit px-5 py-2 rounded-full border border-zinc-700"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}