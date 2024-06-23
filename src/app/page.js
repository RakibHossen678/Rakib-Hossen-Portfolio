import About from "@/Components/About";
import Banner from "@/Components/Banner";
import Contact from "@/Components/Contact";
import Project from "@/Components/Project";
import Skills from "@/Components/Skills";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-114px)]">
      <div className="lg:w-9/12 w-11/12 mx-auto">
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
      </div>
      <div className="lg:w-10/12 mx-auto">
        <Project></Project>
        <Contact></Contact>
      </div>
    </main>
  );
}
