"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Banner = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
      },
    },
  };

  const textVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, duration: 0.8 },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  return (
    <div className="min-h-screen flex justify-center items-center py-12 px-4 lg:px-12 ">
      <motion.div
        className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between w-full max-w-screen-xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
      
        <motion.div
          className="text-center lg:text-left mb-10 lg:mb-0"
          variants={textVariants}
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold text-primary mb-4">
            I am Rakib Hossen
          </h1>
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6">
            Front-End Web Developer
          </h2>
          <p className="text-lg lg:text-xl text-gray-800 max-w-lg mb-8 leading-relaxed">
            Passionate about crafting beautiful and functional websites. I focus
            on delivering modern, efficient, and maintainable code, making me a
            valuable asset to any project.
          </p>
          <div className="flex space-x-6 justify-center lg:justify-start mb-8">
            <motion.div
              variants={iconVariants}
              whileHover={{ scale: 1.2, rotate: 15 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link
                href="https://www.linkedin.com/in/hossen-rakib/"
                target="_blank"
              >
                <FaLinkedin
                  className="text-primary hover:text-secondary transition-colors duration-300"
                  size={36}
                />
              </Link>
            </motion.div>
            <motion.div
              variants={iconVariants}
              whileHover={{ scale: 1.2, rotate: 15 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link href="https://github.com/RakibHossen678" target="_blank">
                <FaGithub
                  className="text-primary hover:text-secondary transition-colors duration-300"
                  size={36}
                />
              </Link>
            </motion.div>
            <motion.div
              variants={iconVariants}
              whileHover={{ scale: 1.2, rotate: 15 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link
                href="https://www.facebook.com/profile.php?id=100056015882794"
                target="_blank"
              >
                <FaFacebook
                  className="text-primary hover:text-secondary transition-colors duration-300"
                  size={36}
                />
              </Link>
            </motion.div>
          </div>
          <div className="flex justify-center lg:justify-start">
            <motion.div
              whileHover={{
                scale: 1.1,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/contact">
                <button className="bg-gradient-to-r from-primary to-secondary text-white py-3 px-6 rounded-lg shadow-md hover:from-secondary hover:to-primary transition-colors duration-300">
                  Hire Me
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

      
        <motion.div
          className="mt-12 lg:mt-0 lg:ml-12 w-[300px] lg:w-[400px] h-auto"
          whileHover={{ scale: 1.1, rotate: 3 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Image
            alt="profile"
            src="/profile.png"
            width={400}
            height={400}
            className="rounded-lg shadow-2xl transition-transform duration-300"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
