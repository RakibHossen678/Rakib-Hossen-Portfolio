import TechnicalComponent from "@/components/HomePage/TechnicalComponent";
import React from "react";

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
          <div className="text-center py-5">
            <h1 className="text-4xl text-primary font-semibold">Skills</h1>
            <p className="text-white pt-1 font-medium">
              The Skills That Turn Ideas Into Reality
            </p>
          </div>
        </div>
      </div>

      <div className="w-8/12 mx-auto">
        <TechnicalComponent />
      </div>
    </div>
  );
};

export default SkillPage;
