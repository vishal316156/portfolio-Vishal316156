import { motion } from "framer-motion";
import { FaMedal } from "react-icons/fa";

export default function HighlightsCard({ stats }) {
  const leetcodeTotal = stats.leetcode.easy + stats.leetcode.medium + stats.leetcode.hard;
  const gfgTotal = stats.gfg.basic + stats.gfg.easy + stats.gfg.medium + stats.gfg.hard;

  const totalProblems = leetcodeTotal + gfgTotal;

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="glass glow-pill rounded-3xl p-8 flex flex-col gap-5"
    >
      <div className="text-violet-400">
        <FaMedal size={30} />
      </div>

      <h3 className="text-2xl font-bold">
        Highlights
      </h3>

      <div className="space-y-4 flex-1">

        <div className="flex justify-between">
          <span className="text-zinc-400">
            DSA
          </span>

          <span className="font-semibold text-amber-300">
            {totalProblems}+
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-zinc-400">
            LeetCode
          </span>

          <span className="font-semibold">
            {leetcodeTotal}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-zinc-400">
            GeeksforGeeks
          </span>

          <span className="font-semibold">
            {gfgTotal}
          </span>
        </div>

        <div className="border-t border-zinc-700 pt-4">

          <div className="flex justify-between mb-2">
            <span className="text-zinc-400">
              LC Max Rating
            </span>

            <span className="text-green-400 font-semibold">
              {stats.leetcode.maxRating}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-zinc-400">
              CF Max Rating
            </span>

            <span className="text-orange-400 font-semibold">
              {stats.codeforces.maxRating}
            </span>
          </div>

        </div>

      </div>

      <div className="pt-3 border-t border-zinc-700">
        <p className="text-xs text-zinc-500">
          Last Updated{" "}
          {new Date(stats.lastUpdated).toLocaleDateString()}
        </p>
      </div>
    </motion.div>
  );
}