"use client";
import { getProjects } from "@/app/services/getProjects";
import React, { useEffect, useState } from "react";
import ProjectsCard from "./ProjectsCard";
import { motion } from "framer-motion";

const Project = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const loadProjects = async () => {
    const { projects } = await getProjects();
    setProjects(projects);
    setLoading(false);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <div className="my-20 px-4 lg:px-0">
      <div className="container mx-auto">
        {loading ? (
          <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array(6)
              .fill(0)
              .map((_, idx) => (
                <motion.div
                  key={idx}
                  className="w-full animate-pulse"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="w-full h-64 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg shadow-md"></div>
                  <div className="mt-4 space-y-2">
                    <div className="w-3/4 h-6 bg-gray-200 rounded-lg"></div>
                    <div className="w-1/2 h-4 bg-gray-200 rounded-lg"></div>
                  </div>
                </motion.div>
              ))}
          </section>
        ) : (
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {projects?.slice(0, 6).map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, translateY: -5 }}
                className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 bg-white hover:shadow-2xl"
              >
                <ProjectsCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Project;
