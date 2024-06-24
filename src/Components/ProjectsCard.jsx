import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectsCard = ({ item }) => {
  const { title, description, image, link, github } = item;
  return (
    <div className="group">
      <div className="max-w-lg h-[460px] overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Image
          className=" bg-cover group-hover:scale-110  bg-center  h-64"
          src={image}
          height={356}
          width={400}
          alt={title}
        />

        <div className="p-6 text-start flex flex-col flex-grow">
          <div className="flex-grow">
            <span className="text-2xl font-bold text-secondary  ">{title}</span>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </div>
          <div className="my-4 flex justify-center space-x-14">
            <Link href={link} target="_blank">
              <button className="border-2 text-secondary font-medium border-primary rounded-full px-5 py-2 hover:bg-primary hover:border-none hover:text-white transition-transform duration-1000 ease-linear">
                Live Demo
              </button>
            </Link>
            <Link href={github} target="_blank">
              <button className="border-2 text-secondary font-medium border-primary rounded-full px-6 py-2 hover:bg-primary hover:border-none hover:text-white transition-transform duration-1000 ease-linear">
                Github
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
