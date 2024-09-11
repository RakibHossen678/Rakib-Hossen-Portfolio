"use client";
import React from "react";
import AboutComponent from "./AboutComponent.jsx";
import BannerComponent from "./BannerComponent.jsx";
import ProjectComponent from "./ProjectComponent.jsx";
import ContactComponent from "./ContactComponent.jsx";
import SkillComponent from "./SkillComponent.jsx";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="lg:w-9/12 w-11/12 mx-auto">
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
          <h2 className="text-4xl font-extrabold mb-2 text-gray-800">My Skills</h2>
            <p className="text-gray-600 text-lg font-medium mt-2">
              My Technical Level
            </p>
          </div>
          <SkillComponent />
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
        <div className="my-20">
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
