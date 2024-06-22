import About from "@/Components/About";
import Banner from "@/Components/Banner";
import Skills from "@/Components/Skills";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-114px)]">
      <div className="w-9/12 mx-auto">
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
      </div>
    </main>
  );
}
