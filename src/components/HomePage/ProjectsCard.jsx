import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const ProjectsCard = ({ project }) => {
  const { title, description, image, link, github } = project;

  const ActionButton = ({ href, children, ariaLabel }) => (
    <Link href={href} target="_blank" aria-label={ariaLabel}>
      <motion.button
        className="rounded-lg border border-slate-700 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-200 transition hover:border-primary hover:text-white md:text-sm"
        whileHover={{ scale: 1.03 }}
      >
        {children}
      </motion.button>
    </Link>
  );

  return (
    <motion.div
      className="group flex items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="w-full overflow-hidden rounded-xl bg-slate-900/80 transition-shadow duration-300">
        <motion.div className="relative h-56 overflow-hidden border-b border-slate-700">
          <Image
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>

        <div className="flex flex-col px-5 pb-5 pt-4 text-start">
          <div className="flex-grow">
            <h3 className="line-clamp-2 text-xl font-semibold text-white">
              {title}
            </h3>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-300 md:text-base">
              {description}
            </p>
          </div>
          <div className="mt-6 flex items-center justify-between gap-3 whitespace-nowrap">
            <ActionButton href={link} ariaLabel={`Explore ${title}`}>
              Live Demo
            </ActionButton>

            <ActionButton href={github} ariaLabel={`View code for ${title}`}>
              Source Code
            </ActionButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;
