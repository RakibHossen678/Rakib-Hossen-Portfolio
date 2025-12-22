"use client";
import Image from "next/image";
import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "JavaScript", level: 88 },
    { name: "Tailwind CSS", level: 92 },
    { name: "MongoDB", level: 75 },
    { name: "Express.js", level: 80 },
  ];

  return (
    <div className="my-20 px-4 lg:px-12 ">
      
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-10">
        <motion.div
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          className="lg:w-[40%] rounded-2xl overflow-hidden shadow-2xl transition-transform transform hover:scale-105 hover:shadow-2xl relative"
        >
          {/* Glassmorphism border effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
          <div className="relative z-10 p-1 bg-gradient-to-br from-primary via-purple-500 to-secondary rounded-2xl">
            <Image
              className="w-full h-auto object-cover rounded-2xl"
              quality={100}
              loading="lazy"
              width={500}
              height={350}
              alt="about"
              src="/about.png"
            />
          </div>
        </motion.div>

        <motion.div
          className="lg:w-[55%] space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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

          {/* Animated skill progress bars */}
          <motion.div
            className="space-y-4 mt-6"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.5 } },
            }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Skills</h3>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="space-y-2"
              >
                <div className="flex justify-between text-sm font-medium text-gray-700">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden relative">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative overflow-hidden"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/30"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="resume.pdf"
              download
              className="relative flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-medium shadow-lg overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 8 }}
            >
              <span className="relative z-10">Download Resume</span>
              <MdOutlineFileDownload size={25} className="relative z-10" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-secondary to-primary"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
