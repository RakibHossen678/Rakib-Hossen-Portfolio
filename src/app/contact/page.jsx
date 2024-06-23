import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Skills from "@/Components/Skills";
const page = () => {
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

      <div className="w-10/12 mx-auto">
        <Contact></Contact>
      </div>
    </div>
  );
};

export default page;
