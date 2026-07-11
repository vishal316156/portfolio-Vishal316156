import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    value: 2,
    suffix: "",
    label: "Major Projects",
  },
  {
    value: 1645,
    suffix: "",
    label: "Max Leetcode Rating",
  },
  {
    value: 1152,
    suffix: "",
    label: "Max Codeforces Rating",
  },
  {
    value: 400,
    suffix: "+",
    label: "Problems Solved across different platforms",
  },
  
  {
    value: 10,
    suffix: "+",
    label: "Technologies",
  },
];

export default function Stats() {
  return (
    <section className="section">

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="grid md:grid-cols-4 gap-6"
      >
        {stats.map((item, index) => (
          <motion.div
            key={index}
            variants={{
                hidden: {
                opacity: 0,
                y: 40,
                },
                visible: {
                opacity: 1,
                y: 0,
                },
            }}
            whileHover={{
                y: -12,
                scale: 1.04,
            }}
            className=" glass glow-pill rounded-3xl p-6 group cursor-pointer transition-all duration-500
                hover:border-violet-500/50
            "
            >
            <h2 className="text-5xl font-black mb-3 gradient-text">
            {item.value}
            {item.suffix}
            </h2>

            <p className="text-zinc-400 font-medium">
              {item.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}