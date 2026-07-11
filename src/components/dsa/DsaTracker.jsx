import { motion } from "framer-motion";
import {
  FaCode,
  FaTrophy,
  FaLaptopCode,
} from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";


const leetcodeStats = {
  solved: 228,
  easy: 81,
  medium: 129,
  hard: 18,
};
const gfgStats = {
  basic: 3,
  easy: 9,
  medium: 33,
  hard: 3,
};
const codeforcesStats = {
  div1: 0,
  div2: 2,
  div3: 4,
  div4: 2,
};

const profiles = [
  {
    name: "LeetCode",
    value: "300+ Problems",
    link: "https://leetcode.com/u/vishal_kumar_ee_nitjsr/",
    icon: <FaCode size={30} />,
  },
  {
    name: "GeeksforGeeks",
    value: "DSA Practice",
    link: "https://www.geeksforgeeks.org/profile/vishalnitj54i6",
    icon: <SiGeeksforgeeks size={30} />,
  },

  {
    name: "Codeforces",
    value: "1152 max. Rating",
    link: "https://codeforces.com/profile/Vishal_MarcoX_83",
    icon: <FaTrophy size={30} />,
  },

  {
    name: "CodeChef",
    value: "1327 max. Rating",
    link: "https://www.codechef.com/users/marcox_vishu83",
    icon: <FaLaptopCode size={30} />,
  },
];

export default function DsaTracker() {
  return (
    <section id="dsa" className="section">

      <h2 className="text-5xl font-black mb-14">
        Problem Solving & Competitive Programming
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {profiles.map((item) => (
          <motion.a
            key={item.name}
            href={item.link}
            target="_blank"
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className=" glass glow-pill rounded-3xl p-8 flex flex-col gap-5">
            <div className="text-violet-400">
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold">
              {item.name}
            </h3>

            {item.name === "LeetCode" ? (
            <div className="w-full">

              <div className="relative mt-4">
                <div className="h-[3px] bg-zinc-700 rounded-full"></div>
                <div className="absolute left-0 top-[-4px] w-3 h-3 rounded-full bg-green-500"></div>
                <div className="absolute left-1/2 -translate-x-1/2 top-[-4px] w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="absolute right-0 top-[-4px] w-3 h-3 rounded-full bg-red-500"></div>

            </div>
            <div className="flex justify-between text-center mb-3">

                <div>
                <div className="w-3 h-3 rounded-full mx-auto mb-2"></div>
                <p className="text-sm">Easy</p>
                <p className="font-semibold">
                    {leetcodeStats.easy}
                </p>
                </div>

                <div>
                <div className="w-3 h-3 rounded-full  mx-auto mb-2"></div>
                <p className="text-sm">Medium</p>
                <p className="font-semibold">
                    {leetcodeStats.medium}
                </p>
                </div>

                <div>
                <div className="w-3 h-3 rounded-full  mx-auto mb-2"></div>
                <p className="text-sm">Hard</p>
                <p className="font-semibold">
                    {leetcodeStats.hard}
                </p>
                </div>

            </div>

              <div className="pt-2 border-t-2 border-t border-zinc-700">
                <p className="flex text-amber-300">
                  1645 Max Rating
                </p>
                </div>

            </div>

            ) : item.name === "GeeksforGeeks" ? (

            <div className="w-full space-y-3">

                <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-lime-300"></span>
                    <span>Basic</span>
                </div>
                <span>{gfgStats.basic}</span>
                </div>

                <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-green-500"></span>
                    <span>Easy</span>
                </div>
                <span>{gfgStats.easy}</span>
                </div>

                <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-yellow-500"></span>
                    <span>Medium</span>
                </div>
                <span>{gfgStats.medium}</span>
                </div>

                <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-orange-500"></span>
                    <span>Hard</span>
                </div>
                <span>{gfgStats.hard}</span>
                </div>

            </div>

            ) : item.name === "Codeforces" ? (

            <div className="w-full space-y-2">

                <div className="flex items-center justify-between">
                <span className="text-red-400">Div 1</span>
                <span className="text-amber-400" >{codeforcesStats.div1}</span>
                </div>

                <div className="flex items-center justify-between">
                <span className="text-orange-400">Div 2</span>
                <span className="text-amber-400" >{codeforcesStats.div2}</span>
                </div>

                <div className="flex items-center justify-between">
                <span className="text-yellow-400">Div 3</span>
                <span className="text-amber-400" >{codeforcesStats.div3}</span>
                </div>

                <div className="flex items-center justify-between">
                <span className="text-green-400">Div 4</span>
                <span className="text-amber-400" >{codeforcesStats.div4}</span>
                </div>

                <div className="pt-2 border-t-2 border-t border-zinc-700">
                <p className="flex text-amber-300">
                  1152 Max Rating
                </p>
                </div>

            </div>

            ) : (
            <p className="text-amber-300">
                {item.value}
            </p>
            )}
          </motion.a>
        ))}

      </div>
    </section>
  );
}