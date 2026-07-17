
import LeetCodeCard from "./cards/LeetCodeCard";
import GfgCard from "./cards/GfgCard";
import CodeforcesCard from "./cards/CodeforcesCard";
import HighlightsCard from "./cards/HighlightsCard";

export default function DsaTracker({ stats }) {


if (!stats) {
  return (
    <section id="dsa" className="section">
      <h2 className="text-5xl font-black mb-14">
        Problem Solving & Competitive Programming
      </h2>

      <p className="text-zinc-400">
        Loading Competitive Programming Stats...
      </p>
    </section>
  );
}
const updated = new Date(stats.lastUpdated).toLocaleString("en-IN", {
  dateStyle: "medium",
  timeStyle: "short",
});
  return (
    <section id="dsa" className="section">
      <h2 className="text-5xl font-black mb-12">
        Problem Solving & Competitive Programming
      </h2>
      <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 mb-2">
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span className="text-sm font-medium text-emerald-300">
            Live API Synced • Updated {updated}
        </span>
    </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        <LeetCodeCard stats={stats.leetcode} />
        <CodeforcesCard stats={stats.codeforces} />
        <GfgCard stats={stats.gfg} />
        <HighlightsCard stats={stats} />

      </div>
      
    </section>
  );
}