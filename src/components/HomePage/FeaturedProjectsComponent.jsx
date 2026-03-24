"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    _id: "1",
    title: "ChatSphere",
    description:
      "A modern community forum platform where users can create posts, share opinions, and engage through comments and voting, with secure authentication and a responsive experience across devices.",
    link: "https://chatspher.web.app/",
    github: "https://github.com/RakibHossen678/chatSpre-Client",
    tag: "Social",
    color: "#6366f1",
    skills: ["React", "Firebase", "Tailwind CSS", "MongoDB", "Express JS"],
  },
  {
    _id: "2",
    title: "CareKitchen",
    description:
      "A food donation and request platform that helps users add, manage, and discover food contributions through clear workflows, role-based actions, and user-friendly interfaces.",
    link: "https://assignment11-736a2.web.app/",
    github: "https://github.com/RakibHossen678/CareKitchen-Client",
    tag: "Community",
    color: "#22c55e",
    skills: ["React", "Firebase", "Tailwind CSS", "MongoDB", "Express JS"],
  },
  {
    _id: "3",
    title: "CreativeCanvasHub",
    description:
      "A creative marketplace platform where artists can upload and manage craft items while users browse by category, explore details, and discover unique artwork easily.",
    link: "https://assignment10-a34c2.web.app/",
    github: "https://github.com/RakibHossen678/CreativeCanvasHub-Client",
    tag: "Creative",
    color: "#f59e0b",
    skills: ["React", "Firebase", "Tailwind CSS", "MongoDB", "Express JS"],
  },
];

export default function FeaturedProjectsComponent() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="mx-auto w-full max-w-7xl px-3 py-8 sm:px-4 md:py-12 lg:py-14">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 md:mb-10"
      >
        <div className="mb-3 flex items-center gap-3">
          <span
            className="inline-block h-0.5 w-9 rounded"
            style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6)" }}
          />
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-500 sm:text-xs">
            Portfolio
          </span>
        </div>
        <h2 className="text-3xl font-bold leading-tight text-slate-100 sm:text-4xl lg:text-5xl">
          Featured <span style={{ color: "#6366f1" }}>Projects</span>
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base md:text-lg">
          A selection of things I have built — from community platforms to
          real-time applications.
        </p>
      </motion.div>

      {/* Project Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2 xl:grid-cols-3 xl:gap-6"
      >
        {projects.map((project, i) => (
          <ProjectCard
            key={project._id}
            project={project}
            index={i}
            isHovered={hoveredId === project._id}
            anyHovered={hoveredId !== null}
            onHover={() => setHoveredId(project._id)}
            onLeave={() => setHoveredId(null)}
          />
        ))}
      </motion.div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  isHovered,
  anyHovered,
  onHover,
  onLeave,
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: anyHovered && !isHovered ? 0.55 : 1,
        y: 0,
        scale: isHovered ? 1.02 : 1,
      }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.05,
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "1.25rem",
        overflow: "hidden",
        border: `1px solid ${isHovered ? project.color + "55" : "#1e293b"}`,
        background: "#0f172a",
        cursor: "pointer",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        boxShadow: isHovered
          ? `0 0 40px ${project.color}22, 0 8px 32px #00000060`
          : "0 4px 16px #00000040",
        position: "relative",
      }}
    >
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0.8 }}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 3,
          background: project.color,
        }}
      />

      <div
        style={{
          padding: "1.15rem 1.1rem 1.15rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.85rem",
          flex: 1,
        }}
        className="sm:p-5"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.75rem",
          }}
        >
          <span
            style={{
              padding: "0.25rem 0.75rem",
              borderRadius: 999,
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              background: project.color + "22",
              color: project.color,
              border: `1px solid ${project.color}44`,
            }}
          >
            {project.tag}
          </span>
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              color: "#475569",
              letterSpacing: "0.08em",
            }}
          >
            {String(
              projects.findIndex((p) => p._id === project._id) + 1,
            ).padStart(2, "0")}
          </span>
        </div>

        <h3
          style={{
            margin: 0,
            fontSize: "1.22rem",
            fontWeight: 700,
            color: "#f1f5f9",
            letterSpacing: "-0.01em",
            minHeight: "2.5rem",
            lineHeight: 1.2,
          }}
          className="sm:text-2xl"
        >
          {project.title}
        </h3>

        <p
          style={{
            margin: 0,
            color: "#94a3b8",
            fontSize: "0.94rem",
            lineHeight: 1.7,
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            minHeight: "6.3rem",
          }}
          className="sm:text-base"
        >
          {project.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {project.skills.map((skill) => (
            <span
              key={skill}
              style={{
                padding: "0.28rem 0.62rem",
                borderRadius: 999,
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "#cbd5e1",
                border: "1px solid #334155",
                background: "#0b1224",
                letterSpacing: "0.02em",
              }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "#1e293b", marginTop: "auto" }} />

        {/* Action Buttons */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "0.6rem",
            paddingTop: "0.25rem",
          }}
          className="sm:grid-cols-2 sm:gap-3"
        >
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.4rem",
              padding: "0.62rem 0.9rem",
              borderRadius: "0.625rem",
              fontSize: "0.8rem",
              fontWeight: 600,
              textDecoration: "none",
              background: isHovered ? project.color : "#1e293b",
              color: isHovered ? "#fff" : "#cbd5e1",
              border: `1px solid ${isHovered ? project.color : "#334155"}`,
              transition: "all 0.25s ease",
              letterSpacing: "0.01em",
            }}
          >
            <FiExternalLink size={13} />
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.4rem",
              padding: "0.62rem 0.9rem",
              borderRadius: "0.625rem",
              fontSize: "0.8rem",
              fontWeight: 600,
              textDecoration: "none",
              background: "transparent",
              color: "#64748b",
              border: "1px solid #1e293b",
              transition: "all 0.25s ease",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#cbd5e1";
              e.currentTarget.style.borderColor = "#334155";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#64748b";
              e.currentTarget.style.borderColor = "#1e293b";
            }}
          >
            <FiGithub size={13} />
            Source
          </a>
        </div>
      </div>
    </motion.article>
  );
}
