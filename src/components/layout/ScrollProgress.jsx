
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const ids = ["about", "projects", "dsa", "contact"];

    const updateActiveSection = () => {
      const marker = 180;
      let current = ids[0];

      for (const id of ids) {
        const section = document.getElementById(id);

        if (
          section &&
          section.getBoundingClientRect().top <= marker
        ) {
          current = id;
        }
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5
      ) {
        current = ids[ids.length - 1];
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });
    window.addEventListener("hashchange", updateActiveSection);
    window.addEventListener("resize", updateActiveSection);

    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return activeSection;
}

export default function ScrollProgress({ activeSection }) {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[100]"
        style={{
          scaleX: scrollYProgress,
          background: "linear-gradient(to right,#8b5cf6,#06b6d4)",
        }}
      />

      <div className="fixed top-3 right-4 z-[100] rounded-full border border-white/10 bg-black/80 px-3 py-1 text-xs text-zinc-300">
        {activeSection?.toUpperCase()}
      </div>
    </>
  );
}
