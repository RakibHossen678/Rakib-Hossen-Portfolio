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
    <div>
      <div className="grid grid-cols-1 items-start gap-4 sm:gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full rounded-2xl border border-slate-700 bg-slate-900/60 p-4 sm:p-6 md:p-8"
        >
          <div className="mb-5 sm:mb-6">
            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              Start a Conversation
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300 md:text-base">
              Share your goals and timeline. I’ll get back with a clear and
              practical plan.
            </p>
          </div>
          <form onSubmit={handleEmail}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  className="mt-1.5 block w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Subject"
                  name="subject"
                  className="mt-1.5 block w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-2 block text-sm text-slate-300">
                Email address
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                className="mt-1.5 block w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-primary focus:outline-none"
              />
            </div>

            <div className="mt-4 w-full">
              <label className="mb-2 block text-sm text-slate-300">
                Message
              </label>
              <textarea
                className="mt-1.5 block h-40 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-primary focus:outline-none md:h-52"
                placeholder="Enter Message"
                name="message"
              ></textarea>
            </div>

            <button className="primary-btn mt-5 w-full">Send message</button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full space-y-4"
        >
          <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-4 sm:p-6">
            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              Direct Contact
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Prefer a quick discussion? Reach me through the details below.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.05, ease: "easeOut" }}
            className="flex items-start gap-3 rounded-xl border border-slate-700 bg-slate-900/60 p-4 sm:items-center sm:gap-4 sm:p-5"
          >
            <div>
              <FaPhoneVolume
                className="rounded-full bg-secondary p-2 text-white"
                size={34}
              />
            </div>
            <div>
              <h1 className="text-sm uppercase tracking-wider text-slate-400">
                Phone
              </h1>
              <h1 className="text-sm font-semibold text-white sm:text-base">
                +880 1933-796400
              </h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
            className="flex items-start gap-3 rounded-xl border border-slate-700 bg-slate-900/60 p-4 sm:items-center sm:gap-4 sm:p-5"
          >
            <div>
              <MdOutlineMailOutline
                className="rounded-full bg-secondary p-2 text-white"
                size={34}
              />
            </div>
            <div className="min-w-0">
              <h1 className="text-sm uppercase tracking-wider text-slate-400">
                Email
              </h1>
              <h1 className="break-all text-sm font-semibold text-white sm:text-base">
                rakib.hossen.webdev@gmail.com
              </h1>
              <h1 className="break-all text-sm font-semibold text-white sm:text-base">
                rh491464@gmail.com
              </h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.15, ease: "easeOut" }}
            className="flex items-start gap-3 rounded-xl border border-slate-700 bg-slate-900/60 p-4 sm:items-center sm:gap-4 sm:p-5"
          >
            <div>
              <IoLocationSharp
                className="rounded-full bg-secondary p-2 text-white"
                size={34}
              />
            </div>
            <div>
              <h1 className="text-sm uppercase tracking-wider text-slate-400">
                Address
              </h1>
              <h1 className="text-sm font-semibold text-white sm:text-base">
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
