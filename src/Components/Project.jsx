'use client'
import { getProjects } from "@/app/services/getProjects";
import React, { useEffect, useState } from "react";

const Project = () => {
  const [projects,setProjects]=useState([])
  const loadProjects = async () => {
    const data = await getProjects();
    setProjects(data);
  };
  useEffect(()=>{
    loadProjects()
  },[])
  console.log(projects)
  return (
    <div className="my-20">
      <div className="text-center">
        <h1 className="text-4xl text-secondary  py-5 font-semibold">
          Latest Projects
        </h1>
      </div>
    </div>
  );
};

export default Project;
