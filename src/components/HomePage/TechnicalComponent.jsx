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
        {skills.map((skill) => (
          <motion.div
            key={skill.label}
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:bg-primary/10 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-20 h-20 flex items-center justify-center  rounded-full mb-4">
              <Image src={skill.src} alt={skill.alt} width={64} height={64} />
            </div>
            <p className="text-lg font-semibold text-gray-700">{skill.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalComponent;
