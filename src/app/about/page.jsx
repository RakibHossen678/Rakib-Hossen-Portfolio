import React from "react";
import About from "@/components/HomePage/AboutComponent";
import MotionSection from "@/components/animations/MotionSection";

const AboutPage = () => {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-8 md:px-8 lg:px-12">
      <MotionSection className="section-shell px-6 py-12 text-center md:px-10">
        <h1 className="text-4xl font-semibold text-white md:text-5xl">
          About <span className="text-primary">Me</span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300">
          Dedicated to building clean, scalable, and meaningful digital
          products.
        </p>
      </MotionSection>

      <MotionSection
        className="section-shell mt-8 px-6 py-10 md:px-10"
        amount={0.15}
      >
        <About />
      </MotionSection>
    </div>
  );
};

export default AboutPage;
