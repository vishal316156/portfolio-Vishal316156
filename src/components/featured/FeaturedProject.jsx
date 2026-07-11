import { motion } from "framer-motion";
import { projects } from "../../data/projects";

export default function FeaturedProject() {
  return (
    <section id="projects" className="section">
      {projects.map((project, projectIndex) => (
        <div key={project.id}>
          {/* Divider between projects only */}
          {projectIndex > 0 && (
            <hr className="border-zinc-800 my-16 md:my-20" />
          )}

          {/* Project Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-violet-400 mb-3 md:mb-4 tracking-widest text-sm md:text-base">
              {project.eyebrow}
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 md:mb-6">
              {project.title}
            </h2>

            <p className="max-w-3xl text-zinc-400 leading-7 md:leading-8 mb-10 md:mb-14">
              {project.description}
            </p>
          </motion.div>

          {/* Screenshots */}
          <div
            className={`
              grid grid-cols-1 gap-4 md:gap-5
              ${
                project.screenshots.length === 2
                  ? "md:grid-cols-2"
                  : "md:grid-cols-2 lg:grid-cols-3"
              }
            `}
          >
            {project.screenshots.map((screenshot, index) => (
              <motion.div
                key={`${project.id}-${index}`}
                whileHover={{
                  scale: 1.02,
                  y: -10,
                }}
                transition={{
                  type: "spring",
                  stiffness: 450,
                  damping: 18,
                }}
                className="
                  glass
                  rounded-xl
                  md:rounded-2xl
                  overflow-hidden
                  hover:border-violet-500/50
                "
              >
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  loading="lazy"
                  className="w-full aspect-video object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Features Description */}
          <div className="mt-10 md:mt-14 mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              Key Features
            </h3>

            <p className="text-zinc-400 max-w-3xl leading-7">
              {project.featuresDescription}
            </p>
          </div>

          {/* Features */}
          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-8
              gap-3
              md:gap-4
            "
          >
            {project.features.map((feature) => (
              <motion.div
                key={`${project.id}-${feature}`}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                }}
                transition={{
                  type: "spring",
                  stiffness: 450,
                  damping: 18,
                }}
                className="
                  glass
                  glow-pill
                  rounded-xl
                  md:rounded-2xl
                  p-3
                  md:p-4
                  text-center
                  text-xs
                  sm:text-sm
                  cursor-pointer
                  transition-all
                  duration-200
                "
              >
                {feature}
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-10 md:mt-12">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-8
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-violet-600
                to-cyan-500
                font-medium
                text-center
              "
            >
              Live Demo
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-8
                py-4
                rounded-2xl
                border
                border-zinc-700
                hover:border-violet-500
                transition-all
                text-center
              "
            >
              GitHub
            </motion.a>
          </div>
        </div>
      ))}
    </section>
  );
}