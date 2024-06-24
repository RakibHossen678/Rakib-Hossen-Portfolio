"use client";
import { getProjects } from "@/app/services/getProjects";
import ProjectsCard from "@/components/ProjectsCard";
import React, { useEffect, useState } from "react";


const page = () => {
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
    <div>
      <div
        className="hero min-h-[300px]"
        style={{
          backgroundImage: "url('/cover.png')",
        }}
      >
        <div className="hero-content text-neutral-content text-center">
          <div className="text-center text-white">
            <h1 className="text-4xl   py-5 font-semibold">
              Latest <span className="text-primary">Projects</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="w-10/12 mx-auto">
        <div className="my-20">
          <div className="">
            <div className="mt-10">
              {loading ? (
                <section className="bg-white dark:bg-gray-900">
                  <div className="container px-6 py-10 mx-auto animate-pulse">
                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 lg:grid-cols-3">
                      <div className="w-full ">
                        <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>

                        <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                      </div>

                      <div className="w-full ">
                        <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>

                        <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                      </div>

                      <div className="w-full ">
                        <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>

                        <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
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
      </div>
    </div>
  );
};

export default page;
