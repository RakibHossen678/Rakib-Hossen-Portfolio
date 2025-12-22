"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Banner = () => {
  const [text, setText] = useState("");
  const fullText = "Front-End Web Developer";
  
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []); // Empty dependency array since fullText is constant

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
    <div className="min-h-screen flex justify-center items-center py-12 px-4 lg:px-12 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-0 -left-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute top-0 -right-4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5
          }}
        />
        <motion.div 
          className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>
      <motion.div
        className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between w-full max-w-screen-xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
      
        <motion.div
          className="text-center lg:text-left mb-10 lg:mb-0"
          variants={textVariants}
        >
          <motion.h1 
            className="text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            I am Rakib Hossen
          </motion.h1>
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6 min-h-[3rem]">
            {text}<span className="animate-pulse">|</span>
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
                <button className="relative bg-gradient-to-r from-primary to-secondary text-white py-3 px-8 rounded-full shadow-lg overflow-hidden group">
                  <span className="relative z-10">Hire Me</span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-secondary to-primary"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

      
        <motion.div
          className="mt-12 lg:mt-0 lg:ml-12 w-[300px] lg:w-[400px] h-auto relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {/* Animated glow effect */}
          <motion.div 
            className="absolute -inset-4 bg-gradient-to-r from-primary via-purple-500 to-secondary rounded-full blur-2xl opacity-50"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <div className="relative z-10 p-1 bg-gradient-to-r from-primary via-purple-500 to-secondary rounded-full">
            <Image
              alt="profile"
              src="/profile.png"
              width={400}
              height={400}
              className="rounded-full shadow-2xl transition-transform duration-300 bg-white p-2"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
