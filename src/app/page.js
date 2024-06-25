export const dynamic = "force-dynamic";
import HomePage from "@/components/HomePage/HomePage";

// import AOS from "aos";
// import "aos/dist/aos.css";

export default function Home() {
  // useEffect(() => {
  //   AOS.init();
  // }, []);
  return (
    <main className="min-h-[calc(100vh-114px)]">
      <HomePage></HomePage>
    </main>
  );
}
