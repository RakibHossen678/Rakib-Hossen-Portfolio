import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const ProjectsCard = ({ item }) => {
  const { title, description, image, link, github } = item;

  return (
    <motion.div
      className="lg:group flex justify-center item-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -10 }}
    >
      <div className="max-w-sm md:max-w-md lg:max-w-lg lg:h-[460px] overflow-hidden rounded-2xl shadow-2xl relative backdrop-blur-lg bg-white/90 border border-white/20">
        {/* Glassmorphism overlay on hover */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
        
        <motion.div
          className="overflow-hidden relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            className="bg-cover lg:group-hover:scale-110 bg-center lg:h-64 transition-transform duration-300"
            src={image}
            height={356}
            width={400}
            alt={title}
          />
          {/* Gradient overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>

        <div className="p-6 text-start flex flex-col flex-grow relative z-20">
          <div className="flex-grow">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {title}
            </span>
            <p className="mt-2 text-sm text-gray-600">{description}</p>
          </div>
          <div className="my-4 flex justify-center space-x-14">
            <Link href={link} target="_blank">
              <motion.button
                className="relative overflow-hidden border-2 text-secondary font-medium border-primary rounded-full px-5 py-2 group/btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">Live Demo</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
            <Link href={github} target="_blank">
              <motion.button
                className="relative overflow-hidden border-2 text-secondary font-medium border-primary rounded-full px-6 py-2 group/btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">Github</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;
