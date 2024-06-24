import ProjectComponent from "@/components/ProjectComponent";
import React from "react";


const page = () => {
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
        <ProjectComponent></ProjectComponent>
      </div>
    </div>
  );
};

export default page;
