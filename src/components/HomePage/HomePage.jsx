"use client";
import React from "react";
import AboutComponent from "./AboutComponent.jsx";
import BannerComponent from "./BannerComponent.jsx";
import ProjectComponent from "./ProjectComponent.jsx";
import ContactComponent from "./ContactComponent.jsx";
import TechnicalComponent from "./TechnicalComponent.jsx";

const HomePage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Effect */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-purple-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute inset-0 -z-20 m-auto h-[310px] w-[310px] rounded-full bg-gray-400 opacity-20 blur-[100px]"></div>
      </div>

      <div className="lg:w-9/12 w-11/12 mx-auto relative z-10">
        {/* Banner Section */}
        <BannerComponent />

        {/* About Section */}
        <div className="my-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl text-secondary font-semibold">
              About <span className="text-primary">Me</span>
            </h1>
          </div>
          <AboutComponent />
        </div>

        {/* Skills Section */}
        <div className="my-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-2 text-gray-800">
              My Skills
            </h2>
            <p className="text-gray-600 text-lg font-medium mt-2">
              My Technical Level
            </p>
          </div>
          <TechnicalComponent />
        </div>

        {/* Projects Section */}
        <div className="my-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl text-secondary font-semibold">
              Latest <span className="text-primary">Projects</span>
            </h1>
          </div>
          <ProjectComponent />
        </div>

        {/* Contact Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl text-secondary font-semibold">
              Contact <span className="text-primary">Me</span>
            </h1>
            <p className="text-gray-600 text-lg font-medium mt-2">
              Get In Touch
            </p>
          </div>
          <ContactComponent />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
