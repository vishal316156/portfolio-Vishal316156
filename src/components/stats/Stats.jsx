import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function Stats({ stats }) {
  const leetcodeRating = stats?.leetcode?.maxRating ?? 0;
  const codeforcesRating = stats?.codeforces?.maxRating ?? 0;


  const overviewStats = [
    {
      value: stats?.portfolio?.majorProjects ?? 0,
      suffix: "",
      label: "Major Projects",
    },
    {
      value: leetcodeRating,
      suffix: "",
      label: "Max LeetCode Rating",
    },
    {
      value: codeforcesRating,
      suffix: "",
      label: "Max Codeforces Rating",
    },
    {
      value: stats?.portfolio?.problemsSolved ?? 0,
      suffix: "+",
      label: "Problems Solved",
    },
    {
      value: stats?.portfolio?.technologies ?? 0,
      suffix: "+",
      label: "Technologies",
    },
  ];
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
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6"
      >
        {overviewStats.map((item, index) => (
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
            className="glass glow-pill rounded-3xl p-6 group cursor-pointer transition-all duration-500 hover:border-violet-500/50"
          >
            <h2 className="text-5xl font-black mb-3 gradient-text">
              <CountUp.default
              end={item.value}
              duration={0.5}
              separator=""
            />
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