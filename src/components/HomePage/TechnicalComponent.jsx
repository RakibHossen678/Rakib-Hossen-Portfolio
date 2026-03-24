"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaDatabase, FaLaptopCode } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { SiFramework } from "react-icons/si";
import { portfolioData } from "@/lib/portfolioData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { staggerContainer, fadeUp } from "@/lib/motionVariants";

const TechnicalComponent = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".skill-fill").forEach((bar) => {
        const target = Number(bar.dataset.level || 75);

        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: `${target}%`,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  const icons = {
    Frontend: <FaLaptopCode size={18} />,
    Backend: <SiFramework size={18} />,
    Database: <FaDatabase size={18} />,
    Workflow: <MdOutlineDesignServices size={18} />,
  };

  const proficiencyByGroup = {
    Frontend: 93,
    Backend: 89,
    Database: 86,
    Workflow: 88,
  };

  return (
    <section ref={skillsRef} className="px-1">
      <motion.div
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {portfolioData.skillGroups.map((group) => (
          <motion.div
            key={group.title}
            variants={fadeUp}
            className="rounded-xl border border-slate-700 bg-slate-900/70 p-5"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-4 flex items-center gap-2 text-primary">
              <span className="rounded-md bg-slate-800 p-2">
                {icons[group.title]}
              </span>
              <h3 className="text-lg font-semibold text-white">
                {group.title}
              </h3>
            </div>

            

            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-slate-700 bg-slate-800/60 px-2.5 py-1 text-xs font-medium text-slate-200 md:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechnicalComponent;
