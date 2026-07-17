import {
  ResponsiveContainer,LineChart, Line, XAxis, YAxis, Tooltip, LabelList,
} from "recharts";
export default function CodeforcesGraph({ history = [] }) {
    const maxRating = Math.max(...history.map((item) => item.rating));

const graphData = history.map((item, index) => ({
  ...item,
  label:
    item.rating === maxRating ||
    index === history.length - 1
      ? item.rating
      : "",
}));
  if (!Array.isArray(history) || history.length === 0) {
    return (
      <div className="h-32 rounded-xl bg-zinc-900/60 border border-zinc-700 flex items-center justify-center text-zinc-500 text-sm">
        No Rating History
      </div>
    );
  }

  return (
    <div className="h-40 w-full mt-3">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={graphData}>
          <XAxis dataKey="contestName" hide />

          <YAxis hide domain={["auto", "auto"]} />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="rating"
            stroke="#8b5cf6"
            strokeWidth={3}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
            >
            <LabelList
  dataKey="label"
  position="left"
  offset={8}
  style={{
    fill: "#facc15",
    fontSize: 14,
    fontWeight: 800,
  }}
/>
            </Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}