"use client";
import { getProjects } from "@/app/services/getProjects";
import React, { useEffect, useState } from "react";

import "./project.css";
import ProjectsCard from "./ProjectsCard";

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
  console.log(projects);
  return (
    <div className="my-20">
      <div className="text-center">
        <h1 className="text-4xl text-secondary  py-5 font-semibold">
          Latest <span className="text-primary">Projects</span>
        </h1>
        <div className="mt-10">
          {loading ? (
            <section class="bg-white dark:bg-gray-900">
              <div class="container px-6 py-10 mx-auto animate-pulse">
                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 lg:grid-cols-3">
                  <div class="w-full ">
                    <div class="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>

                    <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                    <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                  </div>

                  <div class="w-full ">
                    <div class="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>

                    <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                    <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                  </div>

                  <div class="w-full ">
                    <div class="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>

                    <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                    <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {projects?.map((item, idx) => (
                <ProjectsCard key={idx} item={item}></ProjectsCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
