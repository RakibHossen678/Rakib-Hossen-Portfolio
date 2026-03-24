"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { title: "Home", id: "home" },
    { title: "Projects", id: "projects" },
    { title: "Skills", id: "skills" },
    { title: "Experience", id: "experience" },
    { title: "Education", id: "education" },
    { title: "About", id: "about" },
    { title: "Contact", id: "contact" },
  ];

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (!element) {
      return;
    }

    element.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <button
          onClick={() => handleScrollTo("home")}
          className="text-left text-lg font-bold tracking-[0.04em] text-white md:text-2xl"
          style={{
            fontFamily: "var(--font-space), var(--font-inter), sans-serif",
          }}
          aria-label="Go to home section"
        >
          <span className="text-primary">&lt;</span>
          <span className="bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
            Rakib Hossen
          </span>
          <span className="text-primary">/&gt;</span>
        </button>

        <div className="hidden lg:block">
          <ul className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/70 p-1">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleScrollTo(item.id)}
                  className={`${
                    activeSection === item.id
                      ? "rounded-lg bg-slate-800 px-3 py-2 font-semibold text-white"
                      : "rounded-lg px-3 py-2 font-medium text-slate-300 transition hover:bg-slate-800/70 hover:text-white"
                  }`}
                >
                  {item.title}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleScrollTo("contact")}
                className="primary-btn rounded-lg px-4 py-2 text-sm"
              >
                Hire Me
              </button>
            </li>
          </ul>
        </div>

        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg border border-slate-700 p-2 text-slate-200"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <motion.ul
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -12 }}
            transition={{ duration: 0.2 }}
            className={`absolute right-4 top-16 mt-2 w-56 space-y-1 rounded-xl border border-slate-700 bg-slate-900 p-2 shadow-xl ${
              isOpen ? "block" : "hidden"
            }`}
          >
            {navItems.map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleScrollTo(item.id)}
                  className={`block rounded-lg px-3 py-2 font-medium transition ${
                    activeSection === item.id
                      ? "bg-slate-800 text-white"
                      : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
                  }`}
                >
                  {item.title}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleScrollTo("contact")}
                className="primary-btn mt-1 w-full rounded-lg px-4 py-2 text-sm"
              >
                Hire Me
              </button>
            </li>
          </motion.ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
