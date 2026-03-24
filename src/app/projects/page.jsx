import Project from "@/components/HomePage/ProjectComponent";
import MotionSection from "@/components/animations/MotionSection";

const page = () => {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-8 md:px-8 lg:px-12">
      <MotionSection className="section-shell px-6 py-12 text-center md:px-10">
        <h1 className="text-4xl font-semibold text-white md:text-5xl">
          Featured <span className="text-primary">Projects</span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300">
          A curated set of products focused on usability, performance, and clean
          architecture.
        </p>
      </MotionSection>

      <MotionSection
        className="section-shell mt-8 px-6 py-10 md:px-10"
        amount={0.15}
      >
        <Project />
      </MotionSection>
    </div>
  );
};

export default page;
