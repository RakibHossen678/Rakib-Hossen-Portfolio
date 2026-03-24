"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "@/lib/portfolioData";
import { gsap } from "gsap";

const Banner = () => {
  const { hero } = portfolioData;
  const sectionRef = useRef(null);
  const imageCardRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-animate",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        imageCardRef.current,
        { y: 26, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.95,
          delay: 0.2,
          ease: "power3.out",
        },
      );

      gsap.to(glowRef.current, {
        scale: 1.07,
        duration: 3.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.35,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="section-shell relative overflow-hidden px-6 py-10 md:px-10 lg:px-12 lg:py-12"
    >
      <motion.div
        className="grid w-full items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="max-w-2xl text-left" variants={textVariants}>
          <p className="hero-animate mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-primary md:text-sm">
            {hero.role}
          </p>
          <h1 className="hero-animate max-w-3xl text-4xl font-semibold leading-[1.05] text-white md:text-5xl xl:text-[56px]">
            {hero.headline}
          </h1>
          <h2 className="hero-animate mt-3 text-2xl font-semibold text-slate-200">
            {hero.name}
          </h2>
          <p className="hero-animate mt-4 max-w-2xl text-base leading-relaxed text-slate-300 md:text-[1.06rem]">
            {hero.summary}
          </p>

          <div className="hero-animate mt-5 flex flex-wrap gap-2.5">
            {hero.highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-sm"
              >
                <span className="font-semibold text-slate-200">
                  {item.label}:
                </span>{" "}
                <span className="text-slate-300">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="hero-animate mt-6 flex flex-wrap items-center gap-3">
            <a href="#contact" className="primary-btn">
              Let’s Talk
            </a>
            <a href="#projects" className="ghost-btn">
              View Projects
            </a>
          </div>

          <div className="hero-animate mt-5 flex items-center gap-2.5">
            <motion.div variants={iconVariants} whileHover={{ scale: 1.08 }}>
              <Link
                href="https://www.linkedin.com/in/hossen-rakib/"
                target="_blank"
                className="inline-flex rounded-lg border border-slate-700 p-2.5 text-slate-300 transition hover:border-primary hover:text-white"
              >
                <FaLinkedin size={20} />
              </Link>
            </motion.div>
            <motion.div variants={iconVariants} whileHover={{ scale: 1.08 }}>
              <Link
                href="https://github.com/RakibHossen678"
                target="_blank"
                className="inline-flex rounded-lg border border-slate-700 p-2.5 text-slate-300 transition hover:border-primary hover:text-white"
              >
                <FaGithub size={20} />
              </Link>
            </motion.div>
            <motion.div variants={iconVariants} whileHover={{ scale: 1.08 }}>
              <Link
                href="https://www.facebook.com/profile.php?id=100056015882794"
                target="_blank"
                className="inline-flex rounded-lg border border-slate-700 p-2.5 text-slate-300 transition hover:border-primary hover:text-white"
              >
                <FaFacebook size={20} />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          ref={imageCardRef}
          className="relative mx-auto w-full max-w-xs md:max-w-sm lg:ml-auto"
          whileHover={{ scale: 1.02 }}
        >
          <div
            ref={glowRef}
            className="absolute inset-0 -z-10 rounded-[2rem] bg-primary/20 blur-3xl"
          />
          <div className="overflow-hidden rounded-[2rem] border border-slate-700/90 bg-slate-900 shadow-[0_28px_80px_rgba(15,23,42,0.55)]">
            <Image
              alt="profile"
              src="/profile.webp"
              width={420}
              height={460}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;
