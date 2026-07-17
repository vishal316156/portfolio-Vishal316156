import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";
import CodeforcesGraph from "./CodeforcesGraph";
const USERNAME = import.meta.env.VITE_CODEFORCES_HANDLE;

export default function CodeforcesCard({ stats }) {
  return (
    <motion.a
      href={`https://codeforces.com/profile/${USERNAME}`}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="glass glow-pill rounded-3xl p-8 flex flex-col gap-5"
    >

      <div className="text-violet-400">
        <FaTrophy size={30} />
      </div>


      <h3 className="text-2xl font-bold">
        Codeforces
      </h3>


      <CodeforcesGraph history={stats.history} />


      <div className="grid grid-cols-3 gap-3 pt-2 border-t border-zinc-700">

        <div className="text-center">
          <p className="text-xl font-bold text-amber-300">
            {stats.currentRating}
          </p>
          <p className="text-xs text-zinc-400 mt-1">
            Current
          </p>
        </div>

        <div className="text-center">
          <p className="text-xl font-bold text-green-400">
            {stats.maxRating}
          </p>
          <p className="text-xs text-zinc-400 mt-1">
            Max
          </p>
        </div>

        <div className="text-center">
          <p className="text-lg font-bold text-green-400 capitalize">
            {stats.rank}
          </p>
          <p className="text-xs text-zinc-400 mt-1">
            Rank
          </p>
        </div>

      </div>
    </motion.a>
  );
}