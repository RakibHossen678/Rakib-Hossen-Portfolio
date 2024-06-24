export const dynamic = "force-dynamic";
import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-114px)]">
      <div className="lg:w-9/12 w-11/12 mx-auto">
        <Banner></Banner>
        <div className="my-20">
          <div className="text-center">
            <h1 className="text-4xl text-secondary  py-5 font-semibold">
              About <span className="text-primary"> Me</span>
            </h1>
          </div>
          <About></About>
        </div>
        <div>
          <div className="text-center py-5 ">
            <h1 className="text-4xl text-secondary  font-semibold">Skills</h1>
            <p className="text-gray-600 pt-1 font-medium">My Technical Level</p>
          </div>
          <Skills></Skills>
        </div>
      </div>
      <div className="lg:w-10/12 mx-auto">
        <div className="text-center">
          <h1 className="text-4xl text-secondary  py-5 font-semibold">
            Latest <span className="text-primary">Projects</span>
          </h1>
        </div>
        <Project></Project>
        <div className="text-center py-5 ">
          <h1 className="text-4xl text-secondary  font-semibold">
            Contact <span className="text-primary">Me</span>
          </h1>
          <p className="text-gray-600  font-medium pt-2">Get In Touch</p>
        </div>
        <Contact></Contact>
      </div>
    </main>
  );
}
