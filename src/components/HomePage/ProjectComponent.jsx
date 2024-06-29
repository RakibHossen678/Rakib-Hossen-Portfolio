"use client";
import { getProjects } from "@/app/services/getProjects";
import React, { useEffect, useState } from "react";
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
      <div className="">
        <div className="mt-10">
          {loading ? (
            <section className="bg-white ">
              <div className="container px-6 py-10 mx-auto animate-pulse">
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="w-full ">
                    <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 "></div>

                    <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg "></h1>
                    <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg "></p>
                  </div>

                  <div className="w-full ">
                    <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 "></div>

                    <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg "></h1>
                    <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg "></p>
                  </div>

                  <div className="w-full ">
                    <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 "></div>

                    <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg "></h1>
                    <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg "></p>
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
