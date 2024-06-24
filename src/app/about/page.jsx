import Image from "next/image";
import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion";
const page = () => {
  return (
    <div>
      <div
        className="hero min-h-[300px]"
        style={{
          backgroundImage: "url('/cover.png')",
        }}
      >
        <div className="hero-content text-neutral-content text-center">
          <div className="text-center text-white">
            <h1 className="text-4xl   py-5 font-semibold">
              About <span className="text-primary"> Me</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="w-10/12 mx-auto">
        <div className="my-20">
          <div className="mt-6 flex flex-col lg:flex-row items-center justify-between space-x-6">
            <div className=" lg:w-[35%] rounded-md">
              <Image
                className="rounded-lg"
                quality={100}
                loading="lazy"
                width={400}
                height={300}
                alt="about"
                src="/about.png"
              />
            </div>
            <div className="lg:w-[60%]">
              <h1 className="text-lg font-medium text-secondary py-2">
                I am Rakib Hossen{" "}
              </h1>
              <p className="text-xl font-semibold text-primary pb-2">
                Front End Web Developer
              </p>
              <p className="text-sm">
                I am a Passionate front end web developer of React JS.
                Proficient in making responsive and user-friendly websites by
                HTML, CSS, JavaScript, React js and MongoDB.Moreover, I stylize
                it by using UI components ie Daisy UI, Mamba UI and Bootstrap.
                Backend I use MongoDB as well.I am confident that I can bring
                value to any project I work on. I am eager to collaborate with
                your team and contribute to the successful completion of your
                project. I would be happy to discuss my qualifications and
                experience with you if you are interested.
              </p>
              <button className="my-2">
                <a
                  href="resume.pdf"
                  download
                  className="flex space-x-2 items-center bg-primary text-white px-4 mt-2 hover:bg-secondary py-4 rounded-full  font-medium"
                >
                  <span>Download Resume</span>
                  <span>
                    <MdOutlineFileDownload size={25} />
                  </span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
