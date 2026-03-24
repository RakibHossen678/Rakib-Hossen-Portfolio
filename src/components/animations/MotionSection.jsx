"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motionVariants";

const MotionSection = ({
  children,
  className = "",
  variants = fadeUp,
  amount = 0.2,
  once = true,
  ...rest
}) => {
  return (
    <motion.section
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      {...rest}
    >
      {children}
    </motion.section>
  );
};

export default MotionSection;
