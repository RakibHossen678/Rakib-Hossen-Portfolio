"use client";
import React from "react";
import AboutComponent from "./AboutComponent.jsx";
import BannerComponent from "./BannerComponent.jsx";
import SkillsComponent from "./SkillsComponent.jsx";
import ProjectComponent from "./ProjectComponent.jsx";
import ContactComponent from "./ContactComponent.jsx";

const HomePage = () => {
  return (
    <div>
      <div className="lg:w-9/12 w-11/12 mx-auto">
        <BannerComponent></BannerComponent>
        <div className="my-20">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="text-center"
          >
            <h1 className="text-4xl text-secondary  py-5 font-semibold">
              About <span className="text-primary"> Me</span>
            </h1>
          </div>
          <AboutComponent></AboutComponent>
        </div>
        <div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="text-center py-5 "
          >
            <h1 className="text-4xl text-secondary  font-semibold">Skills</h1>
            <p className="text-gray-600 pt-1 font-medium">My Technical Level</p>
          </div>
          <SkillsComponent></SkillsComponent>
        </div>
      </div>
      <div className="lg:w-10/12 mx-auto">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="text-center"
        >
          <h1 className="text-4xl text-secondary  py-5 font-semibold">
            Latest <span className="text-primary">Projects</span>
          </h1>
        </div>
        <ProjectComponent></ProjectComponent>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="text-center py-5 "
        >
          <h1 className="text-4xl text-secondary  font-semibold">
            Contact <span className="text-primary">Me</span>
          </h1>
          <p className="text-gray-600  font-medium pt-2">Get In Touch</p>
        </div>
        <ContactComponent></ContactComponent>
      </div>
    </div>
  );
};

export default HomePage;
