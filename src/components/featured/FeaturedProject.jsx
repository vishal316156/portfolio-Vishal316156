import { motion } from "framer-motion";

import dashboard from "../../assets/chatbot-dashboard.png";
import home from "../../assets/chatbot-home.png";
import chat from "../../assets/chatbot-chat.png";

export default function FeaturedProject() {
const features = [
"Gemini AI",
"JWT Auth",
"Chat History",
"Responsive UI",
"Dashboard",
"MongoDB",
"Theme Support",
"Modern UX",
];

return ( <section
   id="projects"
   className="section"
 >
{/* Heading */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >
    <p className="text-violet-400 mb-4 tracking-widest">
      FEATURED PROJECT
    </p>

    <h2 className="text-5xl font-black mb-6">
      AI Chat Platform
    </h2>

    <p className="max-w-3xl text-zinc-400 leading-8 mb-14">
      Full-stack AI platform powered by Gemini AI with
      authentication, persistent conversations, dashboard
      analytics, responsive design and modern user experience.
    </p>
  </motion.div>

  {/* Screenshots */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

  {[dashboard, home, chat].map((img, index) => (
    <motion.div
      key={index}
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
        rounded-2xl
        overflow-hidden
        hover:border-violet-500/50
      "
    >
      <img
        src={img}
        alt=""
        className="
          w-full
          aspect-video
          object-cover
        "
      />
    </motion.div>
  ))}

</div>

  {/* Divider */}

  <hr className="border-zinc-800 my-16" />

  {/* Features */}

  <div className="mb-8">
    <h3 className="text-2xl font-bold mb-4">
      Key Features
    </h3>

    <p className="text-zinc-400 max-w-3xl">
      Designed as a production-style AI platform featuring
      secure authentication, persistent chat history,
      analytics dashboard, theme switching and responsive UI.
    </p>
  </div>
{/* key features */}
  <div className="grid md:grid-cols-4 lg:grid-cols-8 gap-4">

    {features.map((item) => (
      <motion.div
        key={item}
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
            rounded-2xl
            p-4
            text-center
            text-sm
            cursor-pointer
            transition-all
            duration-200
            "
      >
        {item}
      </motion.div>
    ))}

  </div>

  {/* Buttons */}

  <div className="flex gap-5 mt-12 flex-wrap">

    <motion.a
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      href="https://ai-chatbot-lilac-seven.vercel.app/"
      target="_blank"
      className="
        px-8
        py-4
        rounded-2xl
        bg-gradient-to-r
        from-violet-600
        to-cyan-500
        font-medium
      "
    >
      Live Demo
    </motion.a>

    <motion.a
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      href="https://github.com/vishal316156/AiChatbot"
      target="_blank"
      className="
        px-8
        py-4
        rounded-2xl
        border
        border-zinc-700
        hover:border-violet-500
        transition-all
      "
    >
      GitHub
    </motion.a>

  </div>
</section>

);
}
