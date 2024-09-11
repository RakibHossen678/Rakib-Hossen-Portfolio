"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Skills", path: "/expertise" },
    { title: "Projects", path: "/projects" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <div className="bg-primary/20 fixed top-0 left-0 right-0 z-10 shadow-md">
      <div className="navbar lg:w-10/12 mx-auto px-4 py-3 flex justify-between items-center">
        <div className="navbar-start">
          <a className="lg:text-3xl text-2xl font-semibold">
            Rakib <span className="text-primary">Hossen.</span>
          </a>
        </div>
        <div className="navbar-end lg:flex hidden">
          <ul className="flex space-x-8 menu-horizontal">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.path}
                  className={`${
                    pathName === item.path
                      ? "text-secondary font-semibold border-b-2 border-b-secondary"
                      : "font-medium text-gray-700 hover:text-secondary transition-colors duration-300"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="btn btn-ghost">
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
            transition={{ duration: 0.3 }}
            className={`absolute top-16 right-0 mt-2 p-2 shadow-lg bg-[#E7DCFD] rounded-lg space-y-2 w-52 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.path}
                  className="block text-gray-700 font-medium hover:text-secondary transition-colors duration-300"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
