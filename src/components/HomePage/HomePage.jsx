"use client";
import React, { useEffect, useRef } from "react";
import AboutComponent from "./AboutComponent.jsx";
import BannerComponent from "./BannerComponent.jsx";
import ContactComponent from "./ContactComponent.jsx";
import TechnicalComponent from "./TechnicalComponent.jsx";
import ExperienceComponent from "./ExperienceComponent.jsx";
import FeaturedProjectsComponent from "./FeaturedProjectsComponent.jsx";
import EducationComponent from "./EducationComponent.jsx";
import SectionHeader from "@/components/shared/SectionHeader";
import MotionSection from "@/components/animations/MotionSection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HomePage = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal-section").forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 26 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 84%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="home" ref={pageRef} className="relative min-h-screen">
      <div className="mx-auto w-full max-w-6xl space-y-14 md:space-y-16">
        <section id="hero" className="scroll-mt-24">
          <BannerComponent />
        </section>

        <MotionSection
          id="skills"
          className="reveal-section section-shell scroll-mt-24 px-6 py-12 md:px-10"
        >
          <SectionHeader
            eyebrow="Technical Depth"
            title="Skills &"
            accent="Stack"
            description="Core technologies and engineering capabilities I use to build scalable web products."
          />
          <TechnicalComponent />
        </MotionSection>

        <MotionSection
          id="experience"
          className="reveal-section section-shell scroll-mt-24 px-6 py-12 md:px-10"
        >
          <SectionHeader
            eyebrow="Professional Journey"
            title="Experience &"
            accent="Execution"
            description="How I collaborate, ship features, and contribute to production-ready applications."
          />
          <ExperienceComponent />
        </MotionSection>

        <MotionSection
          id="education"
          className="reveal-section section-shell scroll-mt-24 px-6 py-12 md:px-10"
        >
          <SectionHeader
            eyebrow="Academic Journey"
            title="Education"
            accent="Background"
            description="My academic path from school to higher education in computer science and engineering."
          />
          <EducationComponent />
        </MotionSection>

        <MotionSection
          id="projects"
          className="reveal-section section-shell scroll-mt-24 px-6 py-12 md:px-10"
        >
          <SectionHeader
            eyebrow="Proof of Work"
            title="Featured"
            accent="Projects"
            description="Selected projects that demonstrate product thinking, technical depth, and user-focused execution."
          />
          <FeaturedProjectsComponent />
        </MotionSection>

        <MotionSection
          id="about"
          className="reveal-section section-shell scroll-mt-24 px-6 py-12 md:px-10"
        >
          <SectionHeader
            eyebrow="Personal Profile"
            title="About"
            accent="Me"
            description="A concise overview of my development approach, engineering standards, and goals."
          />
          <AboutComponent />
        </MotionSection>

        <MotionSection
          id="contact"
          className="reveal-section section-shell scroll-mt-24 px-6 py-12 md:px-10"
        >
          <SectionHeader
            eyebrow="Next Step"
            title="Let’s Build"
            accent="Together"
            description="Share your project scope and goals. I’ll respond with a practical, product-focused approach."
          />
          <ContactComponent />
        </MotionSection>
      </div>
    </div>
  );
};

export default HomePage;
