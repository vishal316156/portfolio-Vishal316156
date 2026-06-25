import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[100]"
      style={{
        scaleX: scrollYProgress,
        background:
          "linear-gradient(to right,#8b5cf6,#06b6d4)",
      }}
    />
  );
}