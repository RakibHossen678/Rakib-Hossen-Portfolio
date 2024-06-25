import Contact from "@/components/HomePage/ContactComponent";
import React from "react";

const page = () => {
  // const handleEmail = async (e) => {
  //   e.preventDefault();
  //   const name = e.target.name.value;
  //   const subject = e.target.subject.value;
  //   const email = e.target.email.value;
  //   const message = e.target.message.value;
  //   console.log({ name, subject, email, message });
  //   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contact`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ name, subject, email, message }),
  //   });
  //   if (res.ok) {
  //     console.log("message send");
  //     toast.success("Email send successfully");
  //   }
  // };
  return (
    <div>
      <div
        className="hero min-h-[300px]"
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

      <div className="mx-auto w-10/12">
        <Contact></Contact>
      </div>
    </div>
  );
};

export default page;
