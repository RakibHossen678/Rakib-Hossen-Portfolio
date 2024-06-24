

import HomePage from "@/components/HomePage";

export const dynamic = "force-dynamic";


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
