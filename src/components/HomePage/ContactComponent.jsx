"use client";
import { motion } from "framer-motion";
import { FaPhoneVolume } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import toast from "react-hot-toast";

const Contact = () => {
  const handleEmail = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const subject = e.target.subject.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    console.log({ name, subject, email, message });
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, subject, email, message }),
    });
    if (res.ok) {
      console.log("message sent");
      toast.success("Email sent successfully");
    }
  };

  return (
    <div className="pb-20 px-4 lg:px-12">
      <div className="flex flex-col lg:flex-row items-center lg:gap-36 gap-4 mt-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="p-4 py-6 w-full rounded-lg bg-gray-50 md:p-8"
        >
          <form onSubmit={handleEmail}>
            <div className="-mx-2 md:items-center md:flex">
              <div className="flex-1 px-2">
                <label className="block mb-2 text-sm text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 focus:border-primary dark:focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40 transition-colors duration-300 ease-in-out hover:border-primary-light"
                />
              </div>

              <div className="flex-1 px-2 mt-4 md:mt-0">
                <label className="block mb-2 text-sm text-gray-600">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Subject"
                  name="subject"
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-primary dark:focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40 transition-colors duration-300 ease-in-out hover:border-primary-light"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm text-gray-600">
                Email address
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-primary dark:focus:border-blue-400 focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40 transition-colors duration-300 ease-in-out hover:border-primary-light"
              />
            </div>

            <div className="w-full mt-4">
              <label className="block mb-2 text-sm text-gray-600">
                Message
              </label>
              <textarea
                className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 focus:border-primary dark:focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40 transition-colors duration-300 ease-in-out hover:border-primary-light"
                placeholder="Enter Message"
                name="message"
              ></textarea>
            </div>

            <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-transform duration-300 transform bg-primary rounded-lg focus:ring-opacity-50 hover:scale-105 hover:bg-primary-dark">
              Send message
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6 w-full"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="flex items-center space-x-5"
          >
            <div>
              <FaPhoneVolume
                className="bg-secondary text-white rounded-full p-2 transition-transform duration-300 ease-in-out hover:scale-110"
                size={40}
              />
            </div>
            <div>
              <h1 className="text-lg">Phone</h1>
              <h1 className="text-lg font-semibold">+8801933796400</h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="flex items-center space-x-5"
          >
            <div>
              <MdOutlineMailOutline
                className="bg-secondary text-white rounded-full p-2 transition-transform duration-300 ease-in-out hover:scale-110"
                size={40}
              />
            </div>
            <div>
              <h1 className="text-lg">Email</h1>
              <h1 className="text-lg font-semibold">rh491464@gmail.com</h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="flex items-center space-x-5"
          >
            <div>
              <IoLocationSharp
                className="bg-secondary text-white rounded-full p-2 transition-transform duration-300 ease-in-out hover:scale-110"
                size={40}
              />
            </div>
            <div>
              <h1 className="text-lg">Address</h1>
              <h1 className="text-lg font-semibold">
                Textile, 2no Gate,
                <br /> Chattogram, Bangladesh
              </h1>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
