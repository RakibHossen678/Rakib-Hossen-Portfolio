"use client";
import Image from "next/image";
import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="my-20 px-4 lg:px-12 ">
      
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-10">
        <motion.div
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          className="lg:w-[40%] rounded-lg overflow-hidden shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
        >
          <Image
            className="w-full h-auto object-cover"
            quality={100}
            loading="lazy"
            width={500}
            height={350}
            alt="about"
            src="/about.png"
          />
        </motion.div>

        <motion.div
          className="lg:w-[55%] space-y-6"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
              },
            },
            hidden: { opacity: 0 },
          }}
        >
          <motion.h1
            className="text-3xl font-bold text-gray-800"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
          >
            Hi, I’m <span className="text-primary">Rakib Hossen</span>
          </motion.h1>

          <motion.p
            className="text-xl font-semibold text-primary"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
          >
            Front-End Web Developer
          </motion.p>

          <motion.p
            className="text-base text-gray-700 leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
          >
            I specialize in React.js and have a passion for building responsive,
            user-friendly websites. My expertise spans HTML, CSS, JavaScript,
            React.js, and Next.js, with MongoDB for the back end and Express.js
            for efficient server-side applications. To enhance my designs, I use
            UI component libraries like Shadcn UI, Daisy UI, and Bootstrap,
            ensuring a visually appealing and modern user experience.
            <br />I am excited to contribute to your projects with clean,
            maintainable code and a strong problem-solving mindset. Whether you
            are looking to create dynamic web applications or improve an
            existing website, I am ready to bring my skills and expertise to
            help your project succeed.
          </motion.p>

          <motion.div
            className="flex justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="resume.pdf"
              download
              className="flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-medium hover:scale-105 hover:bg-gradient-to-l hover:from-secondary hover:to-primary transition-all duration-300 shadow-lg hover:shadow-2xl"
              whileHover={{ scale: 1.1, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 8 }}
            >
              <span>Download Resume</span>
              <MdOutlineFileDownload size={25} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
