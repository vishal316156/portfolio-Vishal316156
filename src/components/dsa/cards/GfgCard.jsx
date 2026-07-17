import { motion } from "framer-motion";
import { SiGeeksforgeeks } from "react-icons/si";

export default function GfgCard({ stats }) {
  return (
    <motion.a
      href="https://www.geeksforgeeks.org/profile/vishalnitj54i6"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="glass glow-pill rounded-3xl p-8 flex flex-col gap-8"
    >
      <div className="text-violet-400">
        <SiGeeksforgeeks size={30} />
      </div>

      <h3 className="text-2xl font-bold">
        GeeksforGeeks
      </h3>

      <div className="w-full space-y-4">

  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded bg-lime-300"></span>
      <span>Basic</span>
    </div>

    <span>{stats.basic}</span>
  </div>

  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded bg-green-500"></span>
      <span>Easy</span>
    </div>

    <span>{stats.easy}</span>
  </div>

  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded bg-yellow-500"></span>
      <span>Medium</span>
    </div>

    <span>{stats.medium}</span>
  </div>

  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded bg-orange-500"></span>
      <span>Hard</span>
    </div>

    <span>{stats.hard}</span>
  </div>

  <div className="border-t border-zinc-700 pt-4">

    <div className="flex justify-between">
      <span className="text-zinc-400">
        Solved
      </span>

      <span className="text-amber-300 font-semibold">
        {stats.basic +
          stats.easy +
          stats.medium +
          stats.hard}
      </span>
    </div>

  </div>

</div>

    </motion.a>
  );
}