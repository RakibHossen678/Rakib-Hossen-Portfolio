"use client";
import { getProjects } from "@/app/services/getProjects";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadProjects = async () => {
    const { projects } = await getProjects();
    setProjects(projects);
    setLoading(false);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  return (
    <div className="px-1 py-2">
      <div className="mx-auto">
        {loading ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  <div className="h-64 w-full rounded-xl bg-slate-800" />
                  <div className="mt-4 space-y-2">
                    <div className="h-5 w-3/4 rounded-lg bg-slate-700" />
                    <div className="h-4 w-1/2 rounded-lg bg-slate-700" />
                  </div>
                </motion.div>
              ))}
          </div>
        ) : (
          <>
            <motion.div
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {projects.slice(0, visibleProjects).map((project, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.01, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden rounded-xl border border-slate-700 bg-slate-900/60"
                >
                  <ProjectsCard project={project} />
                </motion.div>
              ))}
            </motion.div>

            {visibleProjects < projects.length && (
              <div className="mt-10 flex justify-center">
                <button onClick={loadMoreProjects} className="primary-btn">
                  View More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;
