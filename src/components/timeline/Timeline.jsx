import { motion } from "framer-motion";
import { timeline } from "../../data/timeline";

export default function Timeline() {
  return (
    <section className="section">

      <div className="mb-14">

        <p className="text-violet-400 mb-4">
          JOURNEY
        </p>

        <h2 className="text-5xl font-black">
          Timeline
        </h2>

      </div>

      <div className="relative">

        {/* Center Line */}

        <div
          className="
          absolute
          left-1/2
          top-0
          bottom-0
          w-[2px]
          bg-zinc-800
          hidden md:block
          "
        />

        {timeline.map((item, index) => (

          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -50 : 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
            }}
            className={`
              relative
              md:w-1/2
              mb-10

              ${
                index % 2 === 0
                  ? "md:pr-10"
                  : "md:ml-auto md:pl-10"
              }
            `}
          >

            {/* Dot */}

            <div
              className="
              hidden md:block
              absolute
              top-6
              w-4
              h-4
              rounded-full
              bg-violet-500
              shadow-[0_0_20px_rgba(139,92,246,.7)]
              "

              style={{
                left:
                  index % 2 === 0
                    ? "calc(100% - 8px)"
                    : "-8px",
              }}
            />

            <div
              className="
              glass
              glow-pill
              rounded-3xl
              p-6
              "
            >

              <p className="text-violet-400 mb-2">
                {item.year}
              </p>

              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}