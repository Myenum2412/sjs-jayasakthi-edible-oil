"use client";
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll, MotionValue } from "motion/react";
import { useRef, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ProjectData {
  title: string;
  description: string;
  link: string;
  color: string;
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card = ({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 max-md:h-[90vh] max-md:w-full"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col  relative -top-[25%] h-[450px] w-[70%] rounded-md lg:p-10 p-5 origin-top  max-md:w-[90%]`}
      >
        <h2 className="text-2xl text-center font-semibold">{title}</h2>
        <div className={`flex max-md:flex-col max-md:items-center max-md:justify-between max-md:gap-5 h-full mt-5 gap-10 max-md:h-1/2`}>
          <div className={`w-[40%] max-md:w-full relative top-[10%]`}>
            <p className="text-[12px] md:text-base">{description}</p>
            
          </div>

          <div
            className={`relative w-[60%] max-md:w-full  h-full rounded-lg overflow-hidden max-md:top-[10%] max-md:min-h-[180px]`}
          >
            <motion.div
              className={`w-full h-full`}
              style={{ scale: imageScale }}
            >
              <img
                src={url}
                alt="image"
                className="absolute inset-0 w-full h-full  object-cover "
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ComponentRootProps {
  projects: ProjectData[];
}

const StackingCards = forwardRef<HTMLElement, ComponentRootProps>(
  ({ projects }, ref) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start start", "end end"],
    });

    return (
      <ReactLenis root>
        <main ref={container}>
          <motion.section initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} whileInView={{ opacity: 1, y: 0 }} className="text-white w-full bg-gradient-to-t from-primary to-secondary rounded-3xl">
            {projects.map((project, i) => {
              const targetScale = 1 - (projects.length - i) * 0.05;
              return (
                <Card
                  key={`p_${i}`}
                  i={i}
                  url={project.link}
                  title={project.title}
                  color={project.color}
                  description={project.description}
                  progress={scrollYProgress}
                  range={[i * 0.25, 1]}
                  targetScale={targetScale}
                />
              );
            })}
          </motion.section>
        </main>
      </ReactLenis>
    );
  }
);

StackingCards.displayName = "StackingCards";

export default StackingCards;
