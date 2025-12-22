'use client';
import { motion } from "framer-motion";
import Image from "next/image";

const TechnicalComponent = () => {
  const skills = [
    { src: "/html.png", alt: "HTML", label: "HTML" },
    { src: "/css.png", alt: "CSS", label: "CSS" },
    { src: "/tailwind.png", alt: "Tailwind CSS", label: "Tailwind CSS" },
    { src: "/javascript.png", alt: "JavaScript", label: "JavaScript" },
    { src: "/react.png", alt: "React JS", label: "React JS" },
    { src: "/nextjs.png", alt: "Next JS", label: "Next JS" },
    { src: "/expressjs.png", alt: "Express JS", label: "Express JS" },
    { src: "/mongodb.png", alt: "MongoDB", label: "MongoDB" },
    { src: "/firebase.png", alt: "Firebase", label: "Firebase" },
    { src: "/github.png", alt: "Github", label: "Github" },
    { src: "/bootstrap.png", alt: "Bootstrap", label: "Bootstrap" },
  ];

  return (
    <section className="py-16 px-4 text-center  ">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.label}
            className="relative flex flex-col items-center p-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 hover:border-primary/50 transform transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Glassmorphism glow on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
            
            <div className="w-20 h-20 flex items-center justify-center rounded-full mb-4 relative z-10 bg-gradient-to-br from-purple-50 to-pink-50 group-hover:from-primary/10 group-hover:to-secondary/10 transition-colors duration-300">
              <Image src={skill.src} alt={skill.alt} width={64} height={64} />
            </div>
            <p className="text-lg font-semibold text-gray-700 relative z-10 group-hover:text-primary transition-colors duration-300">{skill.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalComponent;
