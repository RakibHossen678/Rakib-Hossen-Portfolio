import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="lg:min-h-[calc(100vh-62px)] flex justify-between items-center lg:flex-row  flex-col-reverse ">
      <div className="lg:w-[75%]">
        <h1 className="text-4xl  text-primary py-4 font-semibold">
          I am Rakib Hossen
        </h1>
        <h1 className="lg:text-7xl text-5xl text-secondary font-semibold max-w-lg py-4">
          Front End Web Developer
        </h1>
        <p className="max-w-xl text-base text-gray-700">
          Passionate About Building Beautiful and Functional Websites.I am
          committed to delivering modern, efficient, and maintainable code,
          which makes me a valuable asset to any project.
        </p>
      </div>
      <div className="lg:w-[35%] my-10 lg:h-[200px] rotate-3 hover:rotate-0 transition-transform duration-400 ease-linear shadow-xl">
        <Image
          alt="profile"
          className="lg:w-[500px] rounded-lg"
          height={700}
          width={700}
          src="/profile.png"
        />
      </div>
    </div>
  );
};

export default Banner;
