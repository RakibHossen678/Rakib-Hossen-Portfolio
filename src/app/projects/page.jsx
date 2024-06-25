import Project from "@/components/HomePage/ProjectComponent";

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
            <h1 className="text-4xl text-white  font-semibold">
              Latest <span className="text-primary">Project</span>
            </h1>
           
          </div>
        </div>
      </div>
      <div className="w-10/12 mx-auto">
        <Project></Project>
      </div>
    </div>
  );
};

export default page;
