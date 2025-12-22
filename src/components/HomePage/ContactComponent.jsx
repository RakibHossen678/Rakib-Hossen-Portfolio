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
    if (res) {
      console.log("message sent");
      toast.success("Email sent successfully");
    }
  };

  return (
    <div className="pb-20 px-4 lg:px-12">
      <div className="flex flex-col lg:flex-row items-center lg:gap-36 gap-4 mt-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="p-4 py-6 w-full rounded-2xl bg-white/80 backdrop-blur-lg shadow-2xl border border-white/20 md:p-8"
        >
          <form onSubmit={handleEmail}>
            <div className="-mx-2 md:items-center md:flex">
              <div className="flex-1 px-2">
                <label className="block mb-2 text-sm text-gray-700 font-semibold">Name</label>
                <motion.input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40 transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div className="flex-1 px-2 mt-4 md:mt-0">
                <label className="block mb-2 text-sm text-gray-700 font-semibold">
                  Subject
                </label>
                <motion.input
                  type="text"
                  placeholder="Enter Your Subject"
                  name="subject"
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40 transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm text-gray-700 font-semibold">
                Email address
              </label>
              <motion.input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40 transition-all duration-300"
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <div className="w-full mt-4">
              <label className="block mb-2 text-sm text-gray-700 font-semibold">
                Message
              </label>
              <motion.textarea
                className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg md:h-56 focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40 transition-all duration-300"
                placeholder="Enter Message"
                name="message"
                whileFocus={{ scale: 1.02 }}
              ></motion.textarea>
            </div>

            <motion.button 
              className="relative w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize rounded-full overflow-hidden group shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Send message</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
                initial={{ x: 0 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-secondary to-primary"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6 w-full"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="flex items-center space-x-5 p-4 rounded-2xl bg-white/80 backdrop-blur-lg shadow-lg border border-white/20 hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaPhoneVolume
                className="bg-gradient-to-br from-primary to-secondary text-white rounded-full p-2"
                size={40}
              />
            </motion.div>
            <div>
              <h1 className="text-lg font-semibold text-gray-700">Phone</h1>
              <h1 className="text-lg font-bold text-secondary">+8801933796400</h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="flex items-center space-x-5 p-4 rounded-2xl bg-white/80 backdrop-blur-lg shadow-lg border border-white/20 hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MdOutlineMailOutline
                className="bg-gradient-to-br from-primary to-secondary text-white rounded-full p-2"
                size={40}
              />
            </motion.div>
            <div>
              <h1 className="text-lg font-semibold text-gray-700">Email</h1>
              <h1 className="text-lg font-bold text-secondary">rh491464@gmail.com</h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="flex items-center space-x-5 p-4 rounded-2xl bg-white/80 backdrop-blur-lg shadow-lg border border-white/20 hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <IoLocationSharp
                className="bg-gradient-to-br from-primary to-secondary text-white rounded-full p-2"
                size={40}
              />
            </motion.div>
            <div>
              <h1 className="text-lg font-semibold text-gray-700">Address</h1>
              <h1 className="text-lg font-bold text-secondary">
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
