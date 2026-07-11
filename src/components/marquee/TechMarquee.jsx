import { useEffect, useRef } from "react";

const techs = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Git",
  "GitHub",
  "Vercel",
];

export default function TechMarquee() {
  const itemsRef = useRef([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const rx = isMobile ? 150 : 430;
    const ry = isMobile ? 45 : 90;

    let angle = 0;
    let frame;

    function animate() {
      angle += 0.0035;

      itemsRef.current.forEach((item, index) => {
        if (!item) return;

        const theta =
          angle +
          (index * Math.PI * 2) / techs.length;

        const x = rx * Math.cos(theta);
        const y = ry * Math.sin(theta);

        const depth = (y + ry) / (2 * ry);
      const scale = 0.55 + depth * 0.55;
      const opacity = 0.15 + depth * 0.85;
      const blur = (1 - depth) * 3;

        const rotate = (x / rx) * 18;

      item.style.transform = `
        translate(-50%, -50%)
        translate(${x}px, ${y}px)
        rotate(${rotate}deg)
        scale(${scale})
      `;

        item.style.opacity = opacity;

        item.style.zIndex = Math.floor(depth * 100);
      });

      frame = requestAnimationFrame(animate);
    }

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="py-20">

      <div className="text-center mb-16">

        <p className="text-violet-400 mb-3">
          TECH STACK
        </p>

        <h2 className="text-5xl font-black">
          Technologies I Use
        </h2>

      </div>

      <div
        className="relative h-[360px] max-w-6xl mx-auto overflow-hidden">



        <div
          className=" absolute left-1/2 top-1/2 w-[300px]
          md:w-[860px] h-[90px] md:h-[180px]
            rounded-full border
            border-violet-500/40 shadow-[0_0_80px_rgba(139,92,246,0.35)] -translate-x-1/2 -translate-y-1/2
          "
        />
        <div
          className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full
        bg-violet-600/10 blur-[120px] pointer-events-none"/>

        {techs.map((tech, index) => (
          <div
            key={tech}
            ref={(el) => (itemsRef.current[index] = el)}
            className="
              absolute left-1/2 top-1/2 glow-pill
              backdrop-blur-xl border border-violet-500/20
              px-6 py-3 rounded-full whitespace-nowrap transition-none">
            {tech}
          </div>
        ))}

      </div>

    </section>
  );
}