import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { src: '/html.png', alt: 'HTML', label: 'HTML' },
  { src: '/css.png', alt: 'CSS', label: 'CSS' },
  { src: '/tailwind.png', alt: 'Tailwind CSS', label: 'Tailwind CSS' },
  { src: '/javascript.png', alt: 'JavaScript', label: 'JavaScript' },
  { src: '/react.png', alt: 'React JS', label: 'React JS' },
  { src: '/nextjs.png', alt: 'Next JS', label: 'Next JS' },
  { src: '/expressjs.png', alt: 'Express JS', label: 'Express JS' },
  { src: '/mongodb.png', alt: 'MongoDB', label: 'MongoDB' },
  { src: '/firebase.png', alt: 'Firebase', label: 'Firebase' },
  { src: '/github.png', alt: 'Github', label: 'Github' },
  { src: '/bootstrap.png', alt: 'Bootstrap', label: 'Bootstrap' },
];

const Skills = () => {
  return (
    <div className="container mx-auto p-4 lg:p-0">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8">
        {skills.map(({ src, alt, label }, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center justify-center p-6 rounded-lg border-2 border-gray-200 bg-white shadow-md hover:shadow-xl hover:bg-primary/10 transition-all duration-300 ease-in-out"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <Image
              alt={alt}
              width={62}
              height={62}
              src={src}
              className="rounded-full"
            />
            <h1 className="mt-4 text-lg font-semibold text-secondary">
              {label}
            </h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;