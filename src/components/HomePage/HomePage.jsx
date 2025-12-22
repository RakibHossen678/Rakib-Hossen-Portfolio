"use client";
import React from "react";
import AboutComponent from "./AboutComponent.jsx";
import BannerComponent from "./BannerComponent.jsx";
import ProjectComponent from "./ProjectComponent.jsx";
import ContactComponent from "./ContactComponent.jsx";
import TechnicalComponent from "./TechnicalComponent.jsx";
import { motion } from "framer-motion";

const HomePage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-purple-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute inset-0 -z-20 m-auto h-[310px] w-[310px] rounded-full bg-gray-400 opacity-20 blur-[100px]"></div>
      </div>

      <div className="lg:w-9/12 w-11/12 mx-auto relative z-10">
        {/* Banner Section */}
        <BannerComponent />

        {/* About Section */}
        <motion.div 
          className="my-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl lg:text-5xl font-semibold">
                About <span className="gradient-text">Me</span>
              </h1>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.div>
          </div>
          <AboutComponent />
        </motion.div>

        {/* Skills Section */}
        <motion.div 
          className="my-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-extrabold mb-2 text-gray-800">
                My <span className="gradient-text">Skills</span>
              </h2>
              <p className="text-gray-600 text-lg font-medium mt-2">
                My Technical Level
              </p>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.div>
          </div>
          <TechnicalComponent />
        </motion.div>

        {/* Projects Section */}
        <motion.div 
          className="my-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl lg:text-5xl font-semibold">
                Latest <span className="gradient-text">Projects</span>
              </h1>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.div>
          </div>
          <ProjectComponent />
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl lg:text-5xl font-semibold">
                Contact <span className="gradient-text">Me</span>
              </h1>
              <p className="text-gray-600 text-lg font-medium mt-2">
                Get In Touch
              </p>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.div>
          </div>
          <ContactComponent />
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
