"use client";
import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolioData";

const About = () => {
  return (
    <div>
      <motion.div
        className="mx-auto max-w-3xl space-y-5"
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
          className="text-3xl font-semibold text-white"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
          }}
        >
          Hi, I’m <span className="text-primary">Rakib Hossen</span>
        </motion.h1>

        <motion.p
          className="text-base font-semibold uppercase tracking-[0.18em] text-primary"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
          }}
        >
          MERN Stack Developer at Zentexx
        </motion.p>

        <motion.p
          className="text-base leading-relaxed text-slate-300"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
          }}
        >
          I work across the full web stack to turn product ideas into reliable,
          production-ready applications. My focus is delivering intuitive user
          interfaces, clean APIs, and maintainable architecture using React,
          Next.js, Node.js, Express, and MongoDB.
        </motion.p>

        <motion.p
          className="text-base leading-relaxed text-slate-400"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
          }}
        >
          I value performance, readability, and long-term scalability. Whether
          collaborating with teams or building independently, I prioritize
          thoughtful UX and strong engineering standards.
        </motion.p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {portfolioData.principles.map((principle) => (
            <div
              key={principle}
              className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-3 text-sm text-slate-300"
            >
              {principle}
            </div>
          ))}
        </div>

        <motion.div
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          <motion.a
            href="resume.pdf"
            download
            className="primary-btn gap-2"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Download Resume</span>
            <MdOutlineFileDownload size={21} />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
