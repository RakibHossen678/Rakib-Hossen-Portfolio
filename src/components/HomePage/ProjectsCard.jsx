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
      whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)" }}
    >
      <div className="max-w-sm md:max-w-md lg:max-w-lg lg:h-[460px] overflow-hidden bg-white rounded-lg shadow-md">
        <motion.div
          className="overflow-hidden"
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
        </motion.div>

        <div className="p-6 text-start flex flex-col flex-grow">
          <div className="flex-grow">
            <span className="text-2xl font-bold text-secondary">{title}</span>
            <p className="mt-2 text-sm text-gray-600">{description}</p>
          </div>
          <div className="my-4 flex justify-center space-x-14">
            <Link href={link} target="_blank">
              <motion.button
                className="border-2 text-secondary font-medium border-primary rounded-full px-5 py-2 hover:bg-primary hover:border-none hover:text-white transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Live Demo
              </motion.button>
            </Link>
            <Link href={github} target="_blank">
              <motion.button
                className="border-2 text-secondary font-medium border-primary rounded-full px-6 py-2 hover:bg-primary hover:border-none hover:text-white transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Github
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;
