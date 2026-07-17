import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
const USERNAME = import.meta.env.VITE_LEETCODE_USERNAME;

export default function LeetCodeCard({ stats }) {
    if (!stats) {
      return (
          <div className="glass-card p-6">
              Loading...
          </div>
      );
    }
  return (
    <motion.a
      href={`https://leetcode.com/u/${USERNAME}/`}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="glass glow-pill rounded-3xl p-8 flex flex-col gap-8"
    >
      <div className="text-violet-400">
        <FaCode size={30} />
      </div>

      <h3 className="text-2xl font-bold">
        LeetCode
      </h3>

      <div className="w-full space-y-4">

  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-green-500"></span>
      <span>Easy</span>
    </div>

    <span className="font-semibold">
      {stats.easy}
    </span>
  </div>

  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
      <span>Medium</span>
    </div>

    <span className="font-semibold">
      {stats.medium}
    </span>
  </div>

  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-red-500"></span>
      <span>Hard</span>
    </div>

    <span className="font-semibold">
      {stats.hard}
    </span>
  </div>

  <div className="border-t border-zinc-700 pt-4">

    <div className="flex justify-between mb-3">
      <span className="text-zinc-400">
        Solved
      </span>

      <span className="text-amber-300 font-semibold">
        {stats.easy + stats.medium + stats.hard}
      </span>
    </div>

    <div className="flex justify-between">
      <span className="text-zinc-400">
        Max Rating
      </span>

      <span className="text-green-400 font-semibold">
        {stats.maxRating}
      </span>
    </div>

  </div>

</div>
    </motion.a>
  );
}