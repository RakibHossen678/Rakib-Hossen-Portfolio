import About from "@/Components/About";
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
        <div className="hero-content text-neutral-content text-center">
          <div className="text-center py-5 ">
            <h1 className="text-4xl text-primary  font-font-semibold">Skills</h1>
            <p className="text-white pt-1 font-medium">My Technical Level</p>
          </div>
        </div>
      </div>

      <div className="w-10/12 mx-auto">
        <Skills></Skills>
      </div>
    </div>
  );
};

export default page;
