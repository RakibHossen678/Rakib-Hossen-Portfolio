import React from "react";
import SkillsComponent from "@/components/HomePage/SkillsComponent";
const SkillPage = () => {
  return (
    <div>
      <div
        className="hero lg:min-h-[300px]"
        style={{
          backgroundImage: "url('/cover.png')",
        }}
      >
        <div className="hero-content text-neutral-content text-center">
          <div className="text-center py-5 ">
            <h1 className="text-4xl text-primary  font--semibold">Skills</h1>
            <p className="text-white pt-1 font-medium">My Technical Level</p>
          </div>
        </div>
      </div>

      <div className="w-8/12 mx-auto">
        <SkillsComponent></SkillsComponent>
      </div>
    </div>
  );
};

export default SkillPage;
