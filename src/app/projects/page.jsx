import Project from "@/components/HomePage/ProjectComponent";

const page = () => {
  return (
    <div>
      <div
        className="hero lg:min-h-[300px]"
        style={{
          backgroundImage: "url('/cover.png')",
        }}
      >
        <div className="hero-content text-neutral-content text-center">
          <div className="text-center py-5 ">
            <h1 className="text-4xl text-white  font-semibold">
              Latest <span className="text-primary">Project</span>
            </h1>
            <p className="text-white pt-1 font-medium">
              A Showcase of My Most Impactful Projects
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-10/12 w-full mx-auto">
        <Project></Project>
      </div>
    </div>
  );
};

export default page;
