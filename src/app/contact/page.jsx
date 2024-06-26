import Contact from "@/components/HomePage/ContactComponent";
import React from "react";

const page = () => {
  return (
    <div>
      <div
        className="hero lg:min-h-[300px]"
        style={{
          backgroundImage: "url('/cover.png')",
        }}
      >
        <div className="text-center py-5 ">
          <h1 className="text-4xl text-white  font-semibold">
            Contact <span className="text-primary">Me</span>
          </h1>
          <p className="text-gray-200  font-medium pt-2">Get In Touch</p>
        </div>
      </div>

      <div className="mx-auto lg:w-10/12">
        <Contact></Contact>
      </div>
    </div>
  );
};

export default page;
